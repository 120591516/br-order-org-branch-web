//分页
//分页当前页码
var page_curr = 1;
// 每页记录条数
var count_curr = 10;
// 记录总条数
var total_count = 0;
// limit
var limit = 10;

function callBackPagination(dataBack) {
	var totalCount = dataBack.data.total;
	var showCount = 5;
	var limit = 10;
	createTable(1, limit, totalCount, dataBack);
}

//获取取cookies缓存
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while(c.charAt(0) == ' ') c = c.substring(1, c.length);
		if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
//设置缓存cookie//两个参数，一个是cookie的名子，一个是值
function SetCookie(name, value, day) {
	var exp = new Date(); //new Date("December 31, 9998");
	exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
// 后退
function storeManagementBack() {
	var explorer = window.navigator.userAgent;
	//firefox //Chrome//Opera//Safari
	if(explorer.indexOf("Firefox") >= 0 || explorer.indexOf("Chrome") >= 0 || explorer.indexOf("Opera") >= 0 || explorer.indexOf("Safari") >= 0) {
		history.go(-1);
		var randomnumber = Math.floor(Math.random() * 100000);
		var u = parent.location.href;
		parent.location.href = u + randomnumber;
		parent.location.reload();

	} else {
		history.go(-1);
		parent.location.reload();
	}
	return false;
}
//跳转页面
function ChangePageUrl(pageurl) {
	$('#framePage').attr('src', pageurl);
	var u = parent.location.href;
	var end = u.indexOf("#");
	var rurl = u.substring(0, end);
	//设置新的锚点
	parent.location.href = rurl + "#" + pageurl;
	parent.location.reload();
}

//		iframe高度自适应
function iFrameHeight(v_val) {

	var iframe = document.getElementById(v_val);
	try {

		var bHeight = iframe.contentWindow.document.body.scrollHeight;

		var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;

		var height = Math.min(bHeight, dHeight);
		iframe.height = height;

	} catch(ex) {}

}
window.setInterval("iFrameHeight('framePage')", 200);
//当页面内容发生变化时 iframe 重置高度
function IFrameResize() {
	$(document).scrollTop(0); //	滚动高度置零
	parent.document.getElementById("framePage").height = 0; //	页面高度置零
	var obj = parent.document.getElementById("framePage"); //取得父页面IFrame对象 
	obj.height = this.document.body.scrollHeight; //调整父页面中IFrame的高度为此页面的高度 
}
// 时间转换
function getLocalTime(timeStamp) {
	var date = new Date(parseInt(timeStamp));
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	return date.getFullYear() + "-" + month + "-" + currentDate;
}
// 空字符格式
function nullformat(str) {
	return str == null ? "" : str;
}
//获取有效科室下拉框
function departPs(dept) {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(dept_getDeptList_url, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var html = "<option selected='selected' value='0'>无</option>";
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].deptId + "'>" + datal[i].deptName + "</option>";
		}
		$(dept).empty().append(html);
	} else {
		$(dept).val('');
	}
}
//获取科室类型
function deptType(dept) {
	var otype = "get";
	var osync = false;
	var reqResult = httpRequest(dept_getDeptTypeList_url, null, otype, osync);
	if(reqResult.result == 0) {
		var datal = reqResult.data;
		var html = "<option selected='selected' value=''>无</option>";
		for(var i = 0; i < datal.length; i++) {
			html += "<option value= '" + datal[i].dictDeptTypeId + "'>" + datal[i].dictDeptTypeName + "</option>";
		}
		$(dept).empty().append(html);
	} else {
		$(dept).val('');
	}
}