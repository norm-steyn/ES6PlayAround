'use strict';

var plants = [{ id: 100, name: 'sunflower' }, { id: 101, name: 'rose' }, { id: 102, name: 'petunia' }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = plants[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var plant = _step.value;

    var message = 'ID: ' + plant.id + ' Name: ' + plant.name;

    console.log(message);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator['return']) {
      _iterator['return']();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log('List total: ' + plants.length);