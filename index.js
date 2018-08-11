var recipes = { };

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.key = 'value';
  recipes.assign({}, recipes, {[key]: 'value'})
}