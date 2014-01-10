 $(document).ready(function(){
	//笔记切换
	$(".note_h2 a:not(.noswitch)").mouseover(function(){
	$(".note_active").removeClass("note_active");
	$(this).addClass("note_active"); 
	var target = $('#' + this.rel);
        $('.note_list').hide();
		$('.hs_switch').hide();
        target.show();
	});
	//最热视频切换
	$(".note_h2_video a").mouseover(function(){
	$(".note_active_video").removeClass("note_active_video");
	$(this).addClass("note_active_video"); 
	var target = $('#' + this.rel);
		$('.video_switch').hide();
        target.show();
	});
	
	//jquery validation表单验证
	var validator = $("#login_form").validate({
		//定义规则
		rules: {
			username: {
				required: true,
				rangelength: [2,16]
			},
			password: {
				required: true,
				minlength: 5
			},
			psw_confirm: {
				required: true,
				minlength: 5,
				equalTo: "#id_password"
			},
			new_password: {
				required: true,
				minlength: 5
			},
			new_psw_confirm: {
				required: true,
				minlength: 5,
				equalTo: "#new_password"
			},
			email: {
				required: true,
				email: true
			},
			new_email: {
				required: true,
				email: true
			},
			nickname: {
				required: true,
				rangelength: [2,16]
			},
			motto: {
				required: true,
				rangelength: [2,16]
			},
			picture: {
				required: true
			},
			captcha: {
				required: true,
				rangelength: [4,4]
			}
		},
		//定义出错信息
		messages: {
			username: {
				required: "请输入用户名",
				rangelength: jQuery.format("限定 {0}到{1} 个字符")
			},
			password: {
				required: "请输入密码",
				minlength: jQuery.format("至少 {0} 个字符")
			},
			psw_confirm: {
				required: "请重复密码",
				minlength: jQuery.format("至少 {0} 个字符"),
				equalTo: "两次输入不一致"
			},
			new_password: {
				required: "请输入密码",
				minlength: jQuery.format("至少 {0} 个字符")
			},
			new_psw_confirm: {
				required: "请重复密码",
				minlength: jQuery.format("至少 {0} 个字符"),
				equalTo: "两次输入不一致"
			},
			email: {
				required: "请输入邮箱地址",
				email: "邮箱格式不正确"
			},
			new_email: {
				required: "请输入新邮箱地址",
				email: "邮箱格式不正确"
			},
			nickname: {
				required: "请输入昵称",
				rangelength: jQuery.format("限定 {0}到{1} 个字符")
			},
			motto: {
				required: "请输入个性签名",
				rangelength: jQuery.format("限定 {0}到{1} 个字符")
			},
			picture: {
				required: "请提交头像"
			},
			captcha: {
				required: "请输入验证码",
				rangelength: jQuery.format("验证码是 {0} 位")
			}
		},
		// 出错信息显示位置
		errorElement: 'span', 
		errorPlacement: function(error,element) {
			error.appendTo( element.parent() );
		},  
		// 设置成功css类
		success: function(label) {
			// set &nbsp; as text for IE
			label.html("&nbsp;").addClass("checked");
		}
	});
	//首页轮播
	$('#slides').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true
	});
	//导航首页文字切换
	$('nav ul li:first span').hover(function(){
			$(this).text("返　回　首　页");
		},function(){
			$(this).text("武汉大学讲座网");
	});
	//头像剪裁
	function preview(img, selection) {
	if (!selection.width || !selection.height)
	return;
	var scaleX = 34 / selection.width;
	var scaleY = 34 / selection.height;
	$('#preview img').css({
	width: Math.round(scaleX * 160),
	height: Math.round(scaleY * 160),
	marginLeft: -Math.round(scaleX * selection.x1),
	marginTop: -Math.round(scaleY * selection.y1)
	});
	$('#x1').val(selection.x1);
	$('#y1').val(selection.y1);
	$('#x2').val(selection.x2);
	$('#y2').val(selection.y2);
	$('#w').val(selection.width);
	$('#h').val(selection.height);
	} 
	$('#imgcut').imgAreaSelect({ aspectRatio: '1:1', handles: true,
	fadeSpeed: 200,minHeight:34,minWidth:34, onSelectBegin:preview, onSelectChange: preview }); 
});



