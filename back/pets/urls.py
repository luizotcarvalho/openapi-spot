from django.urls import path

from . import views

urlpatterns = [
    path("", views.list_pets),
    path("create", views.create_pet),
    path("<id>", views.get_pet),
    path("<id>/delete", views.delete_pet),
]
