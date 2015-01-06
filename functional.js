/**
 * Created by instancetype on 1/5/15.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true, laxbreak : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
'use strict';

var createPerson = function(name) {
  var self = {}

  self.name = name || 'John Doe'
  self.greet = function() { console.log('Hello, I am', self.name) }

  return self
}

var joe = createPerson('Joe')
joe.greet()


var createDoctor = function(name, specialty) {
  var self = createPerson(name)

  self.specialty = specialty || 'internist'
  self.report = function() {
    var article = self.specialty[0].match(/[aeiou]/i)
                ? 'an'
                : 'a'

    console.log("I'm not just a doctor, I'm", article, self.specialty)
  }

  return self
}

var house = createDoctor('House', 'Internist')
house.greet()
house.report()