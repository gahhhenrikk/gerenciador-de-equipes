from rest_framework import generics

from .models import Equipe
from .serializers import EquipeSerializer


class ListEquipeView(generics.ListCreateAPIView):
    """
    Manipulador de Get
    """
    queryset = Equipe.objects.all()
    serializer_class = EquipeSerializer