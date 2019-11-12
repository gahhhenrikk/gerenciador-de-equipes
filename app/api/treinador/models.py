from django.db import models
# from equipe.models import Equipe
from django.utils import timezone
FUTEBOL = 'Futebol'
VOLEI = 'Volei'
NATACAO = 'Natacao'
LUTA = 'Luta'
ESPORTES_CAPACITADOS = [
        (FUTEBOL, 'Futebol'),
        (VOLEI, 'Volei'),
        (NATACAO, 'Natação'),
        (LUTA, 'Luta'),
    ]
class Treinador(models.Model):
    nome = models.CharField(max_length=255, null=False)
    senha = models.CharField(max_length=255, default="")
    email = models.EmailField()
    nascimento = models.DateField(default=timezone.now)
    detalhes = models.TextField(default="")
    credencial = models.IntegerField(default=0)
    esportes_capacitados = models.CharField(
        max_length=10,
        choices=ESPORTES_CAPACITADOS,
        default=FUTEBOL,
    )
    # equipe = models.ForeignKey(Equipe, on_delete=models.CASCADE, related_name="equipe_do_treinador", null=True)
    
    def __str__(self):
        return "Treinador: {} - Credencial número: {}".format(self.nome, self.credencial)
    
    def esporte_capacitado(self):
        return self.esporte_capacitado