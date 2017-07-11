var Calc = function() {
  "use strict";
  function Calc() {
    console.log('Calc constructor');
  }
  return ($traceurRuntime.createClass)(Calc, {add: function(a, b) {
      return a + b;
    }}, {});
}();
var c = new Calc();
console.log(c.add(4, 5));
