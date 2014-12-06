/**
 * Created by instancetype on 10/4/14.
 */
 /* jshint bitwise : true, eqeqeq : true, forin : true, noarg : true, noempty : true, nonew : true,
   asi : true, esnext : true, laxcomma : true, sub : true, browser : true, node : true, phantom : true */
function singletonFactory() {
  var neo = { skills : [] }

  return function() { return neo }
}


var createSingleton = singletonFactory()
  , neo = createSingleton()
  , mrAnderson = createSingleton()


neo.skills.push('kung fu')
mrAnderson.skills.push('flying')
console.log(neo.skills) //-> [ 'kung fu', 'flying' ]

neo.actor = 'keanu'
console.log(mrAnderson.actor)