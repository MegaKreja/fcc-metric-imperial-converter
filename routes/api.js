/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      if(!input) {res.send('invalid number and unit')}; 
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      if(!initUnit && initNum === "invalid number") { return res.send('invalid number and unit') }
      if(!initUnit) { return res.send('invalid unit'); } 
      if(initNum === "invalid number") { return res.send('invalid number'); } 
    
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({initNum, initUnit, returnNum, returnUnit, string: toString});
    });
    
};
