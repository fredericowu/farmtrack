# Generated by Django 2.2.6 on 2019-10-19 20:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('produto', '0016_lote_composto'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produto',
            name='composicao',
        ),
    ]
