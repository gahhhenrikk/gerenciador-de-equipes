from django.urls import path
from django.views import generic
from .views import ListAtletaView,AtletaCreateAPIView,AtletaDetailView,AtletaDeleteView

urlpatterns = [
    path('atleta/', ListAtletaView.as_view(), name="todos-atletas"),
    path("atleta/criar/", AtletaCreateAPIView.as_view(), name="criar-atleta"),
    path("atleta/<int:pk>/", AtletaDetailView.as_view(), name="detalhes-atleta"),
    path("atleta/deletar/<int:pk>/", AtletaDeleteView.as_view(), name="deletar-atleta")
]