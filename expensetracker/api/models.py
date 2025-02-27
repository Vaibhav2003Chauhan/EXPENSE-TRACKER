from django.db import models

# Create your models here.
class Expenses(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    amount = models.IntegerField()
    date = models.CharField(max_length=10)
    bank = models.CharField(max_length=20,null=True)
    category = models.CharField(max_length=20,null=True)
    investment = models.BooleanField(default = False)

    def __str__(self):
        return self.name

class totals(models.Model):
    invested_money = models.IntegerField()
    spent_money = models.IntegerField()
    

