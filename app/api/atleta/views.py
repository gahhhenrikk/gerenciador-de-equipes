from rest_framework import generics,status
from rest_framework.response import Response
from .models import Atleta
from .serializers import AtletaSerializer



class ListAtletaView(generics.ListCreateAPIView):
    """
    Manipulador de Get, recupeta a lista de atletas cadastrados
    """
    queryset = Atleta.objects.all()
    serializer_class = AtletaSerializer

class AtletaCreateAPIView(generics.CreateAPIView):
    """
    Manipulador de POST, criar um atleta
    """
    queryset = Atleta.objects.all()
    serializer_class = AtletaSerializer

class AtletaDeleteView(generics.RetrieveDestroyAPIView):
    """
    Manipulador de DELETE, remove um atleta por ID
    """
    queryset = Atleta.objects.all()
    serializer_class = AtletaSerializer

class AtletaDetailView(generics.RetrieveUpdateAPIView):
    """
    Manipulador de PUT, modifica um atleta
    """
    queryset = Atleta.objects.all()
    serializer_class = AtletaSerializer


