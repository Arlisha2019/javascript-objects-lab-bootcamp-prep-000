var recipes = { };

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.key = 'value';
  return Object.assign({}, Object, { [key]: 'value'});
}
