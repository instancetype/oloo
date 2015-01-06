/**
 * Created by instancetype on 1/5/15.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
'use strict';

function Base(name) {
  if (!(this instanceof Base)) { return new Base(name) }
  this.name = name || 'John Doe'
}

Base.prototype.greet = function() {
  console.log('I am', this.name)
}

function Sub(name) {
  if (!(this instanceof Sub)) { return new Sub(name) }
  Base.apply(this, arguments)
}

Sub.prototype = Object.create(Base.prototype)
Sub.prototype.constructor = Sub

var jane = new Sub('Jane Doe')
jane.greet()
console.log(Object.getPrototypeOf(jane))
console.log(jane instanceof Sub)
console.log(jane instanceof Base)


var person = {
  init: function(name) {
    this.name = name || 'Jane Doe'
    return this
  }

, greet: function() {
    console.log('Hello, I am', this.name)
  }
}

var john = Object.create(person).init('John Doe')
john.greet()
console.log(Object.getPrototypeOf(john) === person)

var doctor = Object.create(person)
doctor.init = function(name) {
    person.init.call(this, name)
    return this
  }

doctor.diagnose = function() {
    console.log('It\'s never lupus...')
}


var house = Object.create(doctor).init('Gregory House, MD')
house.greet()
house.diagnose()