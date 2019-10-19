from django.db import models


class Badge(models.Model):
    nome = models.CharField(max_length=255, blank=False, null=True)
    descricao = models.TextField(max_length=1024, blank=False, null=True, verbose_name="Descrição")
    arquivo = models.FileField(upload_to='upload/badges', verbose_name="Selecione a imagem")

    def __str__(self):
        return self.nome
