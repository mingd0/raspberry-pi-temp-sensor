from django.db import models


class TemperatureReading(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    value = models.DecimalField(max_digits=5, decimal_places=2)
    unit = models.CharField(max_length=10, default="Farenheit")
    device_id = models.CharField(max_length=50)
    # Sensor type or data source
    data_source = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return f"{self.value} {self.unit} at {self.timestamp}"
