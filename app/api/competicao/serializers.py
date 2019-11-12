from rest_framework import serializers
from .models import Competicao

class CompeticaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competicao
        fields = '__all__'