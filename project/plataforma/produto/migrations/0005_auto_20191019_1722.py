# Generated by Django 2.2.6 on 2019-10-19 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produto', '0004_auto_20191019_1720'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produto',
            name='composicao',
            field=models.ManyToManyField(blank=True, related_name='_produto_composicao_+', to='produto.Produto', verbose_name='Composição'),
        ),
        migrations.AlterField(
            model_name='produto',
            name='descricao',
            field=models.TextField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='produto',
            name='etapas_preparacao',
            field=models.ManyToManyField(blank=True, default=None, to='produto.EtapaPreparacao'),
        ),
    ]
