import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

//TODO:
// - fix the existing component test
// - test the component has correct titles
// - test the component has correct preview urls

// const data = [
//   {
//     id: '1',
//     title: 'Register To Vote Election 2020 GIF by INTO ACTION',
//     previewGifUrl: 'https://media0.giphy.com/media/XbmWAshCmTdmMhjjQa/giphy-preview.gif?cid=ea2a387ch6aec1me06uohh4h9hjwra9j0pfl9hfy5pz7w25b&rid=giphy-preview.gif'
//   },
//   {
//     id: '2',
//     title: 'New York Fashion Week GIF by NYFW: The Shows',
//     previewGifUrl: 'https://media2.giphy.com/media/tFCGtPPo5jIVSHfqLa/giphy-preview.gif?cid=ea2a387ch6aec1me06uohh4h9hjwra9j0pfl9hfy5pz7w25b&rid=giphy-preview.gif'
//   },
//   {
//     id: '3',
//     title: 'High Five United GIF by INTO ACTION',
//     previewGifUrl: 'https://media0.giphy.com/media/kHZ3KNTkHzg9VzqtQ2/giphy-preview.gif?cid=ea2a387ch6aec1me06uohh4h9hjwra9j0pfl9hfy5pz7w25b&rid=giphy-preview.gif'
//   }
// ];

// module('Integration | Components | gif-preview', function(hooks) {
//   setupRenderingTest(hooks);

//   hooks.beforeEach(function() {
//     this.set('model', data)
//   });

//   test('it renders 3 gifs', async function(assert) {
//     await render(hbs`{{gif-preview trendingGifs=model}}`);
//     assert.equal(this.element.querySelectorAll('.gif-preview').length, 3, '3 gifs render!')
//   });

// });
