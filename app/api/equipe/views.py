from rest_framework import generics

from .models import Equipe
from .serializers import EquipeSerializer


class ListEquipeView(generics.ListCreateAPIView):
    """
    Manipulador de Get
    """
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer

class EquipeCreateAPIView(generics.CreateAPIView):
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer

class EquipeDeleteView(generics.RetrieveDestroyAPIView):
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer

class EquipeDetailView(generics.RetrieveUpdateAPIView):
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer


