/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    //var result;
    let unit = input.match(/[a-zA-Z]+/)[0];
    let num  = input.split(unit)[0];
    let matchSlash = Boolean(num.match(/[/]/));
    //HANDLE NO NUMERIC INPUT - return result;
    if(input === unit){
      return 1;
    }
    // handle fraction
    if(matchSlash){
      let firstNumber = num.split("/")[0];
      let secondNumber = num.split("/")[1];
      
      // handle multiple fraction
      if(num.split("/")[2]){
        return 'invalid number'
      }
      
      // handle slash at the end or beginning 
      if ( firstNumber.lenght === 0 || secondNumber.length === 0 ){
        return 'invalid number'
      } else {
        return (Number(firstNumber)/Number(secondNumber));
      }
    } 
    
    return Number(num);
  };
  
  this.getUnit = function(input) {
    //var result;
      let listedUnits = ['gal','l','mi','km','lbs','kg'];
    
    // unit to lowercase
    let unit       = input.match(/[a-zA-Z]+/)[0].toLowerCase(); 
    
    let isValidUnit = listedUnits.some((elm) => {
      return unit === elm;
    })
    
    if(!isValidUnit){
      return "invalid unit"
    }
    //return result;    
    return unit;

  };
  

  this.getReturnUnit = function(initUnit) {
        //var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];

        //return result;
    return expect[input.indexOf(initUnit)];

  };

  this.spellOutUnit = function(unit) {
    //var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
    
    //return result;
    return expect[input.indexOf(unit)]; 

  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const kgToLbs = 2.20462;
    const lToGal = 0.26417;
    const kmToMi = 0.62137;
    //var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var convert = [galToL,lToGal,miToKm,kmToMi,lbsToKg,kgToLbs];
    
    //return result;
    return initNum*convert[input.indexOf(initUnit)];

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //var result;
    let initUnitFull   = this.spellOutUnit(initUnit);
    let returnUnitFull = this.spellOutUnit(returnUnit);

        //return result;
    return `${initNum} ${initUnitFull} converts to ${returnNum} ${returnUnitFull}`;
  }.bind(this);  

  };

module.exports = ConvertHandler;
