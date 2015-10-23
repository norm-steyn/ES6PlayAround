'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

///////////

var Car = (function () {
    function Car(make) {
        _classCallCheck(this, Car);

        this.make = make;
        this.currentSpeed = 25;
    }

    _createClass(Car, [{
        key: 'printCurrentSpeed',
        value: function printCurrentSpeed() {
            console.log(this.make + ' is going ' + this.currentSpeed + ' kph.');
        }
    }]);

    return Car;
})();

var RaceCar = (function (_Car) {
    _inherits(RaceCar, _Car);

    function RaceCar(make, topSpeed) {
        _classCallCheck(this, RaceCar);

        _get(Object.getPrototypeOf(RaceCar.prototype), 'constructor', this).call(this, make);
        this.topSpeed = topSpeed;
    }

    _createClass(RaceCar, [{
        key: 'goFast',
        value: function goFast() {
            this.currentSpeed = this.topSpeed;
        }
    }]);

    return RaceCar;
})(Car);

var stang = new RaceCar('Ford Focus', 150);

stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();

//////

var x = [0, 1, 2];
x.map(function (x) {
    return console.log(x * x);
});