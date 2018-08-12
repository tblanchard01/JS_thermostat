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

Thermostat.prototype.energyUsage = function () {
    let temp = this.temperature
    if (temp < 18) {
        return 'low'
    } else if (temp < 25) {
        return 'medium'
    } else {
        return 'high'
    }
}
Thermostat.prototype.up = function (increment = 1) {
    if ((this.temperature + increment) <= this.max_temp) {
        this.temperature += increment
        return this.temperature
    } else {
        return ("cannot increase temperature beyond " + this.max_temp)
    }
}
Thermostat.prototype.down = function (increment = 1) {
    if ((this.temperature - increment) >= this.min_temp) {
        this.temperature -= increment
        return this.temperature
    } else {

        return ("cannot decrease temperature beyond " + this.min_temp)
    }
}

Thermostat.prototype.powerSavingModeSwitch = function () {

    if (this.power_saving_mode === true) {
        this.power_saving_mode = false
        this.max_temp = 32
        return "power saving mode off"

    } else {
        this.power_saving_mode = true
        this.max_temp = 25
        if (this.temperature > this.max_temp) {
            this.temperature = this.max_temp;
        }
        return "power saving mode on"
    }
}

Thermostat.prototype.reset = function () {
    this.temperature = 20
    return "temperature reset to 20"
}