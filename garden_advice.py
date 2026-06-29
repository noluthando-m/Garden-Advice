# Garden Advice Application
# This program gives gardening advice based on the season and plant type.

def get_season_advice(season):
    """Return advice based on the season."""
    if season == "summer":
        return "Water your plants regularly and provide some shade."
    elif season == "winter":
        return "Protect your plants from frost with covers."
    else:
        return "No seasonal advice available."


def get_plant_advice(plant_type):
    """Return advice based on the plant type."""
    if plant_type == "flower":
        return "Use fertiliser to encourage blooms."
    elif plant_type == "vegetable":
        return "Keep an eye out for pests."
    else:
        return "No plant advice available."


# Ask the user for input
season = input("Enter the season (summer/winter): ").lower()
plant_type = input("Enter the plant type (flower/vegetable): ").lower()

print("\nGardening Advice")
print("----------------")
print(get_season_advice(season))
print(get_plant_advice(plant_type))
