/* buildDefinitionList.js
Write and export by default buildDefinitionList() function that generates an HTML description list (<dl>, <dt> and <dd> tags) and returns it as one string.
If there're no array items, return an empty string.
Example:
 const definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];
buildDefinitionList(definitions) => '<dl><dt>definition1</dt><dd>description1</dd><dt>definition2</dt><dd>description2</dd></dl>'
*/

// solution
const buildDefinitionList = (arr) => {
  if (arr.length === 0) {
    return ''
  }
  let result = ''
  const listItem = (item) => {
    return `<dt>${item[0]}</dt><dd>${item[1]}</dd>`
  }
  for (let item of arr) {
    result += listItem(item)
  }
  return `<dl>${result}</dl>`
}

// test
const definitions1 = [
  ['key', 'value'],
  ['key2', 'value2'],
  ['key3', 'value3'],
  ['key4', 'value4'],
];
console.log(buildDefinitionList(definitions1)); // '<dl><dt>key</dt><dd>value</dd><dt>key2</dt><dd>value2</dd></dl>'
console.log(buildDefinitionList([])); // ''
