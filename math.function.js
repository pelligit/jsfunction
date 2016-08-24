//Math
// +
function add(x,y){
    return x + y;
}
// -
function subtract(x,y){
    return x -y;
}

// *
function multiply(x,y){
    return x * y;
}

// /
function divide(x,y){
    return x/y;
}

// three times
function multiplyThreeTime(x){
    return x * x * x;
}

// example x=2 then return 1/2
function backwards(x){
  if(x === null)return 0;
  var val;
  x === 0 ? val = 0 : val = 1/x;
  return val;
}

// deg to rad
function deg2rad(deg){
  return deg * Math.PI/180;
}


// rad to deg
function rad2deg(rad){
  return rad * 180/Math.PI;
}


// random from a to b
function radomFromTo(a,b,hold){
  var hd;
  hold !== null && typeof hold === 'number' && hold > 0 && hold < 20 ? hd = hold : hd = 0;
  return ((b - a) * Math.random() + a).toFixed(hd) * 1;
}

