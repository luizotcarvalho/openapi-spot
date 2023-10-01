from django.urls import path

from . import views

urlpatterns = [
    path("", views.list_pets),
    path("/<id>", views.get_pet),
]
