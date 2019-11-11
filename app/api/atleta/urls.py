from django.urls import path
from .views import ListAtletaView
from django.views import generic

urlpatterns = [
    path('atleta/', ListAtletaView.as_view(), name="todos-atletas")
]