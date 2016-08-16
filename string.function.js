// return a str that every letter change to next letter from ABC(letter list)
function wordNext(str){
  var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var str_arr = str.split('');
  var num = str_arr.length;
  var str1='',key1;
  for(var j = 0; j < num; j++){
      var key2 = arrKey(str_arr[j],arr);
      key2 === arr.length-1 ? key1 = 0 : key1 = key2 + 1;
      str1 += arr[key1];
  }

  return str1;
}




function strReverse(str){
  return str.split('').reverse().join('');
}



