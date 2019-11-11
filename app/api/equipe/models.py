from django.db import models
from treinador.models import Treinador
from atleta.models import Atleta

class Equipe(models.Model):
    treinador = models.ForeignKey(Treinador, on_delete=models.CASCADE,related_name="treinador_equipe", null=True)
    atletas = models.ManyToManyField(Atleta,related_name="atletas_equipe")
    principal = models.BooleanField(default=False)
    detalhes = models.TextField()

    def __str__(self):
        return "Equipe: {} - Informações: {}".format(self.treinador, self.detalhes)

    def quantidade_de_atletas(self):
        return self.atletas.objects.all()