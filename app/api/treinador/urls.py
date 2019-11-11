from django.urls import path
from .views import ListTreinadorView
from django.views import generic

urlpatterns = [
    path('treinador/', ListTreinadorView.as_view(), name="todos-treinadores")
]