from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Atleta
from .serializers import AtletaSerializer
from django.utils import timezone

class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def criar_atleta(nome="", email="", nascimento=timezone.now(),peso=0, altura=0, detalhes="", documento="", condicao_fisica="EM CONDICOES", esporte_capacitado="Futebol", treinador="", equipe=""):
        if nome != "" and email != "" and nascimento != timezone.now() and peso != 0 and altura != 0 and detalhes != "" and documento != "" and condicao_fisica != "EM CONDICOES" and esporte_capacitado != "Futebol" and treinador != "" and equipe != "":
            Atleta.objects.create(nome=nome, email=email, nascimento=nascimento,peso=peso, altura=altura, detalhes=detalhes, documento=documento, condicao_fisica=condicao_fisica, esporte_capacitado=esporte_capacitado, treinador=treinador, equipe=equipe)

    def configuracao(self):
        self.criar_atleta("Gilearde F. Cardoso", "gilearde.f@gmail.com", timezone.now(), 71, 1.65, "SEM DETALHES", "122345678", "SEM CONDICOES", "Futebol", 1, '4A')
        self.criar_atleta("Bruna J. Zika", "brunazika@gmail.com", timezone.now(),54, 1.62,"SEM DETALHES", "122342671","EM CONDICOES","Futebol", 1, '4A')
        self.criar_atleta("Fabio Enzo", "enzonfabio@gmail.com", timezone.now(), 65, 1.74, "SEM DETALHES", "622325678", "EM CONDICOES", "Volei", 2, '1B')
        self.criar_atleta("Katia J. Silva", "katia.jsilva@gmail.com", timezone.now(),67, 1.61,"SEM DETALHES", "222341678","EM CONDICOES","Futebol", 1, '4A')
        self.criar_atleta("João D. Tobia", "joao.tb@gmail.com", timezone.now(), 82, 1.65, "SEM DETALHES", "1322345678", "SEM CONDICOES", "Volei", 2, '1B')
        
class GetAllTreinadorTest(BaseViewTest):

    def teste_recuperar_todos_atletas(self):
        """
        Esse teste garante que todos atletas adicionados no método de configuração exista no endpoint GET
        """
        response = self.client.get(
            reverse("todos-atletas")
        )
        # fetch the data from db
        expected = Atletas.objects.all()
        serialized = AtletasSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)