from django.urls import path
from .views import ListEquipeView
from django.views import generic

urlpatterns = [
    path('equipe/', ListEquipeView.as_view(), name="todas-equipes")
]