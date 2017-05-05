var perUrl = 'http://192.168.1.200';
//登录接口
login_url = perUrl + '/br-order-org-branch-controller/login';
//退出接口
logout_url = perUrl + '/br-order-org-branch-controller/logout'; //退出
//左侧栏
footer_getUserPermission_url=perUrl +'/br-order-org-branch-controller/user/getUserPermission';
//验证码
valicode_url = perUrl + '/br-order-org-branch-controller/authImageController/verifyCode';
//订单列表
var getOrderListUrl = perUrl + '/br-order-org-branch-controller/branch/order'; //查询门店下全部订单
var getAllSuiteUrl = perUrl + '/br-order-org-branch-controller/branch/suite'; //查询门店下全部套餐
var startexaminationUrl = '/br-order-org-branch-controller/branch/startexamination'; //订单开始体检
var examinationfinishUrl = '/br-order-org-branch-controller/branch/examinationfinish '; //订单结束体检
//科室
var dept_getDeptTypeList_url = perUrl + '/br-order-org-branch-controller/dept/getDeptTypeList'; //科室类型
var dept_getDeptList_url = perUrl + '/br-order-org-branch-controller/dept/getDeptList'; //有效科室下拉框
var department_getAllDeptByBranchId_url = perUrl + '/br-order-org-branch-controller/dept/getAllDeptByBranchId'; //科室列表
var dept_insertDept_url = perUrl + '/br-order-org-branch-controller/dept/insertDept'; //添加科室
var dept_deleteDept_url = perUrl + '/br-order-org-branch-controller/dept/deleteDept'; //删除科室
var dept_getDeptByDeptId_url = perUrl + '/br-order-org-branch-controller/dept/getDeptByDeptId'; //查看科室
var dept_updateDept_url = perUrl + '/br-order-org-branch-controller/dept/updateDept'; //保存科室
//医生
var doctor_getUserByBranchId_url = perUrl + '/br-order-org-branch-controller/doctor/getUserByBranchId'; //医生列表
var doctor_insertUser_url = perUrl + '/br-order-org-branch-controller/doctor/insertUser'; //添加医生
var doctor_deleteUser_url = perUrl + '/br-order-org-branch-controller/doctor/deleteUser'; //删除医生
var doctor_getUserByUserId_url = perUrl + '/br-order-org-branch-controller/doctor/getUserByUserId'; //查看医生
var doctor_updateUser_url = perUrl + '/br-order-org-branch-controller/doctor/updateUser'; //保存医生
var doctor_checkUserName_url = perUrl + '/br-order-org-branch-controller/doctor/checkUserName'; //医生重名校验 
//支付
var payFor_getPayInfoByPage_url = perUrl + '/br-order-org-branch-controller/cusOrderPayInfo/getPayInfoByPage'; //支付列表
//用户管理页面
var getUserListUrl = perUrl + '/br-order-org-branch-controller/user/userList'; //分页获取用户列表
var checkUserDetialByUserIdUrl = perUrl + '/br-order-org-branch-controller/user/getUserByUserId'; //根据用户Id查询用户详情信息
var insertUserMsgByUserIdUrl = perUrl + '/br-order-org-branch-controller/user/insertUser'; //根据用户Id添加用户信息
var updateUserMsgByUserIdUrl = perUrl + '/br-order-org-branch-controller/user/updateUser'; //根据用户Id修改用户信息
var deleteUserMsgByUserIdUrl = perUrl + '/br-order-org-branch-controller/user/deleteUser'; //根据用户Id删除用户信息
var getRolesByUserIdUrl = perUrl + '/br-order-org-branch-controller/user/getRolesByUserId'; //根据用户id获取角色列表 
var updateUserRoleUrl = perUrl + '/br-order-org-branch-controller/user/updateUserRole'; //编辑保存用户分配角色信息
var checkUserNameUrl = perUrl + '/br-order-org-branch-controller/user/checkUserName'; //用户名重名校验 
//权限
var getPermissionListUrl = perUrl + '/br-order-org-branch-controller/permission/getPermissionList'; //获取权限树
var getPermissionByIdUrl = perUrl + '/br-order-org-branch-controller/permission/getPermissionById'; //根据权限获取详情
var updatePermissionByIdUrl = perUrl + '/br-order-org-branch-controller/permission/updatePermissionById'; //权限基本信息编辑保存
var addBrOperationUrl = perUrl + '/br-order-org-branch-controller/permission/addBrOperationByPermissionId'; //添加操作功能权限
var userPower_insertPermission_url='/br-order-org-branch-controller/permission/insertPermission'; //添加权限功能
var getOperationByIdUrl = perUrl + '/br-order-org-branch-controller/operation/getOperationById'; //操作功能列表编辑回显
var updateOperationByPermissionIdUrl = perUrl + '/br-order-org-branch-controller/operation/updateOperationByPermissionId'; //操作功能列表编辑保存
//角色
var getRoleListUrl = perUrl + '/br-order-org-branch-controller/role/list'; //获取角色列表
var addRoleUrl = perUrl + '/br-order-org-branch-controller/role/addRole'; //添加角色信息
var deleteRoleUrl = perUrl + '/br-order-org-branch-controller/role/deleteRole'; //删除角色信息
var updateRoleUrl = perUrl + '/br-order-org-branch-controller/role/updateRole'; //编辑角色信息
var getRoleByIdUrl = perUrl + '/br-order-org-branch-controller/role/getRoleById'; //编辑回显角色信息 
var getPermissionOperationUrl = perUrl + '/br-order-org-branch-controller/role/getPermissionOperation'; //角色权限树
var savePermissionUrl = perUrl + '/br-order-org-branch-controller/role/savePermission'; //角色权限编辑保存

//公共ajax

function httpRequest(httpUrl, httpParam, httpType, async) {
	var reqResult = {
		"result": 1,
		"message": "没有请求服务器或接受到返回值"
	};
	$.ajax({
		url: httpUrl,
		type: httpType,
		async: async,
		data: httpParam,
		contentType: "application/x-www-form-urlencoded;charset=UTF-8",
		dataType: 'json',
		success: function(msg) {
			if(msg.result == 99) {
				alert(msg.message);
				return false;
			} else if(msg.result == 100) {
				window.location.href = perUrl + '/branch/';
				return false;
			}
			reqResult = msg;
			return msg;
		},
		error: function(data) {
			/**
			 * 此处应为弹出公共提示信息窗口
			 * 提示错误信息
			 * 并返回登录页面
			 */
			window.location.href = '/branch/pages/system/404.html';
			return false;
		}
	});
	return reqResult;
}
	/**
	 * 用户退出登录
	 */
function logout() {
	if(confirm("您确定要退出吗?")) {
		var param = null;
		var type = "get";
		var reqResult = httpRequest(logout_url, param, type, false);
		if(reqResult.result == 0) {
			window.location.href = perUrl + '/branch';
		} else {
			alert(reqResult.message);
		}
	}
}