from django.contrib import admin
from django.contrib import messages
from django.utils.translation import ngettext
from . import models

@admin.register(models.Clientes)
class ClientesAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.Contas)
#    list_display =['id','nome','email',]
#    list_editable=['foto_logo']
#    list_filter=['tipo_cliente']
