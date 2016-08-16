// query url parm
function queryUrl(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf("?") + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
        obj[name] = val;
        return rs;
    });
  return obj;
}


// ————————————————————————————————


function echo(str){
  return console.log(str);
}

function write(str){
  return document.write(str);
}
