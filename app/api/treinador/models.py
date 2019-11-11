from django.db import models
# Create your models here.
# from treinador import constants
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
    email = models.EmailField()
    aniversario = models.DateField()
    detalhes = models.TextField()
    credencial = models.IntegerField()
    esportes_capacitados = models.CharField(
        max_length=10,
        choices=ESPORTES_CAPACITADOS,
        default=FUTEBOL,
    )
    def __str__(self):
        return "Treinador: {} - Especialista em: {}".format(self.nome, self.credencial)
    
    def esporte_capacitado(self):
        return self.esporte_capacitado