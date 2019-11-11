from django.urls import path
from django.views import generic
from .views import ListEquipeView, EquipeCreateAPIView,EquipeDetailView,EquipeDeleteView

urlpatterns = [
    path('equipe/', ListEquipeView.as_view(), name="todas-equipes"),
    path("equipe/criar/", EquipeCreateAPIView.as_view(), name="criar-equipe"),
    path("equipe/<int:pk>/", EquipeDetailView.as_view(), name="detalhes-equipe"),
    path("equipe/deletar/<int:pk>/", EquipeDeleteView.as_view(), name="deletar-equipe")
]