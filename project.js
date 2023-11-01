
const foodData = require('./data.json')

// Function to list all the food items
function listAllFoodItems(data) {
    return data.map(item => item.foodname);
}

// Function to list food items by category
function listFoodItemsByCategory(data, category) {
    return data.filter(item => item.category === category).map(item => item.foodname);
}

// Function to list food items with calorie above or below a threshold
function listFoodItemsByCalorie(data, threshold, above) {
    return data.filter(item => above ? item.calorie > threshold : item.calorie < threshold).map(item => item.foodname);
}

// Function to list food items by highest to lowest protein content
function listFoodItemsByHighestProtein(data) {
    return data.sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
}

// Function to list food items by lowest to highest carbohydrate content
function listFoodItemsByLowestCarbohydrate(data) {
    return data.sort((a, b) => a.cab - b.cab).map(item => item.foodname);
}

// Example usage:
const allFoodItems = listAllFoodItems(foodData);
const vegetableItems = listFoodItemsByCategory(foodData, "Vegetable");
const fruitItems = listFoodItemsByCategory(foodData, "Fruit");
const proteinItems = listFoodItemsByCategory(foodData, "Protein");
const nutsItems = listFoodItemsByCategory(foodData, "Nuts");
const grainsItems = listFoodItemsByCategory(foodData, "Grain");
const dairyItems = listFoodItemsByCategory(foodData, "Dairy");
const calorieAbove100 = listFoodItemsByCalorie(foodData, 100, true);
const calorieBelow100 = listFoodItemsByCalorie(foodData, 100, false);
const highestProteinToLowest = listFoodItemsByHighestProtein(foodData);
const lowestCarbohydrateToHighest = listFoodItemsByLowestCarbohydrate(foodData);

// Print the results
console.log("All Food Items:", allFoodItems);
console.log("Vegetables:", vegetableItems);
console.log("Fruits:", fruitItems);
console.log("Protein Foods:", proteinItems);
console.log("Nuts:", nutsItems);
console.log("Grains:", grainsItems);
console.log("Dairy:", dairyItems);
console.log("Calorie Above 100:", calorieAbove100);
console.log("Calorie Below 100:", calorieBelow100);
console.log("Highest Protein to Lowest:", highestProteinToLowest);
console.log("Lowest Carbohydrate to Highest:", lowestCarbohydrateToHighest);
