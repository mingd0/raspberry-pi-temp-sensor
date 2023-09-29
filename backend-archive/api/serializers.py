from rest_framework import serializers
from .models import TemperatureReading


class TemperatureReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemperatureReading
        fields = "__all__"  # Serialize all fields in the model
