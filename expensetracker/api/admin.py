from django.contrib import admin
from api.models import Expenses, totals,PersonalEmis,ImportantBills

# Register your models here.
admin.site.register(Expenses)
admin.site.register(totals)
admin.site.register(PersonalEmis)
admin.site.register(ImportantBills)
