from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Equipe
from .serializers import EquipeSerializer
from django.utils import timezone

class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def criar_equipe(atletas=[], treinador=0, planos_treinos=[], competicoes=[]):
        if atletas != [] and treinador != 0 and planos_treinos != [] and competicoes != []:
            Equipe.objects.create(atletas=atletas, treinador=treinador, planos_treinos=planos_treinos, competicoes=competicoes)

    def configuracao(self):
        self.criar_equipe([1,2,3,4], 1, [1,2], [2,5])
      
class GetAllEquipesTest(BaseViewTest):

    def teste_recuperar_todas_equipes(self):
        """
        Esse teste garante que todas equipes adicionadas no método de configuração exista no endpoint GET
        """
        response = self.client.get(
            reverse("todas-equipes")
        )
        # fetch the data from db
        expected = Equipe.objects.all()
        serialized = EquipeSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)