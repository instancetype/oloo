/**
 * Created by instancetype on 10/4/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
function Person(name) {
  this.name = name || 'Mudd'
}

Person.prototype.introduce = function() {
  return 'My name is ' + this.name
}

var p = new Person()
console.log(p.introduce())

function Doctor(name) {
  Person.call(this, name)
}

Doctor.prototype = Object.create(Person.prototype)
Doctor.prototype.constructor = Doctor
Doctor.prototype.brag = function() { return 'Well actually, in Medical School...'}

var d = new Doctor('Chad')

console.log(d instanceof Doctor)
console.log(d instanceof Person)

console.log(d.introduce())
console.log(d.brag())