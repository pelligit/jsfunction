
















//set css
// ele is a must param
// if val not exit, and style_obj is a string ,then get style of ele
// if val not exit, and style_obj is a obj ,then set style of ele


// getComputeStyle(ele,null)
// getComputeStyle(ele,"::before")

function css(ele,style_obj){
  //
  if(ele === null || style_obj === null){
    return "";
  }

  if(typeof style_obj === "string"){
    return ele.style.style_obj;
  }

}
  


// jquery functions lib
// attr()
// removeAttr()
// prop()
// removeProp()

// addClass()
// removeClass()
// toggleClass()

// html()
// text()
// val()

/*
*ele    single element
*attr   attr_name || attr_obj
*fun    callback || attr_val
*/
// 原生方法
// ele.setAttribute()
// ele.getAttribute()
// ele.removeAttribute()

//设置获得获取属性的值
function attr(ele,attr,fun){
  if(!ele){
    return;
  }

  if(typeof attr === "string" && typeof fun === "string"){
    // 将fun作为属性值设置为元素的attr属性
    ele.setAttribute(attr,fun);
    return ele;
  }

  if(typeof attr === "string" && !fun){
    return ele.getAttribute(attr);
  }

  if(typeof attr === "object"){
    for(var attr_name in attr){
      ele.setAttribute(attr_name,attr[attr_name]);
    }

    if(fun && typeof fun === "function"){
      // 传递参数ele，这样在会掉函数里面也可以访问被操作的函数
      fun(ele);
    }
    return ele;
  }
}


// 移除属性值
function removeAttr(ele,attr){
  if(!ele)return;
  if(typeof attr === "object" || typeof attr === "function" || typeof attr === "number" || typeof attr === "undefined"){
    return ele;
  }

  if(typeof attr === "string"){
    return ele.removeAttribute(attr);
  }
}


// style functions
// 获取或者设置元素的样式的值
function css(ele,style_obj,fun){
  if(!ele)return;
  if(typeof style_obj === "string" && fun && typeof fun === "string"){
    ele.style[style_obj] = fun;
    return ele;
  }

  // 返回样式的值
  if(typeof style_obj === "string" && !fun){
    return getComputeStyle(ele)[style_obj];
  }

  // 设置样式的值通过style.obj || style.cssText
  if(typeof style_obj === "object"){
    for(var css_name in style_obj){
      ele.style[css_name] = style_obj[css_name];
    }

    if(fun && typeof fun === "function"){
      fun(ele);
    }

    return ele;
  }
}



function removeClass(ele,class_name){
  // 移除元素的class
  if(!ele || !class_name || typeof class_name !== "string"){
    return false;
  }

  var before_class = ele.getAttribute("class") || "";

  if(before_class.length !== 0){
    //说明有内容;如果没有匹配到内容，返回原来的字符串
    var new_class = before_class.replace(class_name,'');
    if(new_class === before_class){
      return false;
    }else{
      return new_class;//返回新设置的值
    }
  }else{
    return false;
  }
}


function addClass(ele,class_name){
  // 判断是否存在这个类，如果不存在的话，则
  if(!ele || !class_name || typeof class_name !== "string"){
    return ele;
  }

  var before_class = ele.getAttribute("class") || "";

  if(before_class.length !== 0){
    var new_class = bofore_class.replace(class_name,"");
    if(new_class === before_class){
      ele.setAttribute("class",class_name);
      return ele;
    }else{
      return ele;
    }
  }else{
    return ele;
  }
}


// 格式化html字符串
// 颜色转换函数rgba颜色转化为十六进制的颜色
