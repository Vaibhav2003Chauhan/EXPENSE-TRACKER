from django.contrib import admin
from django.urls import path,include
from api import views
from api.views import * 

urlpatterns =[
    path('signup',views.signup, name="signup"),
    path('signin',views.signin, name="signin"),
    path('send_expense_info',views.send_expense_info, name = "send_expense_info"),
    path('get_all_expenses',views.get_all_expenses, name = "get_all_expenses")

]