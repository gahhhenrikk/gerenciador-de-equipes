from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Treinador
from .serializers import TreinadorSerializer
from django.utils import timezone

class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def criar_treinador(nome="", email="", aniversario=timezone.now(), detalhes="", credencial=0, esportes_capacitados="Futebol"):
        if nome != "" and email != "" and aniversario != timezone.now() and detalhes != "" and esportes_capacitados != "Futebol":
            Treinador.objects.create(nome=nome, email=email, aniversario= aniversario, detalhes=detalhes, credencial=credencial, esportes_capacitados=esportes_capacitados)

    def configuracao(self):
        self.criar_treinador("Albérico Dias Barreto Filho", "albericodiasbarretofilho@gmail.com", timezone.now(), "Treinador de e-esportes", 123456, 'Volei')
        self.criar_treinador("Gabriel Henrique", "gahhenrik@gmail.com", timezone.now(), "Treinador de e-esportes", 123457, 'Futebol')
        self.criar_treinador("Gustavo", "gustavo@gmail.com", timezone.now(), "Treinador de peteca", 142657, 'Natacao')
        self.criar_treinador("Anderson", "anderson@gmail.com", timezone.now(), "Treinador de Xadrez", 612654, 'Futebol')

class GetAllTreinadorTest(BaseViewTest):

    def teste_recuperar_todos_treinadores(self):
        """
        Esse teste garante que todos treinadores adicionados no método de configuração exista no endpoint GET
        """
        response = self.client.get(
            reverse("todos-treinadores")
        )
        # fetch the data from db
        expected = Treinador.objects.all()
        serialized = TreinadorSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)