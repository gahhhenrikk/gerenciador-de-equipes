from django.db import models

# Create your models here.


class Treinador(models.Model):

    class Meta:
        db_table = 'treinador'

    nome = models.CharField(max_length=200)
    time = models.CharField(max_length=200)

    def __str__(self):
        return self.title
