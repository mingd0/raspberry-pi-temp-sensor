from rest_framework import generics
from .models import TemperatureReading
from .serializers import TemperatureReadingSerializer


class TemperatureReadingListCreate(generics.ListCreateAPIView):
    queryset = TemperatureReading.objects.all()
    serializer_class = TemperatureReadingSerializer
