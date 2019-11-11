from django.urls import path
from django.views import generic
from .views import ListTreinadorView,TreinadorDeleteView,TreinadorCreateAPIView,TreinadorDetailView

urlpatterns = [
    path('treinador/', ListTreinadorView.as_view(), name="todos-treinadores"),
    path("treinador/criar/", TreinadorCreateAPIView.as_view(), name="criar-treinador"),
    path("treinador/<int:pk>/", TreinadorDetailView.as_view(), name="detalhes-treinador"),
    path("treinador/deletar/<int:pk>/", TreinadorDeleteView.as_view(), name="deletar-treinador")
]