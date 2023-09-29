# import os
import glob
import time
import requests

# Define the path to the DS18B20 sensor
sensor_path = "/sys/bus/w1/devices/28-3de10457adc8"


def send_temperature_to_server(temperature):
    url = "http://127.0.0.1:3000/api/temperatures/record-temperature"
    data = {
        "timestamp": time.time(),
        "value": temperature,
        "unit": "Fahrenheit",
        "device_id": "28-3de10457adc8",
        "data_source": "DS18B20 Temperature Sensor",
    }
    requests.post(url, json=data)


# Read temperature data from the sensor
def read_temperature():
    try:
        sensor_file = glob.glob(sensor_path + "/w1_slave")[0]
        with open(sensor_file, "r") as file:
            lines = file.readlines()
            temperature_line = lines[1].strip()
            temperature_data = temperature_line.split("=")[1]
            temperature_celsius = float(temperature_data) / 1000.0
            temperature_fahrenheit = (temperature_celsius * 9 / 5) + 32
            return temperature_fahrenheit
    except Exception as e:
        print(f"Error reading temperature: {str(e)}")
        return None


# Main loop to read and print temperature every second
while True:
    temperature = read_temperature()
    if temperature is not None:
        print(f"Temperature: {temperature}°F")
        send_temperature_to_server(temperature)

    time.sleep(30)  # Wait for 1 second before reading again
