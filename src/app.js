const instrumentData = require('./data/instrument_family_data.js');
const InstrumentFamily = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const MusicInfoView = require('./views/music_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const instrumentDataModel = new InstrumentFamily(instrumentData);
  instrumentDataModel.bindEvents();

  const selectInstrument = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(selectInstrument);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div.display');
  const musicInfoDisplay = new MusicInfoView(infoDiv);
  musicInfoDisplay.bindEvents();

});
