#from django.shortcuts import render
#from django.shortcuts import get_object_or_404
#from myapps.serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from produto.models import Produto, Lote, HistoricoLote, Metrica
from produtor.models import Produtor
from rest_framework import serializers


class Produtos(viewsets.ViewSet):
    def list(self, request):
        nome_produtor = request.GET.get("produtor")
        produtos = Produto.objects.filter(produtor__nome=nome_produtor)
        serializer = ProdutoSerializer(produtos, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def detalhes(self, request):
        id = request.GET.get("id")
        produtos_composicao = []
        ultimo_lote = Lote.objects.filter(produto__id=id).order_by("-data")
        if ultimo_lote:
            ultimo_lote = ultimo_lote[0]
            for l in ultimo_lote.composto.all():
                produtos_composicao.append(l.produto)

        serializer = ProdutoSerializer(produtos_composicao, many=True)
        return Response(serializer.data)


class HistoricosLote(viewsets.ViewSet):
    def list(self, request):
        lote = request.GET.get("lote")
        historico = HistoricoLote.objects.filter(lote__pk=lote)
        #serializer = HistoricoLoteSerializer(historico, many=True)

        metricas = {}
        for h in historico:
            metrica = h.processo.get_metrica()
            if metrica and metrica.nome not in metricas:
                metricas[metrica.nome] = {}
                metricas[metrica.nome]["processos"] = []
                metricas[metrica.nome]["metrica"] = metrica.nome
                metricas[metrica.nome]["url_imagem"] = metrica.url_imagem
            metricas[metrica.nome]["processos"].append(h.processo.nome)

        return Response(metricas.values())


class HistoricoLoteSerializer(serializers.ModelSerializer):
    metrica = serializers.SerializerMethodField('get_metrica')
    processo = serializers.SerializerMethodField('get_processo')

    class Meta:
        model = HistoricoLote
        fields = ['data', 'metrica', 'processo', ]

    def get_metrica(self, obj):
        metrica = Metrica.objects.filter(processos=obj.processo.id)
        if metrica:
            return metrica[0].nome
        return None

    def get_processo(self, obj):
        return obj.processo.nome


class ProdutorSerializer(serializers.ModelSerializer):
    produtos = serializers.SerializerMethodField('get_produtos')

    class Meta:
        model = Produtor
        fields = ['nome', 'descricao', 'produtos', 'id']

    def get_produtos(self, obj):
        return ProdutoSimplesSerializer(Produto.objects.filter(produtor__id=obj.id), many=True).data


class ProdutoSerializer(serializers.ModelSerializer):
    metricas = serializers.StringRelatedField(many=True)
    produtor = ProdutorSerializer(read_only=True)
    lote = serializers.SerializerMethodField('get_lote')

    class Meta:
        model = Produto
        fields = ['nome', 'url_imagem', 'id', 'lote', 'metricas', 'produtor']

    def get_lote(self, obj):
        ultimo_lote = Lote.objects.filter(produto__id=obj.id).order_by("-data")
        return ultimo_lote[0].pk if ultimo_lote else None

class ProdutoSimplesSerializer(ProdutoSerializer):
    class Meta:
        model = Produto
        fields = ['nome', 'url_imagem', 'id', 'metricas']

