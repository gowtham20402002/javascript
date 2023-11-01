# Food Data Project

This project provides a JavaScript implementation to interact with a list of food items. It allows you to perform various operations on the food data, such as listing food items by category, calorie content, protein content, and carbohydrate content.

## Table of Contents

- [Usage](#usage)
- [Functions](#functions)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Usage

To use the functions provided by this project, you'll need to include the JavaScript code in your project and pass the food data as input. Below are the functions available:

### Functions

- `listAllFoodItems(data)`: Lists all the food items.
- `listFoodItemsByCategory(data, category)`: Lists food items by category (e.g., "Fruit," "Vegetable," etc.).
- `listFoodItemsByCalorie(data, threshold, above)`: Lists food items with calorie content above or below a specified threshold.
- `listFoodItemsByHighestProtein(data)`: Lists food items from highest to lowest protein content.
- `listFoodItemsByLowestCarbohydrate(data)`: Lists food items from lowest to highest carbohydrate content.

## Examples

Here are some examples of how to use the functions:

```javascript
// Import the functions and provide your food data
const foodData = [
  // Your food data here...
];

const allFoodItems = listAllFoodItems(foodData);
const vegetableItems = listFoodItemsByCategory(foodData, "Vegetable");
const calorieAbove100 = listFoodItemsByCalorie(foodData, 100, true);

// Add more examples as needed
# javascript
