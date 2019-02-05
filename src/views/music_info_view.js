const PubSub = require('../helpers/pub_sub.js');

const MusicInfoView = function(container){
  this.container = container;
};

MusicInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

MusicInfoView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${instrument.name}, of class '${instrument.description}', has a maximum speed of ${instrument.instruments} km/h.`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = MusicInfoView;
