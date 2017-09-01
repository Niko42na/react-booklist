'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classification = require('./classification');

var _classification2 = _interopRequireDefault(_classification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  id: 'name',
  label: 'Book name',
  show: true,
  sample: 'Dune',
  align: 'center'
}, {
  id: 'year',
  label: 'Year',
  type: 'year',
  show: true,
  sample: 1965
}, {
  id: 'genre',
  label: 'Genre',
  type: 'suggest',
  options: _classification2.default.genres,
  show: true,
  sample: 'Science fiction',
  align: 'center'
}, {
  id: 'rating',
  label: 'Rating',
  type: 'rating',
  show: true,
  sample: 5
}, {
  id: 'comments',
  label: 'Comments',
  type: 'text',
  sample: 'My favorite book'
}];