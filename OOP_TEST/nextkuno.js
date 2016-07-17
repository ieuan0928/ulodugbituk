
var wait = function(callbacks, done) {
   var counter = callbacks.length;
   var next = function() {
      if(--counter == 0) {
         done();
      }
   };
   for(var i = 0; i < callbacks.length; i++) {
      callbacks[i];
   }
}

var a = function (next) {
   setTimeout( function() {
      console.log("Done A");
      next();
   }, 3000);
  };

var b = function (next) {
   setTimeout( function() {
      console.log("Done B");
      next();
   }, 2000);
  };

var c = function (next) {
   setTimeout( function() {
      console.log("Done C");
      next();
   }, 1000);
  };

var d = function () {
   console.log("All done!");
  };

wait([a, b, c], d );