var msgs =[
	{name: '张三', content: '你好我是张三', time:'2017-11-14 10:30:32'},
	{name: '李四', content: '你好我是李四', time:'2017-11-15 10:11:14'},
	{name: '王五', content: '你好我是王五', time:'2017-11-16 10:22:55'}
];
// var pet_msgs=[
// 	{id: 1, name: "哈士奇", age: "2个月", sex: "男孩子",message:"aaaaa",price:12},
// 	{id: 2, name: "眯眯眼", age: "20", sex: "女孩子",message:"bbbb",price:13},
// 	{id: 3, name: "姚逼", age: "1个月", sex: "我不知道",message:"cccc",price:14}
// ];

console.log()
// 1.
var url = require('url');
var express = require('express');
// 2.
var app = express();
// 3.
app.engine('html',require('express-art-template'));
app.use('/public',express.static('public'));
// 4. 路由

app.get('/login',function(req,res){
	res.render('login.html');
});
app.get('/',function(req,res){
	res.render('index.html');
});
app.get('/about',function(req,res){
	res.render('about.html');
});
app.get('/pet',function(req,res){
	res.render('pet.html');
});
app.get('/food',function(req,res){
	res.render('food.html');
});
app.get('/shop',function(req,res){
	res.render('shop.html');
});
app.get('/team',function(req,res){
	res.render('team.html');
});
app.get('/msgs',function(req,res){
	res.render('message.html',{
		msgs:msgs
	});
});
// # 添加留言，入库，渲染会页面
app.get('/add_msgs',function(req,res){

	var paramObj = url.parse(req.url, true).query;
	var msg = {
		name : paramObj.name,
		content : paramObj.content,
	};
	msgs.push(msg);
	res.render('message.html',{
		msgs:msgs
	});
});


// # 404
app.use(function(req,res,next){
	res.status(404).send('sorry can not found');
});

// 5.
app.listen(8080,function(){
	console.log('http://localhost:8080');
});