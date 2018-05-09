var Mock = require("mockjs")
var Random = Mock.Random

var cityList=require("./city")
var provinceCity=require("./provinceCity")
var carList=require("./carClass")


var list = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-100': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name': "@cname",
    'addr': "@city",
    "content": "@cparagraph"
  }]
})
var userlist = [{ name: "zhangsan", pw: "123456", userId: "1" }]
var num = 1
module.exports = function (app) {


  app.get('/api/cityList', function (req, res) {
    res.json(cityList);
  });
  app.get('/api/provinceCity', function (req, res) {
    res.json(provinceCity);
  });
  app.get('/api/carList', function (req, res) {
    res.send(carList);
  });
}