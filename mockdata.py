import random
import json
# Helper functions to generate mock data
def random_doctor_name():
    first_names = ["Chris", "Alex", "Robert", "Emily", "Laura", "Jane", "Michael", "Anna", "Linda", "Alex"]
    last_names = ["Martinez", "Smith", "Brown", "Williams", "Jones", "Rodriguez", "Miller", "Johnson", "Davis"]
    return random.choice(first_names) + " " + random.choice(last_names)

def random_hospital_name():
    return random.choice(["Wellness Center", "MedCare Hospital", "HealthFirst Clinic", "LifeCare Hospital", "CityMed Hospital"])

def random_available_time():
    hours = random.choice(range(8, 18))
    minutes = random.choice(["00", "30"])
    return f"{hours}:{minutes} - {hours + 1}:{minutes}"

def random_appointment_website():
    return random.choice(["https://clinicA.com/book", "https://hospitalB.com/appoint", "https://clinicC.com/book"])

# Additional helper functions for the new attributes
def random_phone_number():
    return f"+{random.randint(1, 9)}-{random.randint(100, 999)}-{random.randint(1000, 9999)}-{random.randint(1000, 9999)}"

def random_distance():
    return f"{random.uniform(0.5, 20.5):.2f} km"

def random_google_map_link():
    return random.choice(["https://maps.google.com/locationA", "https://maps.google.com/locationB", "https://maps.google.com/locationC"])

def available_doctor_image():
    return random.choice(["https://placeimg.com/640/480/any?doc1", "https://placeimg.com/640/480/any?doc2", "https://placeimg.com/640/480/any?doc3"])

num_appointments = 50
# Generate the updated mock data
appointments_updated = []
for i in range(num_appointments):
    appointment = {
        "id": i + 1,
        "doctor_name": random_doctor_name(),
        "doctor_image": available_doctor_image(),
        "hospital_name": random_hospital_name(),
        "available_time": random_available_time(),
        "phone_number": random_phone_number(),
        "distance": random_distance(),
        "google_map_link": random_google_map_link(),
        "appointment_website": random_appointment_website(),
        "comments": f"Dr. {random_doctor_name().split()[1]} is a {random.choice(['cardiologist', 'neurologist', 'dentist', 'orthopedic', 'dermatologist'])} with over {random.randint(5, 20)} years of experience."
    }
    appointments_updated.append(appointment)

appointments_updated

#save the updated mock data to a json file
with open("appointments_updated.json", "w") as f:
    json.dump(appointments_updated, f, indent=4)
    