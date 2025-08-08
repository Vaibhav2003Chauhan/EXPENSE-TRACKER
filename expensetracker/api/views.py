from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import login,logout,authenticate
from api.models import Expenses, totals, PersonalEmis
from rest_framework import status
from django.http import JsonResponse

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


#Admin pass and id vishu 12
invested_money=0 
spended_money=0

@api_view(['POST'])
def signup(request):
    #   Dummy Data
    # {
    #     "username" : "Vaibhav",
    #     "email" : "vchauhan@gmail.com",
    #     "password" : "12345678"
    # }
    data = request.data
    print(f"The raw data coming to the Signup function is the : {data}")
    username = data['username']
    email = data['email']
    password = data['password']

    try:
        if User.objects.filter(email = email).exists():
            # Email Already exist so we cannot register
            return Response({"status" : "Email already register here "})

        else:
            user = User.objects.create_user(username = username, email = email , password = password)
            user.first_name = data['username']
            user.save()
            return Response({"status" : "Signup successfull"})

    except Exception as e :
        print(e)
        return Response({"status" : "Signup unsuccessfull" , "error" : str(e) })
    

@api_view(['POST'])
def signin(request):
    try :
        data = request.data
        print(f"The Data in the Signup function is {data}")
        email = data['email']
        password = data['password']
        user_obj = User.objects.get(email = email)
        username = user_obj.username
        print(username)
        print(f"The username and email, password in Login function is :{username} {email} {password}")
        if User.objects.filter(email = email).exists() == True :
            # User exist and we can try to login in the account
            user = authenticate(username = username, password = password)
            if user is not None :
                login(request,user)
                return JsonResponse({"message": "Signup successful"}, status=201)

        else:
            print("The User does not exist ")
            return JsonResponse({"message": "Signup Unsuccessful"}, status=400)
    
    except Exception as e :
        return JsonResponse({"message": "Signup Unsuccessful"}, status=400)


@api_view(['POST'])
def send_expense_info(request):
    global invested_money
    global spended_money
    if request.method == 'POST':
        try:
            #expense_name,
            # bank,
            # description,
            # amount,
            # category,
            # investement,
            # date
            data = request.data
            user = request.data.user
            print(f"The Data inside the sending information : {data}")
            expense_name = data['expense_name']
            description = data['description']
            amount = data['amount']
            date = data['date']
            bank_name = data['bank']
            category = data['category']
            investment = data['investement']

            expense = Expenses.objects.create(name=expense_name,
                user = user,
                description=description,
                amount=amount,
                date=date,
                bank=bank_name,
                category=category,
                investment=investment )
            expense.save()

            # Get or create totals for the user
            user_totals, created = totals.objects.get_or_create(user=user)
            
            # Update the totals based on investment type
            if data['investment']:
                user_totals.invested_money += data['amount']
            else:
                user_totals.spent_money += data['amount']
            
            user_totals.save()

            return Response({
                "message": "Expense saved successfully!",
                "totals": {
                    "invested": user_totals.invested_money,
                    "spent": user_totals.spent_money
                }
            }, status=status.HTTP_201_CREATED)

        except Exception as e :
            print(f"The Exception occur in the send Expense Info Function is {e}")
            return Response({"message": "Expense unsuccessfully!"}, status=status.HTTP_400_BAD_REQUEST)
    else:
        print("The request method is not POST ")

# This function gets all the information of the expenses which a user is login
@api_view(['GET'])
def get_all_expenses(request):
    user = request.user
    print(user)
    print(f'The requested user is : {user}')
    expenses = Expenses.objects.filter(user = user ).values()
    print(f"The Expenses that we get for the user {user} is this {expenses}")

    if user is None :
        print("The User is reported as null ")
        # Need to send a Toast as a response here to notify the user about its expenses list 
        return Response({"message": "Expense List for the user is completely Null"}, status=status.HTTP_400_BAD_REQUEST)

    else :
        print("The user is not Null ")
        return Response({"message": "User  successfully!"}, status=status.HTTP_200_OK)


@api_view(['POST'])
def send_emi_notification(request):
    print("The send Emi Function has been invoked in here ")
    user = request.user
    print(f"Hey {user} is the current login user is this")
    notification_number = user.phone
    notification_email = user.email
    print(f"The number which require notification to be send is this : {notification_number}")
    print(f"The email which require notification to be send is this : {notification_email}")

    # Fetch the user's EMI details
    try:
        personal_emi = user.personal_emis  # OneToOne relation
        emi_name = personal_emi.EmiName
        emi_amount = personal_emi.EmiAmount
        emi_due_date = personal_emi.EmiDueDate
        emi_months = personal_emi.EmiMonths
    except Exception as e:
        print(f"No EMI data found for user in Exception {e}.")
        return  

    # Email setup
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    your_email = ''         # <-- Put your sender email here
    your_password = ''      # <-- Put your app password here

    to_email = notification_email
    subject = f"Upcoming EMI Reminder: {emi_name}"
    body = (
        f"Hello {user.username},\n\n"
        f"This is a reminder that your EMI for '{emi_name}' of amount ₹{emi_amount} "
        f"is due on {emi_due_date}.\n"
        f"This EMI is scheduled for {emi_months} month(s).\n\n"
        "Please ensure timely payment to avoid penalties.\n\n"
        "Thank you."
    )

    msg = MIMEMultipart()
    msg['From'] = your_email
    msg['To'] = to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(your_email, your_password)
        server.sendmail(your_email, to_email, msg.as_string())
        print('Email sent successfully!')
    except Exception as e:
        print(f'Failed to send email: {e}')
    finally:
        server.quit()


@api_view(['POST'])
def add_emis_in_db(request):
    print("Adding Emis Function got hit")
    if request.method == 'POST':

        try :
            data = request.data

            user = request.user
            print(f"The Current login user is : {user}")

            print(f"The Data Encounter in the add_emis_in_db is{data}")
            emi_name = data['emi_name']
            emi_total_amount = data['emi_total_amount']
            emi_monthly_deduction_date = data['emi_monthly_deduction_date']
            emi_monthly_installement_amount = data['emi_monthly_installement_amount']
            emi_total_months_duration = data['emi_total_months_duration']

            personal_emi = PersonalEmis.objects.create(emi_name = emi_name,
                                                    emi_total_amount = emi_total_amount,
                                                    emi_monthly_deduction_date = emi_monthly_deduction_date,
                                                    emi_monthly_installement_amount = emi_monthly_installement_amount,
                                                    emi_total_months_duration = emi_total_months_duration)

            personal_emi.save()
            return Response({"message": "Personal Emi Created Successfully"}, status=status.HTTP_200_OK)

        except Exception as e :
            print("The Exception Occur while adding emis from server is {e}")
            return Response({"message": "Personal Emi Creation Unsuccessfully"}, status=status.HTTP_400_BAD_REQUEST)
        
    else:
        print("The Request is not POST request")
        return Response({"message": "Personal Emi Creation Unsuccessfully"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


