// this function have no effect in a jQuery object,because a jQuery object also has it's property named length
function isArray(arr){
  var isarray = typeof arr === "object" && arr.length ? return true : false;
  return isarray;
}

// frames enviroment is not work
function isArray(arr){
  var isarray = arr instanceof Array ? true : false;
  return isarray;
}

//This is best method to check a object is a array or not
function isArray(arr){
  var isarray = Object.prototype.toString.call(arr,null) === "[object Array]" ? true : false;
  return isarray;
}

// the empty function does not work
function empty(arr){//not work，the function is wrong
  arr = [];
  return arr;
}


function empty(arr){
  //delete all 
  arr.length = 0;
  return arr;
}



function arrRepeat(arr){
  for(var i = 0,len = arr.length; i < len; i++){
    arr.push(arr[i]);
  }
  return arr;
}

function arrRepeat(arr){
  return arr.concat(arr);
}

function unique(arr){
  var arr1 = [],tag = false;
  for(var i = 0,num = arr.length; i < num; i++){
    // loop the array
    for(var j = 0; j < arr1.length; j++){
      if(arr[i] === arr1[j]){
        tag = true;
        break;
      }
    }

    if(tag){
      tag = false;
      continue;
    }else{
      arr1.push(arr[i]);
    }
  }
  
  return arr1;
}


function unique(arr){
  var tag = false;
  for(var i = 0 ; i < arr.length; i++){
    for(var j = 0; j < i; j++){
      if(arr[i] === arr[j]){
        tag = true;
        break;
      }
    }

    if(tag){
      // remove the element
      arr = arr.slice(0,i).concat(arr.slice(i+1,arr.length));
      tag = false;
      i--;
      continue;
    }
  }

  return arr;
}


// clear an array,remove the same ele from an array
function unique(arr){
  var a = [];
  var obj = {}
  for(var i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      a.push(arr[i]);
      obj[arr[i]] = i;
    }
  }

  return a;
}


function min(arr){
  var min = arr[0],
      num = arr.length;
  for(var i = 1; i < num; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }

  return min;
}

function min(arr){
  return Math.min.apply(this,arr);
}


function max(arr){
  return Math.max.apply(this,arr);
}

function max(arr){
  var max = arr[0],num = arr.length;
  for(var i = 1; i < num; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }

  return max;
}


// return the key of an element from an array
function arrKey(val,arr){
  var key;
  for(var i = 0,len = arr.length;i < len; i++){
      if(val === arr[i]){
          key = i;
          break;
      }
  }
  return key;
}

// delete a ele from an array by key
function delByKey(index,arr){
  return arr.slice(0,index).concat(arr.slice(index+1,arr.length));
}