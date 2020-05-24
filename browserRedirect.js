/**
 * 判断客户端是pc端还是移动端，以处理不同逻辑
 * 
 * navigator对象是描述浏览器相关信息
 *      所以我们可以通过判断navigator.useragent里面是否有某些值来判断，然后然后用正则的方法 test 去判断是否满足
 */

function browserRedirect() {
    let userAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|ucweb|android|windows ce | windows mobile/.test(userAgent)) {
        alert('移动端')
    } else {
        alert('pc端')
    }
}