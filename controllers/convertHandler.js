/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    const strArr = input.match(/[^\d()]+|[\d.]+/g);
    if(strArr.length === 1) { return 1 }
    
    strArr.pop();
    if(strArr.length === 2) { if(isNaN(strArr[0])) {return "invalid number"}}
    if(strArr.length === 3) { if(isNaN(strArr[0]) || isNaN(strArr[2])) {return "invalid number"}}
    if(strArr.length > 3) { return "invalid number" }
    if(isNaN(eval(strArr.join("")))) { return "invalid number"}
    const result = eval(strArr.join(""));
    return result;
  };
  
  this.getUnit = function(input) {
    const result = input.match(/[a-zA-Z]+/g);
    const units = ['km','mi','gal','l','lbs','kg'];
    return result && units.includes(result[0].toLowerCase()) ? result[0] : "";
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = "";
    if(initUnit === "km") {
      result = "mi";
    } else if(initUnit === "mi") {
      result = "km";
    } else if(initUnit === "gal") {
      result = "l";
    } else if(initUnit === "l") {
      result = "gal"
    } else if(initUnit === "lbs") {
      result = "kg";
    } else if(initUnit === "kg") {
      result = "lbs"
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var units = ['gal','l','mi','km','lbs','kg'];
    var longerUnits = ['gallons','liters','miles','kilometers','pounds','kilograms'];
    
    return longerUnits[units.indexOf(unit)]; 
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = ""
    if(initUnit === "mi") {
      result = initNum * miToKm;
    } else if(initUnit === "km") {
      result = initNum / miToKm;
    } else if(initUnit === "gal") {
      result = initNum * galToL;
    } else if(initUnit === "l") {
      result = initNum / galToL
    } else if(initUnit === "lbs") {
      result = initNum * lbsToKg;
    } else if(initUnit === "kg") {
      result = initNum / lbsToKg
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    initUnit = this.spellOutUnit(initUnit);
    returnUnit = this.spellOutUnit(returnUnit)
    const result = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
