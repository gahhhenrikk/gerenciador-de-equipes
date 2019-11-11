from rest_framework import generics

from .models import Treinador
from .serializers import TreinadorSerializer

class ListTreinadorView(generics.ListCreateAPIView):
    """
    Manipulador de Get, exibe a lista de treinadores
    """
    queryset = Treinador.objects.all()
    serializer_class = TreinadorSerializer

class TreinadorCreateAPIView(generics.CreateAPIView):
    """
    Manipulador de POST, cria uma equipe
    """
    queryset = Treinador.objects.all()
    serializer_class = TreinadorSerializer

class TreinadorDeleteView(generics.RetrieveDestroyAPIView):
    """
    Manipulador de DELETE, apaga um treinador por ID
    """
    queryset = Treinador.objects.all()
    serializer_class = TreinadorSerializer

class TreinadorDetailView(generics.RetrieveUpdateAPIView):
    """
    Manipulador de DETAIL, altera um treinador
    """
    queryset = Treinador.objects.all()
    serializer_class = TreinadorSerializer


