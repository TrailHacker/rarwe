'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var Song = _ember2['default'].Object.extend({
  title: '',
  rating: 0,
  band: ''
});

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 5
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 4
});

var SongCollection = _ember2['default'].Object.extend({
  content: [],
  sortProperties: ['rating:desc'],
  sortedContent: _ember2['default'].computed.sort('content', 'sortProperties')
});

var songs = SongCollection.create();
songs.get('content').pushObject(blackDog);
songs.get('content').pushObject(yellowLedbetter);
songs.get('content').pushObject(pretender);

exports['default'] = _ember2['default'].Controller.extend({
  songs: songs
});
module.exports = exports['default'];

//# sourceMappingURL=application-compiled.js.map