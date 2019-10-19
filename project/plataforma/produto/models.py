from django.db import models
from django.conf import settings


class Produto(models.Model):
    nome = models.CharField(max_length=255, blank=False, null=True)
    descricao = models.TextField(max_length=1024, blank=True, null=True)
    url_imagem = models.CharField(max_length=255, blank=True, null=True)
    #composicao = models.ManyToManyField("self", blank=True, verbose_name="Composição")
    metricas = models.ManyToManyField("Metrica", default=None, blank=True)
    produtor = models.ForeignKey(
        "produtor.Produtor",
        on_delete=models.CASCADE,
        blank=False,
        default=None,
        null=True,
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        default=None,
        null=True,
    )

    def __str__(self):
        nome = self.nome
        if self.produtor:
            nome = "{} - {}".format(nome, str(self.produtor))
        return nome


class Metrica(models.Model):
    nome = models.CharField(max_length=255, blank=False, null=True)
    processos = models.ManyToManyField("Processo", default=None, blank=False)
    url_imagem = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        default=None,
        null=True,
    )

    class Meta:
        verbose_name = 'Métrica'
        verbose_name_plural = 'Métricas'

    def __str__(self):
        return self.nome


class Processo(models.Model):
    nome = models.CharField(max_length=255, blank=False, null=True)
    descricao = models.TextField(max_length=1024, blank=False, null=True, verbose_name="Descrição")


    def __str__(self):
        return self.nome


class Lote(models.Model):
    nome = models.CharField(max_length=255, blank=False, null=True)
    data = models.DateField()
    produto = models.ForeignKey(
        Produto,
        on_delete=models.SET_NULL,
        blank=False,
        default=None,
        null=True,
    )
    composto = models.ManyToManyField("self", blank=True, symmetrical=False, verbose_name="Composto por")
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        default=None,
        null=True,
    )

    def __str__(self):
        return self.nome


class HistoricoLote(models.Model):
    lote = models.ForeignKey(
        Lote,
        on_delete=models.CASCADE,
        blank=False,
        default=None,
        null=True,
    )
    processo = models.ForeignKey(
        Processo,
        on_delete=models.CASCADE,
        blank=False,
        default=None,
        null=True,
    )
    data = models.DateField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        default=None,
        null=True,
    )

    class Meta:
        verbose_name = 'Histórico do Lote'
        verbose_name_plural = 'Histórico dos Lotes'

    def __str__(self):
        nome = "{} - {}".format(self.lote.nome, self.processo.nome)
        return nome





