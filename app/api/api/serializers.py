from rest_framework import serializers
from .models import Treinador

class TreinadorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Treinador
        fields = '__all__'