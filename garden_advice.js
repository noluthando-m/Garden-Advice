// Garden Advice Application
// This program gives gardening advice based on the season and plant type.

// Ask the user for input
let season = prompt("Enter the season (summer/winter):").toLowerCase();
let plantType = prompt("Enter the plant type (flower/vegetable):").toLowerCase();

// Function for seasonal advice
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.";
    } else {
        return "No seasonal advice available.";
    }
}

// Function for plant advice
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests.";
    } else {
        return "No plant advice available.";
    }
}

// Display the advice
alert(
    "Gardening Advice\n\n" +
    getSeasonAdvice(season) + "\n" +
    getPlantAdvice(plantType)
);