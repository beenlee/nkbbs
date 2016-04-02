### NKBBS API

#### 登录    
Request URL:http://bbs.nankai.edu.cn/ajax    
Request Method:POST    
参数：    
type:user    
request:login    
all_name:2120120367    
all_pwd: **********    
all_remember:true    

```
// 成功：    
{
    "status":1,
    "error":"",
    "data":""
}    
// 失败：    
{
    "status":0,
    "error":"\u7528\u6237\u4e0d\u5b58\u5728\u6216\u5bc6\u7801\u9519\u8bef",
    "data":""
}
```
#### 退出
Request URL:http://bbs.nankai.edu.cn/user/user_logout

#### 消息通知
Request URL:http://bbs.nankai.edu.cn/user/get_news?_=1459611738752    
Request Method:GET    

````
// 正常
{
    "ajax_status":1,
    "news":[
    	{
    		"uid":"3641",
    		"num":"4",
    		"status":"7",
    		"history_status":"1",
    		"id":"2827335",
    		"reply_id":"0",
    		"ctime":"2016-03-09 23:31:26",
    		"count":"1",
    		"name":""
    	}
    ],
    "count":1
}
// 空列表
{
    "ajax_status":"0",
    "news":[],
    "count":"0"
}
// 失败
{
	"ajax_status":"0",
	"news":"",
	"count":"0"
}
// status 类型
(f.status) {
	case "1":
	    g = "msg",
	    h = "有" + f.num + "封新私信";
	    break;
	case "7":
	    g = "msg/sysmsg",
	    h = "有" + f.num + "个新通知";
	    break;
	case "2":
	    g = "user/setting",
	    h = "有" + f.num + "个新关注";
	    break;
	case "3":
	    g = "site/article/" + f.num,
	    h = "在【" + f.name + "】中有" + f.count + "个回复";
	    break;
	case "4":
	    g = "group/article/" + f.num,
	    h = "在【" + f.name + "】中有" + f.count + "个回复";
	    break;
	case "5":
	    g = "site/article/" + f.num,
	    h = "在【" + f.name + "】中被召唤" + f.count + "次";
	    break;
	case "6":
	    g = "group/article/" + f.num,
	    h = "在【" + f.name + "】中被召唤" + f.count + "次"
}
````

#### 关注小组
Request URL:http://bbs.nankai.edu.cn/site/action    
Request Method:POST    
参数：    
thing:concern 关注 unconcern 取消
sid:1    

````
// 成功
空的
// 失败
错误信息
````
#### 编辑帖子
Request URL:http://bbs.nankai.edu.cn/group/action    
Request Method:POST    
参数：    
thing:post_article
gid:303
name:百度前端学院春季班开班了，想学前端的同学可以参加
content:`<p>				
					</p><p>				
					百度前端学院是百度efe办的一个免费的在线前端实训班，现在已经开始报名了，想学前端的同学可以参加，表现好的同学还有可能拿到百度的offer<br/>前端学院网址&nbsp;ife.baidu.com. <br/>efe是百度最大的前端团队，有很多国内外知名的前端开源项目，efe团队博客efe.baidu.com</p><p style="text-align: right;"><span style="font-size: 12px; color: rgb(79, 40, 73);">——来自我爱南开bbs手机网页版</span></p><p><br/></p><p>						
					</p>`
anonymous:false
vid:-1 // 投票的id -1表示没有
tags:前端,百度
edit:401961 // 帖子id  0表示新发帖子

#### 回复帖子
Request URL:http://bbs.nankai.edu.cn/group/action    
Request Method:POST    
参数：    
// 纯评论的    
thing:post_reply    
g_a_id:408179    
gid:16    
content:test    
noname:0    // 1匿名 0不匿名    
p_g_r_id:0    

// 回复别人的    
thing:post_reply    
g_a_id:408179    
gid:16    
content:`ee<p style="text-align: right;"><span style="font-size: 12px; color: rgb(79, 40, 73);">——来自我爱南开bbs手机网页版</span></p>`    
noname:0     
p_g_r_id:277791    

// 带引用的    
thing:post_reply    
g_a_id:408179    
gid:16    
content:`quote&nbsp;    ee——来自我爱南开bbs手机网页版 :引用test<p style="text-align: right;"><span style="font-size: 12px; color: rgb(79, 40, 73);">——来自我爱南开bbs手机网页版</span></p>`    
noname:0    
p_g_r_id:277793    


````
// 成功
空的
// 失败
错误信息
````
#### 获取更多评论 （后端渲染了）
Request URL:http://bbs.nankai.edu.cn/group/action    
Request Method:POST    
参数：    
g_a_id:408179,    
page: 1,
thing:'get_more_reply',
reply_type:0 所有 1 关于我的 2匿名的

// 直接返回渲染的
                function(data){
                    if(data=='none') {
                        $("#more-reviews").hide();
                        more_btn[reply_type] = 1;
                    } else {
                        $(".reviews").eq(reply_type).append(data);
                        page[reply_type]++;
                    }
                }
            );
````
// 没了
none
// 有结果
渲染后的片段
````

#### 踩
Request URL:http://bbs.nankai.edu.cn/group/action    
Request Method:POST    
参数：    
thing:deter    
g_a_id:408179    
gid:16    
type:1  // 1踩 0取消    


```
// 成功
空的
// 失败
错误信息
```

#### 赞
Request URL:http://bbs.nankai.edu.cn/group/action    
Request Method:POST    
参数：    
thing:rec    
g_a_id:408179    
gid:16    
type:1  // 1赞 0取消    


```
// 成功
空的
// 失败
错误信息
```

#### 收藏
Request URL:http://bbs.nankai.edu.cn/group/action    
Request Method:POST    
参数：    
thing:fav 收藏 unfav 取消    
g_a_id:408179    


```
// 成功
空的
// 失败
错误信息
```





#### 其他的api
````
var p_g_r_id, page = new Array(2,2,2), reply_type = 0, _uid = 3641;
var more_btn = new Array(1,1,1);
var is_silence = 0;
var editor = new UE.ui.Editor();
editor.render('ueditor');
$(document).ready(function(){
    $(".reply-tab-btn").click(function() {
        var tag = parseInt($(this).attr("tag"));
        if(reply_type != tag) {
            $(".reviews").eq(reply_type).fadeOut(function(){$(".reviews").eq(tag).fadeIn();});
            $(".reply-tab-btn").eq(reply_type).removeClass("active");
            $(".reply-tab-btn").eq(tag).addClass("active");
            if(more_btn[tag] == 1) {
                $("#more-reviews").hide();
            } else {
                $("#more-reviews").show();
            }
            reply_type = tag;
        }
    });
    $(".opinion-item--hidden").click(function() {
        var tag = $(this).attr("tag");
        $(this).hide();
        $("#hide_content_"+tag).show();
    });
});

        function up_opinion(oid_value) {
            $.post("http://bbs.nankai.edu.cn/group/action",
                {g_a_id:408179, thing:"score_opinion", oid:oid_value, action:"up"},
                function(data) {
                    data = JSON.parse(data);
                    if(data['status'] == 0) {
                        alert(data['error']);
                    } else {
                        $(".href_"+oid_value).removeAttr("href");
                        $("#up_img_"+oid_value).removeClass("up").addClass("check");
                        $("#down_img_"+oid_value).removeClass("down").addClass("down2");
                        var up_num = parseInt($("#up_num_"+oid_value).html());
                        $("#up_num_"+oid_value).html((up_num+1).toString());
                    }
                }
            );
        }

        function down_opinion(oid_value) {
            $.post("http://bbs.nankai.edu.cn/group/action",
                {g_a_id:408179, thing:"score_opinion", oid:oid_value, action:"down"},
                function(data) {
                    data = JSON.parse(data);
                    if(data['status'] == 0) {
                        alert(data['error']);
                    } else {
                        $(".href_"+oid_value).removeAttr("href");
                        $("#down_img_"+oid_value).removeClass("down").addClass("check");
                        $("#up_img_"+oid_value).removeClass("up").addClass("up2");
                        var down_num = parseInt($("#down_num_"+oid_value).html());
                        $("#down_num_"+oid_value).html((down_num+1).toString());
                    }
                }
            );
        }

        function post_opinion() {
            var opinion = $("#opinion-editor").val();
            if (opinion === '') {
                alert("请输入您的观点");return;
            }
            if(is_silence == 1) {
                alert("您被该小组禁言了");
                return;
            }
            $.post("http://bbs.nankai.edu.cn/group/action",
                {content:opinion, g_a_id:408179,thing:"post_opinion",gid:16},
                function(data) {
                    data = JSON.parse(data);
                    if(data['status'] == 0) {
                        alert(data['error']);
                    } else {
                        location.reload();
                    }
                }
            );
        }

        function show_post_opinion() {
            if(_uid == -1) { alert("请登录"); return; }
            if(is_silence == 1) {
                alert("您被该小组禁言了");
                return;
            }
            $("#post-opinion-box").slideToggle();
        }

        function get_more_reply() {
            $.post("http://bbs.nankai.edu.cn/group/action",
                {g_a_id:408179,page:page[reply_type],thing:'get_more_reply',reply_type:reply_type},
                function(data){
                    if(data=='none') {
                        $("#more-reviews").hide();
                        more_btn[reply_type] = 1;
                    } else {
                        $(".reviews").eq(reply_type).append(data);
                        page[reply_type]++;
                    }
                }
            );
        }

        function shoucang() {
            if(_uid == -1) {
                alert('还没登录哦亲~'); return;
            }
            if(0 == 0) {
                if(confirm("确认收藏吗？")) {
                    $.post("group/action", {thing:'fav', g_a_id:408179},
                        function(datas) {
                            if(datas == "") {
                                location.reload();
                            } else {
                                alert(datas);
                            }
                        }
                    );
                }
            } else {
                if(confirm("确认取消收藏吗？")) {
                    $.post("group/action", {thing:'unfav', g_a_id:408179},
                        function(datas) {
                            if(datas == "") {
                                location.reload();
                            } else {
                                alert(datas);
                            }
                        }
                    );
                }
            }
        }


        function tanhe(type){
            if(_uid == -1){alert('还没登录哦亲~');return;}
            if(is_silence == 1) {
                alert("您被该小组禁言了");
                return;
            }
            var con_type;
            if(type == 0) con_type = "确认取消踩吗？";
            else con_type = "确认踩吗？";
            if(confirm(con_type)) {
                $.post("http://bbs.nankai.edu.cn/group/action", {thing:'deter', g_a_id:408179,gid:16,type:type},
                    function(datas){
                        if(datas==""){location.reload();}
                        else{alert(datas);}
                    }
                );
            }
        }





        function post_reply() {
            var temp = $('#btn_post');
            var noname = 0;
            var v_content = editor.getContent();
            if(temp.html() == '提交') {
                if(v_content === "") {
                    alert("请输入回复的内容");
                } else {
                    temp.html('提交中...');
                    if($("#noname").prop("checked") == true) {
                        noname = 1;
                    }
					v_content_temp = v_content.split("$$")
					for(i =1 ;i<v_content_temp.length;i++){
						v_content_temp[i]=v_content_temp[i].replace(/<\/?[^>]*>/g,'');
						alert(v_content_temp[i]);
						i++;
					}
					v_content = v_content_temp.join("$$");
					//v_content = v_content.replace(/<\/?[^>]*>/g,'');
                    $.post("http://bbs.nankai.edu.cn/group/action", {thing:'post_reply',
                        g_a_id:408179,
                        gid:16,
                        content:v_content,
                        noname:noname,
                        p_g_r_id:p_g_r_id},
                        function(datas){
                            if(datas != "") {
                                alert(datas);
                                temp.html("提交");
                            } else {
                                location.reload();
                            }
                        }
                    );
                }
            }
        }


````









