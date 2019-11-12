from django.db import models
from equipe.models import Equipe

FUTEBOL = 'Futebol'
VOLEI = 'Volei'
NATACAO = 'Natacao'
LUTA = 'Luta'
ESPORTES = [
        (FUTEBOL, 'Futebol'),
        (VOLEI, 'Volei'),
        (NATACAO, 'Natação'),
        (LUTA, 'Luta'),
    ]

class Competicao(models.Model):
    nome = models.CharField(max_length=120, null=False)
    data_inicio = models.DateField()
    data_final = models.DateField()
    esporte = models.CharField(
        max_length=20,
        choices=ESPORTES,
        default=FUTEBOL,
    )
    equipe = models.ForeignKey(Equipe, on_delete=models.CASCADE,related_name="treinador_equipe", null=True)

    def __str__(self):
        return "Competição: {}".format(self.nome)
