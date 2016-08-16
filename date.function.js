
// return today
function today(type){
  var date = new Date();
  var type = type || 100;
  var y = date.getFullYear();
  var m = date.getMonth();
  var d = date.getDate();
  var date_val;
  type !== 100 && type.length === 1 ? date_val = y + type + m + type + d : date_val = y + '·' + m + '·' + d;
  console.log(date_val);
  return date_val;
}

today('/');

// return now time
function nowTime(){
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  return h + ':' + m + ":" + s;
}

console.log(nowTime());

function deepNight(){
  var today = new Date();
  var y = today.getFullYear(),
      m = today.getMonth(),
      d = today.getDate();

  var new_date = new Date(y,m,d,23,59,59);
  var long_time = new_date.getTime();
  return long_time;
}

function earlyMorning(){
  var today = new Date();
  var y = today.getFullYear(),
      m = today.getMonth(),
      d = today.getDate();
  var new_date = new Date(y,m,d,0,0,0);
  var long_time = new_date.getTime();
  return long_time;
}



//2016-10-12
function dayReduce(day1,day2){
  //两个日期之间的插值
  var ymd1 = day1.split("-");
  var y1 = parseInt(ymd1[0]),
      m1 = parseInt(ymd1[1] - 1),
      d1 = parseInt(ymd1[2]);

  var ymd2 = day2.split("-");
  var y2 = parseInt(ymd2[0]),
      m2 = parseInt(ymd2[1] - 1),
      d2 = parseInt(ymd2[2]);


  var time1 = (new Date(y1,m1,d1,12,30,30)).getTime();
  var time2 = (new Date(y2,m2,d2,12,30,30)).getTime();

  var d_value = Math.abs(parseInt(time1 - time2));

  var one_day = 24 * 60 * 60 * 1000;

  var num_day = d_value / one_day;

  return num_day;

}

