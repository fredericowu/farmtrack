from django.contrib import admin
from django.contrib.auth.admin import UserAdmin, GroupAdmin
from django.contrib.auth.models import User, Group
from django.utils.html import format_html


def mudar_grupo(user, group):
    for g in user.groups.all():
        if "Fase" in g.name:
            user.groups.remove(g)
    user.groups.add(group)
    user.save()

def mudar_fase1(modeladmin, request, queryset):
    group = Group.objects.get(name="Fase 1")
    for user in queryset:
        mudar_grupo(user, group)
mudar_fase1.short_description = "Mudar para Fase 1"

def mudar_fase2(modeladmin, request, queryset):
    group = Group.objects.get(name="Fase 2")
    for user in queryset:
        mudar_grupo(user, group)
mudar_fase2.short_description = "Mudar para Fase 2"

def mudar_fase3(modeladmin, request, queryset):
    group = Group.objects.get(name="Fase 3")
    for user in queryset:
        mudar_grupo(user, group)
mudar_fase3.short_description = "Mudar para Fase 3"


class CustomUserAdmin(UserAdmin):
    actions = [mudar_fase1, mudar_fase2, mudar_fase3,]

    def __init__(self, *args, **kwargs):
        super(UserAdmin,self).__init__(*args, **kwargs)
        UserAdmin.list_display = ('username', 'nome', 'fase', 'visualizar_dados')
        UserAdmin.list_filter = ('is_superuser', 'is_active', 'groups')

    def nome(self, obj):
        return "{} {}".format(obj.first_name, obj.last_name)

    def visualizar_dados(self, obj):
        return format_html("<a href='/admin/dadosusuario/?id={}'>+ dados</a>", obj.pk)

    def fase(self, obj):
        result = 0
        groups = obj.groups.all()
        for o in groups:
            if o.name == 'Fase 1' and result < 1:
                result = 1
            elif o.name == 'Fase 2' and result < 2:
                result = 2
            if o.name == 'Fase 3' and result < 3:
                result = 3
        return "Fase {0}".format(result) if result > 0 else "-"


admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)
#admin.site.unregister(Group)
#admin.site.register(Group, CustomGroupAdmin)