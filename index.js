fetch('./food.json')
  .then(response => response.json())
  .then(data => {
    const foodData = data;
    //  List all the food items
function listAllFoodItems() {
  return foodData;
}

//  List all the food items with category vegetables
function listVegetableFoodItems() {
  return foodData.filter((food) => food.category === 'Vegetable');
}

//  List all the food items with category fruit
function listFruitFoodItems() {
  return foodData.filter((food) => food.category === 'Fruit');
}

//  List all the food items with category protein
function listProteinFoodItems() {
  return foodData.filter((food) => food.category === 'Protein');
}

//  List all the food items with category nuts
function listNutsFoodItems() {
  return foodData.filter((food) => food.category === 'Nuts');
}

//  List all the food items with category grains
function listGrainsFoodItems() {
  return foodData.filter((food) => food.category === 'Grain');
}

//  List all the food items with category dairy
function listDairyFoodItems() {
  return foodData.filter((food) => food.category === 'Dairy');
}

//  List all the food items with calorie above 100
function listFoodItemsAboveCalorie(calorie) {
  return foodData.filter((food) => food.calorie > calorie);
}

// List all the food items with calorie below 100
function listFoodItemsBelowCalorie(calorie) {
  return foodData.filter((food) => food.calorie < calorie);
}

//  List all the food items with highest protein content to lowest
function listFoodItemsByProteinContent() {
  return foodData.sort((a, b) => b.protiens - a.protiens);
}

//  List all the food items with lowest carb content to highest
function listFoodItemsByCarbContent() {
  return foodData.sort((a, b) => a.cab - b.cab);
}

console.log(' List all the food items');
console.log(listAllFoodItems());

console.log('\n List all the food items with category vegetables');
console.log(listVegetableFoodItems());

console.log('\n List all the food items with category fruit');
console.log(listFruitFoodItems());

console.log('\n List all the food items with category protein');
console.log(listProteinFoodItems());

console.log('\n List all the food items with category nuts');
console.log(listNutsFoodItems());

console.log('\n List all the food items with category grains');
console.log(listGrainsFoodItems());

console.log('\n List all the food items with category dairy');
console.log(listDairyFoodItems());

console.log('\n List all the food items with calorie above 100');
console.log(listFoodItemsAboveCalorie(100));

console.log('\n List all the food items with calorie below 100');
console.log(listFoodItemsBelowCalorie(100));

console.log('\n List all the food items with highest protein content to lowest');
console.log(listFoodItemsByProteinContent());

console.log('\n List all the food items with lowest carb content to highest');
console.log(listFoodItemsByCarbContent());
  })
  .catch(error => console.error('Error loading JSON data:', error));











