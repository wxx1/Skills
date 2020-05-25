- 格式化日期

```javascript
/**
	格式化日期
	参数：format格式化字符串
		 date(可选)：要格式化的时间，默认为当前时间
**/

function dateFormat(format,date){
    if(typeof date === 'string'){
        date = new Date(date)
    }else{
        date = new Date()
    }
    date =  new Date(date);
    var map = {
        'M': date.getMonth() + 1,//月份
        'd': date.getDate(), //日
        'h': date.getHours(), //小时
        'm': date.getMinutes(), //分
        's': date.getSeconds(),//秒
        'q': Math.floor((date.getMonth() + 3)/3), //季度
    }
    format = format.replace(/([yMdhmsq])+/g, (all, t) => {
        console.log(all,t)
        var v = map[t];
        if(v!== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length - 2);
                return v;
            }
        }else if(t =='y'){
            return String(date.getFullYear()).substr(4-all.length);
        }
        return all
    })
    return format;
}

console.log(dateFormat('MM-dd','2020-5-25'));
console.log(dateFormat('yyyy-MM-dd'))
```

- 其中涉及知识点

  - replace

    **替换一个与正则表达式匹配的子串**

    第一个参数是正则且有子表达式，第二个参数函数且带有多个参数情况

  ```javascript
  /*
  	第一个参数arg1表示匹配的整体，arg2表示第一个子表达式，arg3表示第二个子表达式，接下来的参数arg4是一个整数，声明了表示子匹配在 stringObject 中出现的位置。最后一个参数是 stringObject 本身。
  */
  var str5 = '这是一段原始文本，需要替换的内容"3c这要替换4d"！';
  var newStr = str5.replace( /([0-9])([a-z])/g,function (arg1,arg2,arg3,arg4,arg5){
   console.log( arg1 );
    console.log( arg2 );
    console.log( arg3 );
    console.log( arg4 );
    console.log( arg5 );
  } );
  //输出：
  3c
  3
  c
  17
  这是一段原始文本，需要替换的内容"3c这要替换4d"！
  4d
  4
  d
  23
  这是一段原始文本，需要替换的内容"3c这要替换4d"！
  ```

  - substr
    - substr(start, [length])截取的开始位置及长度