from django.contrib import admin
from . import models

@admin.register(models.Clientes)
class ClientesAdmin(admin.ModelAdmin):
    pass
# Register your models here.