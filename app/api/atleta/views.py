from rest_framework import generics

from .models import Atleta
from .serializers import AtletaSerializer


class ListAtletaView(generics.ListCreateAPIView):
    """
    Manipulador de Get
    """
    queryset = Atleta.objects.all()
    serializer_class = AtletaSerializer