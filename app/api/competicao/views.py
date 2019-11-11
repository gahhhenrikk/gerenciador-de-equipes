from rest_framework import generics

from .models import Competicao
from .serializers import CompeticaoSerializer 

class ListCompeticaoView(generics.ListCreateAPIView):
    """
    Manipulador de Get, recupera todas as competições
    """
    queryset = Competicao.objects.all()
    serializer_class = CompeticaoSerializer

class CompeticaoCreateAPIView(generics.CreateAPIView):
    """
    Manipulador de POST, cria uma competição
    """
    queryset = Competicao.objects.all()
    serializer_class = CompeticaoSerializer

class CompeticaoDeleteView(generics.RetrieveDestroyAPIView):
    """
    Manipulador de DELETE, apaga uma competicao por ID
    """
    queryset = Competicao.objects.all()
    serializer_class = CompeticaoSerializer

class CompeticaoDetailView(generics.RetrieveUpdateAPIView):
    """
    Manipulador de PUT, altera uma competicao
    """
    queryset = Competicao.objects.all()
    serializer_class = CompeticaoSerializer


