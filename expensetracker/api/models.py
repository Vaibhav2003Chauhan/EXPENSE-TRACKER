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
    date = models.CharField(max_length=10)
    bank = models.CharField(max_length=20, null=True)
    category = models.CharField(max_length=20, null=True)
    investment = models.BooleanField(default=False)

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