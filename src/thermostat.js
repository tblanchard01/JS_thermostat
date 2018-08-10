'use strict'
function Thermostat (){
this.temperature = 20 
// this is not a function
}; 

Thermostat.prototype.temperature = function(){
return this.temperature
}