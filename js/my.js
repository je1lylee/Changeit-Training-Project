//以上为变量声明区域
function myFunction()
{
try
{ 
var x=document.getElementById("demo").value;
if(x=="")    throw "值为空";
if(isNaN(x)) throw "不是数字";
if(x>10)     throw "太大";
if(x<5)      throw "太小";
}
catch(err)
{
var y=document.getElementById("mess");
y.innerHTML="错误：" + err + "。";
}
}