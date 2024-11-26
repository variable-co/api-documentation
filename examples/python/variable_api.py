import datetime
import json
import os

import requests
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("API_KEY")

if not api_key:
    raise ValueError("Missing environment variables")

api_url = f"https://app.variable.global/api/v1"

headers = {
    "Content-Type": "application/json",
    "timezone": "Europe/Oslo",
    "Authorization": f"Bearer {api_key}",
}

# Get activity data for this year
today = datetime.date.today()
activity_response = requests.get(f"{api_url}/activity?date={today.year}", headers=headers)

json_object = json.loads(activity_response.text)

print(json.dumps(json_object, indent=4))
