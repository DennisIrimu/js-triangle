object.onclick = function triangle(){
  var A = dimension1
  var B = dimension2
  var C = dimension3
  if(A + B > C || B + C > A || A + C > B){
    window.alert("These values could form a triangle")
    if (A == B == C)
  }{
      window.alert("This is an equilateral triangle")
    else if (A == B =! C || A == C =! B || B == C =! A)
  } {
      window.alert("This is an isosceles triangle")
    else
  }{
      window.alert("This is a scalene triangle")
    }
  else{
    window.alert("These values could not form a triangle")
  }
}
