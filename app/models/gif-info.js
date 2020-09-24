import DS from 'ember-data';
import {computed, get} from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  images: DS.attr(),
  previewGifUrl: computed('images', function(){
    return get(this, 'images.preview_gif.url') ? get(this, 'images.preview_gif.url') : get(this, 'imageUrl')
  }) 
});
