from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import login,logout,authenticate
from api.models import Expenses, totals
from rest_framework import status

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
    data = request.data
    print(f"The Data in the Signup function is {data}")
    username = data['username']
    email = data['email']
    password = data['password']
    print(f"The username and email, password in Login function is :{username} {email} {password}")
    if User.objects.filter(email = email).exists() == True :
        # User exist and we can try to login in the account
        user = authenticate(username = username, password = password)
        if user is not None :
            login(request,user)
            return Response({"status" : "User login Successfull"})

    else:
        print("The User does not exist ")
        return Response({"status" : "User login Unsuccessfull"})
    

    # name = models.CharField(max_length=200)
    # description = models.CharField(max_length=500)
    # amount = models.IntegerField()
    # date = models.CharField(max_length=10)
    # bank = models.CharField(max_length=20,null=True)
    # category = models.CharField(max_length=20,null=True)
    # investement = models.BooleanField(default = False)

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
