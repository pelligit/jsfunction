//set css
// ele is a must param
// if val not exit, and style_obj is a string ,then get style of ele
// if val not exit, and style_obj is a obj ,then set style of ele


// getComputeStyle(ele,null)
function css(ele,style_obj){
  if(ele === null || style_obj === null){
    return "";
  }

  if(typeof style_obj === "string"){
    return ele.style.style_obj;
  }
}

//set or get attrbute value
function attr(ele,attr,fun){
  if(!ele){
    return;
  }

  if(typeof attr === "string" && typeof fun === "string"){
    // set the param 'fun' as the attribute about ele
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
      fun(ele);
    }
    return ele;
  }
}


// remove attribute
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
// get or set the style of an element
function css(ele,style_obj,fun){
  if(!ele)return;
  if(typeof style_obj === "string" && fun && typeof fun === "string"){
    ele.style[style_obj] = fun;
    return ele;
  }

  // return the value of the element style
  if(typeof style_obj === "string" && !fun){
    return getComputeStyle(ele)[style_obj];
  }

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
  // delete a class of an element 
  if(!ele || !class_name || typeof class_name !== "string"){
    return false;
  }

  var before_class = ele.getAttribute("class") || "";
  if(before_class.length !== 0){
    //not empty
    var new_class = before_class.replace(class_name,'');
    if(new_class === before_class){
      return false;
    }else{
      return new_class;
    }
  }else{
    return false;
  }
}


function addClass(ele,class_name){
  // if the class exit
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
// format html
// format color[hsl,rgb,color name]

function siblings(cur_node){
  var arr = [];
  var par = cur_node.parentNode;
  var all = par.childNodes;
  var all_node = getTagNode(all);
  var num = all_node.length;
  for(var i = 0; i < num; i++){
    if(all_node[i] === cur_node){
      continue;
    }else{
      arr.push(all_node[i]);
    }
  }
  return arr;
}

function children(cur_node){
  var chil = cur_node.childNodes;
  var arr = getTagNode(chil);
  return arr;
}

function parent(cur_node){
  return cur_node.parentNode;
}

function pre(cur_node){
  return cur_node.previousSibling;
}

function next(cur_node){
  return cur_node.nextSibling;
}

function getTagNode(nodelist){
  var num_node = nodelist.length;
  var tag_node = [];
  for(var j = 0; j < num_node; j++){
    if(nodelist[j].nodeType !== 1){
      continue;
    }else{
      tag_node.push(nodelist[j]);
    }
  }
  return tag_node;
}