from rest_framework import generics

from .models import Treinador
from .serializers import TreinadorSerializer


class ListTreinadorView(generics.ListCreateAPIView):
    """
    Manipulador de Get
    """
    queryset = Treinador.objects.all()
    serializer_class = TreinadorSerializer