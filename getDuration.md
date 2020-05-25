### 判断当前日期所在月份有多少天

- 分析
  1. 先使用``getMonth()``得到改日所在月份;
  2. 根据获得的月份加一得到下一个月；
  3. 使用``setDate()``指定一个日期对象的天数，指定0时，那么日期就会被设置为上个月的最后一天
  4.  此时已经得到改日所在月份的最后一天，使用``getDate()``返回一个指定日期对象为一个月中哪一天

以下为代码

```javascript
//date为传入日期
function getDuration (date) {    
	// how many days of this month   
	 let dt = new Date(date)    
	 var month = dt.getMonth()    
	 dt.setMonth(dt.getMonth() + 1)   
	 dt.setDate(0)
	 return dt.getDate()  
 }
console.log(getDuration('2020-05-25'))//31
```

