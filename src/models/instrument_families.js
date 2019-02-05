const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function (data) {
  PubSub.subscribe('Instruments:all-instruments-ready', data);

  
};

module.exports = InstrumentFamilies;
