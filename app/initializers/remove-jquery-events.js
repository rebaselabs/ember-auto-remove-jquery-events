import Ember from 'ember';

export default {
  name: 'auto-remove-jquery-events',

  initialize: (container, app) => {
    Ember.CoreView.reopen({
      destroyEvents: Ember.on('willDestroyElement', () => {
        this.$().off();
      })
    });
  }
}
