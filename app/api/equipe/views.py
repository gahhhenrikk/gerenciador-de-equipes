from rest_framework import generics

from .models import Equipe
from .serializers import EquipeSerializer


class ListEquipeView(generics.ListCreateAPIView):
    """
    Manipulador de Get, recupera todas as equipes
    """
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer

class EquipeCreateAPIView(generics.CreateAPIView):
    """
    Manipulador de POST, cria uma equipe
    """
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer

class EquipeDeleteView(generics.RetrieveDestroyAPIView):
    """
    Manipulador de DELETE, apaga uma equipe por ID
    """
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer

class EquipeDetailView(generics.RetrieveUpdateAPIView):
    """
    Manipulador de PUT, altera uma equipe
    """
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer


