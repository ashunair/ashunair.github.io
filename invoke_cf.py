import requests
import argparse

# import google.auth.transport.requests
# import google.oauth2.id_token

# Your Cloud Run function URL
CLOUD_RUN_URL = "https://rag-response-828703860413.us-central1.run.app/hello_http"

# Function to get an ID token for Cloud Run
# def get_bearer_token(audience):
#     request = google.auth.transport.requests.Request()
#     id_token = google.oauth2.id_token.fetch_id_token(request, audience)
#     return id_token

def invoke_cloud_run():#(name: str):
    # Generate Bearer token
    # token = get_bearer_token(CLOUD_RUN_URL)

    # Prepare headers with Authorization
    headers = {
        # "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }

    # Request body
    # payload = {"name": name}
    # print(payload)

    # Call Cloud Run
    response = requests.post(CLOUD_RUN_URL, headers=headers) #json=payload)
    print("Success:", response.text)

    # if response.status_code == 200:
    #     print("Success:", response.json())
    #     return response.json()
    # else:
    #     print("Error:", response.status_code, response.text)
    #     return None

if __name__ == "__main__":
    # Example: passing an argument
    # invoke_cloud_run("Disha")

    parser = argparse.ArgumentParser(description="Invoke Cloud Run with a question")
    # parser.add_argument("name", type=str, help="Question to send to Cloud Run")
    
    args = parser.parse_args()
    invoke_cloud_run()
