from django.db import models
from django.conf import settings


class Produtor(models.Model):
    TIPO_PRODUTOR = (
        (10, 'Campo'),
        (20, 'Industria'),
        (30, 'Restaurante'),
    )

    nome = models.CharField(max_length=255, blank=False, null=True)
    tipo = models.IntegerField(choices=TIPO_PRODUTOR, default=None, blank=False)
    #produtos = models.ManyToManyField(
    #    "produto.Produto",
    #    blank=True,
    #    default=None,
    #    related_name="produtor_produtos"
    #)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        default=None,
        null=True,
    )
    # produtos

    class Meta:
        verbose_name_plural = 'Produtores'

    def __str__(self):
        return self.nome


class Local(models.Model):
    nome = models.CharField(max_length=255, blank=False, null=True)
    endereco = models.CharField(max_length=255, blank=False, null=True, verbose_name="Endereço")
    produtor = models.ForeignKey(
        "Produtor",
        on_delete=models.CASCADE,
        blank=True,
        default=None,
        null=True,
    )

    class Meta:
        verbose_name_plural = 'Locais'

    def __str__(self):
        nome = self.nome
        if self.produtor:
            nome = "{} - {}".format(nome, str(self.produtor))
        return nome


