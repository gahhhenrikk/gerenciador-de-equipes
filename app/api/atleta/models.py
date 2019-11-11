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
EM_CONDICOES = 'EM CONDICOES'
SEM_CONDICOES = 'SEM CONDICOES'
NAO_AVALIADO = 'NAO AVALIADO'
CONDICAO_FISICA = [
        (EM_CONDICOES, 'EM CONDICOES'),
        (SEM_CONDICOES, 'SEM CONDICOES'),
        (NAO_AVALIADO, 'NAO AVALIADO')
    ]
A1 = 'A1'
A2= 'A2'
B1 = 'B1'
B2= 'B2'
C1 = 'C1'
C2= 'C2'
EQUIPES = [(A1, 'A1'), (A2, 'A2'), (B1, 'B1'), (B2, 'B2'), (C1, 'C1'),(C2, 'C2')]

class Atleta(models.Model):
    nome = models.CharField(max_length=255, null=False)
    email = models.EmailField()
    nascimento = models.DateField()
    peso = models.DecimalField(max_digits=4, decimal_places=2)
    altura = models.DecimalField(max_digits=3, decimal_places=2)
    detalhes = models.TextField()
    documento = models.CharField(max_length=80, null=False)
    condicao_fisica = models.CharField(
        max_length=20,
        choices=CONDICAO_FISICA,
        default=NAO_AVALIADO,
    )
    esporte_capacitado = models.CharField(
        max_length=20,
        choices=ESPORTES_CAPACITADOS,
        default=FUTEBOL,
    )
   
    def __str__(self):
        return "Atleta: {} - Condição física: {}".format(self.nome, self.condicao_fisica)
    
    def esporte_capacitado(self):
        return self.esporte_capacitado