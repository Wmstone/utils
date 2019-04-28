// 刚刚开始不知道如何起名字，就first一直排吧，等写的多了，再进行整理

// 1. 根据数字大小来改变背景的颜色

getBackground=(value)=>{
    let color = '';
    // 在这里习惯性的写了switch(value)导致犯错
    switch(true){
        case value<10: color = 'blue';break;
        case value>=10&&value<20: color = 'yellow';break;
        default : color = 'red'
    }
    return color;
}

<Card
style={{background:this.getBackground(15)}}
>
</Card>

// 2. 将数组中多个对象合并
let data = [
    {
        name :'zhangsan',
        age : 16,
    },
    {
        name :'lisi',
        age : 15
    },
    {
        name :'wangwu',
        age : 16
    }
]
// 示例，将年龄一致的整合成一个对象，得到结果
// dataNew = [
//     {name : ['zhangsan','wangwu'],age : 16},
//     {name : ['lisi'],age : 15}
// ]

// 代码
let hash = {}
let i = 0
let res = []
data.map((item)=>{
    let age = item.age
    hash[age]?res[hash[age]-1].name.push(item.name):
    (hash[age] = ++i&& res.push({
        name :[item.name],
        age : age
    }))
})
console.log(res)

// 3. 使用sessionStorage 保存用户信息，localStorage 同理
  export function getUser(str) {
    const userString = typeof str === 'undefined' ? sessionStorage.getItem('user') : str;
    return userString || [];
  }
  
  // 保存用户信息
  export function setUser(data) {
    return sessionStorage.setItem('user', data);
  }

// 4. 使用cookie 保存token和读取cookie
// 读取cookies
export function getCookie(name) {
    let cookieValue = '';
    if (document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';');
      cookies.map(item => {
        let cookie = item.trim();
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          cookieValue = JSON.parse(cookieValue);
        }
      });
    }
    return cookieValue || [];
  }
  
  // 保存cookie
  export function setCookie(name, value) {
    let valueStr = JSON.stringify(value);
    //name 用户名 value 用户ID
    var Minute = 480; //此 cookie 将被保存8小时
    var exp = new Date();
    exp.setTime(exp.getTime() + Minute * 60 * 1000);
    document.cookie = name + '=' + valueStr + ';path=' + '/' + ';expires=' + exp.toGMTString();
  }