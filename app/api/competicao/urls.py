from django.urls import path
from django.views import generic
from .views import ListCompeticaoView,CompeticaoCreateAPIView, CompeticaoDetailView, CompeticaoDeleteView

urlpatterns = [
    path('competicao/', ListCompeticaoView.as_view(), name="todas-competicoes"),
    path("competicao/criar/", CompeticaoCreateAPIView.as_view(), name="criar-commpeticao"),
    path("competicao/<int:pk>/", CompeticaoDetailView.as_view(), name="detalhes-competicao"),
    path("competicao/deletar/<int:pk>/", CompeticaoDeleteView.as_view(), name="deletar-competicao")
]