/**
 * Created by instancetype on 10/4/14.
 */
/* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true,
 asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
var
  shape = {
    init: function init(shapeName, sidesArray) {
      this.sides = sidesArray || []
      this.name = shapeName || 'shape'
      return this
    }

  , getPerimeter: function getPerimeter() {
      return this.sides.reduce(
        function (x, y) {
          return x + y
        }, 0
      )
    }

  , getInfo: function getInfo() {
      return 'I am a ' + this.name + '. My perimeter is ' + this.getPerimeter()
    }
  }

var square = Object.create(shape)
square.init = function init(side) {
  shape.init.call(this, 'square', [side, side, side, side])

  return this
}


var mySquare = Object.create(square).init(2)

console.log(mySquare.getInfo())
console.log(shape.isPrototypeOf(mySquare))

