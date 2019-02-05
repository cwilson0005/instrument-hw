const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function (data) {
  PubSub.publish('Instruments:all-instruments-ready', data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentDetail = function(instrumentIndex){
  const selectedInstrument = this.instrument[instrumentIndex];
  PubSub.publish('Instrument:selected-instrument-ready', selectedInstrument);
};

module.exports = InstrumentFamilies;
