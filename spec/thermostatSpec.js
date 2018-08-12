'use strict'

describe('Basic thermostat controls:', function () {
    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    })

    it('can display current temperature', function () {
        expect(thermostat.getTemperature()).toEqual(thermostat.temperature)
    })
    it('thermostat has a default temp of 20', function () {
        expect(thermostat.getTemperature()).toEqual(20);
    });
    it('temp can be increased by 1 degree', function () {
        thermostat.up()
        expect(thermostat.getTemperature()).toEqual(21)
    })
    it('temp can be decreased by 1 degree', function () {
        thermostat.down()
        expect(thermostat.getTemperature()).toEqual(19)
    })

    it('temp can be reset to 20', function () {
        thermostat.up(5)
        thermostat.reset()
        expect(thermostat.getTemperature()).toEqual(20)
    })

    describe('Energy saving functions:', function () {

        it('energy usage is low if temp is less than 18', function () {
            thermostat.down(3)
            expect(thermostat.energyUsage()).toEqual('low')

        })

        it('energy usage is medium if temp is less than 25', function () {
            thermostat.up(4)
            expect(thermostat.energyUsage()).toEqual('medium')

        })
        it('energy usage is high if temp is greater than 25', function () {
            thermostat.powerSavingModeSwitch();
            thermostat.up(6)
            expect(thermostat.energyUsage()).toEqual('high')

        })

        it('if power saving mode is OFF temp cannot be increased beyond 32', function () {
            thermostat.powerSavingModeSwitch()
            thermostat.temperature = 32
            expect(thermostat.up()).toEqual('cannot increase temperature beyond 32')
        })
    })

})