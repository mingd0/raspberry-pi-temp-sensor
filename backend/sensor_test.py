import time
import requests
import random


def send_temperature_to_server(temperature):
    url = "http://127.0.0.1:3000/api/temperatures/"
    data = {
        "timestamp": time.time(),
        "measurement": temperature,
        "unit": "Fahrenheit",
        "device_id": "28-3de10457adc8",
        "data_source": "DS18B20 Temperature Sensor",
    }
    requests.post(url, json=data)


# Main loop to read and print temperature every second
while True:
    temperature = random.uniform(40, 100)
    if temperature is not None:
        print(f"Temperature: {temperature}°F")
        send_temperature_to_server(temperature)

    time.sleep(10)  # Wait for 1 second before reading again
