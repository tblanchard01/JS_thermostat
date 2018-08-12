$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemp();

  $('#up').click(function () {
    thermostat.up();
    updateTemp()
  })
  $('#down').click(function () {
    thermostat.down();
    updateTemp()
  })
$('#reset').click(function () {
    thermostat.reset();
    updateTemp()
  })

  $('#PSM').click(function () {
    thermostat.powerSavingModeSwitch();
    $('#power-saving').text(thermostat.power_saving_state)
    updateTemp()
  })

  function updateTemp() {
    $('#temperature').text(thermostat.temperature)
  }

})