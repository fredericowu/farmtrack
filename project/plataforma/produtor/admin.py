from django.contrib import admin
from common.admin import ModelAdminFarmTrack
from .models import Produtor, Local


class ProdutorAdmin(ModelAdminFarmTrack):
    exclude = ('user',)
    list_display = ('nome', 'tipo', )
    search_fields = ('nome', 'tipo', )


admin.site.register(Produtor, ProdutorAdmin)
#admin.site.register(Local)