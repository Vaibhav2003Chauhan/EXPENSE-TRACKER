from django.db import models
from django.conf import settings

class Expenses(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='expenses',
        null = True  
    )
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    amount = models.IntegerField()
    date = models.CharField(max_length=100)
    bank = models.CharField(max_length=200, null=True)
    category = models.CharField(max_length=20, null=True)
    investment = models.BooleanField(default=False)
    phone = models.IntegerField(default=0000000000, null=False)  # user phone number is this

    def __str__(self):
        return self.name

class totals(models.Model):
    user = models.OneToOneField( 
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_totals',
        null = True  
    )
    invested_money = models.IntegerField(default=0)
    spent_money = models.IntegerField(default=0)

    def __str__(self):
        return f"Totals for {self.user.username}"
    

class PersonalEmis(models.Model):
    user = models.OneToOneField( 
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='personal_emis',
        null=True  
    )

    EmiName = models.CharField(default="Your Emi Name",max_length=1000)
    EmiAmount = models.IntegerField(default=000,null=False)
    EmiDate = models.CharField(null=False,max_length=100)
    EmiAmount = models.IntegerField(default=000, null=False)
    EmiDueDate = models.CharField(null=False, max_length=100)
    EmiMonths = models.IntegerField(null=False, default=00)  # how long does the EMI will run for an employee

    def __str__(self):
        return f"The User EMI is this {self.EmiName}"

