# Generated by Django 2.2.1 on 2019-06-05 03:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0003_auto_20190605_0307'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='name',
            field=models.CharField(default='', max_length=200, unique=True),
        ),
    ]
