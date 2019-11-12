from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Competicao
from .serializers import CompeticaoSerializer
from django.utils import timezone

class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def criar_competicao(nome="", data_inicio=timezone.now(), data_final=timezone.now(), esporte="", equipe=0):
        if nome!="" and data_inicio!=timezone.now() and data_final!=timezone.now() and esporte!="" and equipe!=0:
            Competicao.objects.create(nome=nome, data_inicio=data_inicio, data_final=data_final, esporte=esporte, equipe=equipe)

    def configuracao(self):
        self.criar_competicao("Campeonato Brasileiro Serie A", timezone.now(), timezone.now(), "Futebol", 2);
        self.criar_competicao("Campeonato Brasileiro Serie B", timezone.now(), timezone.now(), "Futebol", 1);
        self.criar_competicao("Campeonato Paulista", timezone.now(), timezone.now(), "Futebol", 3);
      
class GetAllCompeticoesTest(BaseViewTest):

    def teste_recuperar_todas_competicoes(self):
        """
        Esse teste garante que todas competicioes adicionadas no método de configuração exista no endpoint GET
        """
        response = self.client.get(
            reverse("todas-competicoes")
        )
        # fetch the data from db
        expected = Competicao.objects.all()
        serialized = CompeticaoSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)