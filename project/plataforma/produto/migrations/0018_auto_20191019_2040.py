# Generated by Django 2.2.6 on 2019-10-19 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produto', '0017_remove_produto_composicao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lote',
            name='composto',
            field=models.ManyToManyField(blank=True, to='produto.Lote', verbose_name='Composto por'),
        ),
    ]
