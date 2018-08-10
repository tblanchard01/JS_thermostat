'use strict'

describe('Thermostat', function(){
    var thermostat; 
    
    beforeEach(function() {
        thermostat = new Thermostat(); 
    });
    it('thermostat has a default temp of 20', function () {
        expect(thermostat.getTemperature()).toEqual(20);
    });  
    it('temp can be increased by 1 degree', function(){
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21)
    })
    it('temp can be decreased by 1 degree', function(){
        thermostat.down()
        expect(thermostat.getTemperature()).toEqual(19)
        })

})