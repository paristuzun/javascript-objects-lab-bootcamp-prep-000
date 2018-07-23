var recipes = new Object({ key1: 'value1' })

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, { [key]: value })
}