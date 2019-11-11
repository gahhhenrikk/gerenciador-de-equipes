# Generated by Django 2.2.7 on 2019-11-11 04:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('treinador', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Equipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('detalhes', models.TextField()),
                ('treinador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='treinador.Treinador')),
            ],
        ),
    ]
