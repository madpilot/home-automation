import logging

import voluptuous as vol
import requests

# Import the device class from the component that you want to support
from homeassistant.components.light import ATTR_BRIGHTNESS, Light, PLATFORM_SCHEMA
from homeassistant.helpers.event import track_time_change

# Home Assistant depends on 3rd party packages for API specific code.
REQUIREMENTS = []

_LOGGER = logging.getLogger(__name__)

def setup_platform(hass, config, add_devices, discovery_info=None):
    holiday = MoorseHoliday(add_devices)
    track_time_change(hass, holiday.poll, second=[10, 40])
    holiday.probe

class MoorseHoliday(object):
    def __init__(self, add_devices_callback):
        self._apps = []
        self._add_devices_callback = add_devices_callback

    # pylint: disable=unused-argument
    def poll(self, now):
        self.probe()

    def probe(self):
        response = requests.get("http://holiday.local/device/holiday/apps")

        if response.status_code == 200:
            apps = response.json()["apps"]

            wrapped = []
            for app in apps:
                if app not in self._apps:
                    self._apps.append(app)
                    wrapped.append(MoorseHolidayApp(app))

            self._add_devices_callback(wrapped)

class MoorseHolidayApp(Light):
    def __init__(self, name):
        self._name = name
        self._is_on = False

    @property
    def name(self):
        return "Holiday " + self._name.replace("-", " ").replace("_", " ").title() + " App"

    @property
    def should_poll(self):
        return True

    @property
    def is_on(self):
        return self._is_on

    def turn_on(self, **kwargs):
        requests.put("http://holiday.local/device/holiday/app/" + self._name)

    def turn_off(self, **kwargs):
        requests.put("http://holiday.local/device/holiday/app/off")

    def update(self):
        response = requests.get("http://holiday.local/device/holiday/app/" + self._name)
        if response.status_code == 200:
            self._is_on = (response.json()["status"] == "running")
