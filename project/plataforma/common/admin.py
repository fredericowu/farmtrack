from django.contrib import admin


class ModelAdminFarmTrack(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.user:
            obj.user = request.user
        obj.save()

    def get_queryset(self, request):
        filter_user = request.user
        requested_user = request.GET.get("user")
        if request.user.is_superuser and requested_user:
            filter_user = requested_user

        qs = super(admin.ModelAdmin, self).get_queryset(request)
        return qs.filter(user=filter_user)

    def has_change_permission(self, request, obj=None):
        if not obj:
            return True
        return obj.user == request.user or request.user.is_superuser

