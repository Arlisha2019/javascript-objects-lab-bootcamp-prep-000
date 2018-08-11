var recipes = { };

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.key = 'value';
  return Object.assign({}, { key2: 'value'});
}
