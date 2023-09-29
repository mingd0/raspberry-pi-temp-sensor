from django.urls import path
from .views import TemperatureReadingListCreate

urlpatterns = [
    path(
        "temperatures/",
        TemperatureReadingListCreate.as_view(),
        name="temperature-list-create",
    ),
]
