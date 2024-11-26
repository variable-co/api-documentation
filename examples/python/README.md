### Add your credentials to the `.env` file
```shell
API_KEY = "api_key"
# if you're testing the PACT api, also add:
SUBDOMAIN = "subdomain"
USERNAME = "username"
PASSWORD = "password"
```

### Initialize the virtual environment
```shell
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Run the scripts
```shell
python3 variable_api.py
python3 pact_api.py
```
