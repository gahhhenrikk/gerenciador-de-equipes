
from rest_framework import generics
from .models import Treinador
from .serializers import TreinadorSerializer

# Create your views here.
class TreinadorList(generics.ListCreateAPIView):
    queryset = Treinador.objects.all()
    serializer_class = TreinadorSerializer