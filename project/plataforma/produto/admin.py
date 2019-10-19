from django.contrib import admin
from common.admin import ModelAdminFarmTrack
from .models import Produto, Metrica, Processo, Lote, HistoricoLote


class ProdutoAdmin(ModelAdminFarmTrack):
    exclude = ('user',)
    list_display = ('nome', 'produtor', "_metricas", )
    search_fields = ('nome', 'produtor', )

    def _metricas(self, obj):
        nomes = []
        for n in obj.metricas.all():
            nomes.append(n.nome)
        return ", ".join(nomes)
    _metricas.short_description = "métricas"


class MetricaAdmin(ModelAdminFarmTrack):
    exclude = ('user',)
    list_display = ('url_imagem', 'nome', '_processos')
    search_fields = ('url_imagem', 'nome', )

    def _processos(self, obj):
        nomes = []
        for n in obj.processos.all():
            nomes.append(n.nome)
        return ", ".join(nomes)


class LoteAdmin(ModelAdminFarmTrack):
    exclude = ('user',)
    list_display = ('nome', 'data', 'produto', )
    search_fields = ('nome', 'data', 'produto', )



class HistoricoLoteAdmin(ModelAdminFarmTrack):
    exclude = ('user',)
    list_display = ('lote', 'processo', 'data', )
    search_fields = ('processo_nome', 'data', 'loste__produto__nome', )


admin.site.register(Produto, ProdutoAdmin)
admin.site.register(Metrica, MetricaAdmin)
admin.site.register(Processo)
admin.site.register(Lote, LoteAdmin)
admin.site.register(HistoricoLote, HistoricoLoteAdmin)


