var recipes = new Object({ key1: 'value1' })

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}

 
updateObjectWithKeyAndValue(recipes, 'chocolate', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function destructivelyUpdateObjectWithKeyAndValue() {
  
}