/*
* @Author: wifiin
* @Date:   2016-12-08 17:09:44
* @Last Modified by:   wifiin
* @Last Modified time: 2016-12-27 11:22:41
*/
'use strict';
const cheerio = require("cheerio"); //非核心模块
const request = require("request"); //非核心模块
const iconv = require('iconv-lite');
const template = require("art-template");
const fs = require("fs");

const express = require('express'); //引入express模块   非核心模块
const app = express();//支持页面的路由跳转

let urlStr = "http://nba.sports.sina.com.cn/league_order1.php?dpc=1";
let nba_json = {};

//静态资源存放目录
app.use("/",express.static(__dirname + "/www"));

app.get('/index', function (req, res) {
	//res.sendFile( __dirname + "/" + "www/view/index.html" );//读取显示文件，获得该文件内容的字符串，处理字符串在渲染字符串即可！
	fs.readFile("./www/main/index.html",(err,text)=>{
		if(err){
			res.end(err.message);
		}
		let templateStr = text.toString();

		res.send(templateStr);
	})
});

app.get('/chaxun', function (req, res) {

	let data = {name:'suzhen'};

	res.send(data);

});
app.get('/process_get', function (req, res) {
	res.sendFile( __dirname + "/" + "www/main/comparison.html" );
});

//开启服务的进程
app.listen(8080,"192.168.1.8");
console.log("应用实例，访问地址为  192.168.1.8:8080");