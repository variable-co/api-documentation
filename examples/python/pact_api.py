import base64
import json
import os

import requests
from dotenv import load_dotenv

load_dotenv()

username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")
subdomain = os.getenv("SUBDOMAIN")
if not subdomain or not username or not password:
    raise ValueError("Missing environment variables")

base_url = f"https://{subdomain}.variable.global"
auth_url = f"{base_url}/api/auth/token"
api_url = f"{base_url}/api/pact/2"
print(api_url)

payload = "grant_type=client_credentials"
credentials = f"{base64.b64encode(f'{username}:{password}'.encode()).decode()}"
headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": f"Basic {credentials}",
}

auth_response = requests.post(auth_url, data=payload, headers=headers)

json_object = auth_response.json()
access_token = json_object.get("access_token")

headers = {
    "Content-Type": "application/json",
    "timezone": "Europe/Oslo",
    "Authorization": f"Bearer {access_token}",
}

footprints_response = requests.get(f"{api_url}/footprints?limit=2", headers=headers)

json_object = json.loads(footprints_response.text)

print(json.dumps(json_object, indent=4))
