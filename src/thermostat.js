'use strict'

function Thermostat() {
    this.temperature = 20
    this.min_temp = 10
    this.max_temp = 25
    this.power_saving_mode = true;
};

Thermostat.prototype.getTemperature = function () {
    return this.temperature
}
Thermostat.prototype.up = function (increment = 1) {
    if ((this.temperature + increment) < this.max_temp) {
        this.temperature += increment
        return this.temperature
    } else {
        return ("cannot increase temperature beyond " + this.max_temp)
    }
}
Thermostat.prototype.down = function(increment = 1){
    if ((this.temperature - increment) > this.min_temp) {
        this.temperature -= increment
        return this.temperature
    } else {
        
        return ("cannot decrease temperature beyond " + this.min_temp)
    }
}