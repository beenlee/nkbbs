### NKBBS API

#### Cookie
nkbbs_session = R7yZIVru....0e192600885;     
unique_id = 2120120367

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

#### 用户信息
Request: http://bbs.nankai.edu.cn/android/user_action    
Request Method: POST    
参数：    
id = 3641    // 要看的用户的id    
type = get_userinfo    
uid = 3641    // 当前用户的id    

```
{
    "status": 1,
    "error": "",
    "data": {
        "relate": -1,
        "related": -1,
        "msg": -1,
        "ignore": -1,
        "ignored": -1,
        "name": "李大大大大斌",
        "sex": "无可奉告",
        "score": "390",
        "rank": "2232",
        "level": "马蹄一荷",
        "signature": "似乎没有...",
        "college": "计算机与控制工程学院",
        "province": "河北省",
        "city": "沧州市",
        "birthday": "1989-01-06",
        "xingzuo": "摩羯座",
        "info_privacy": "所有人可见",
        "behavior": [
            {
                "uid": "3641",
                "group_site_user": "1",
                "article": null,
                "creatime": "2016-04-03 01:12:37",
                "status": "2",
                "name": "百团争艳",
                "article_name": "",
                "time": "今天"
            },
            ......
            {
                "uid": "3641",
                "group_site_user": "228",
                "article": "316479",
                "creatime": "2015-05-20 23:54:18",
                "status": "10",
                "name": "SelfPhoto",
                "article_name": "【毕业爆照】  毕业党们留下你的爆照时间吧。 最近答辩开始马上就是拍毕业照了！",
                "time": "很久前"
            }
        ]
    }
}

```
#### 小组列表
Request: http://bbs.nankai.edu.cn/android/group_action
Request Method:POST 
参数：
type = all_group_names
uid  = 3641

```
{
    "status": 1,
    "error": "",
    "data": {
        "groups": [
            {
                "gid": "2",
                "name": "贴图",
                "label": "生活类" // 父类的名字
            },
            {
                "gid": "3",
                "name": "文艺", // 组name
                "label": "" // 空为大类
            },
            {
                "gid": "5",
                "name": "鹊桥",
                "label": "服务类"
            },
            {
                "gid": "6",
                "name": "情感",
                "label": "生活类"
            },
            {
                "gid": "7",
                "name": "失物招领",
                "label": "服务类"
            },
            ......
            {
                "gid": "437",
                "name": "steam",
                "label": "其他类"
            }
        ]
    }
}
```

#### 热门帖子
Request URL: http://bbs.nankai.edu.cn/android/group_action    
Request Method:POST    
参数：    
time： day 日， week 周， month 月    
type： get_topten    
uid： 3641  

```
{
    "status": 1,
    "error": "",
    "data": {
        "group_articles": [
            {
                "g_a_id": "405249",  // 文章id
                "gid": "22",  // 小组id
                "user_id": "28285",  // 用户id
                "name": "制作了【南开紫+微立体】PPT模板，有人需要嘛~",  // 文章标题
                "reply_num": "21",  // 回复数量
                "fav_num": "37",  // 收藏数量
                "click_num": "1260",  // 点击数
                "creatime": "2016-03-18 23:00:29",  // 创建时间
                "anonymous": "0",  // 是否匿名
                "marrow": "0", // 
                "top": "0",  // 是否置顶
                "TopTen": "1",  // 是否可以进入是top10
                "groupname": "南开之声", // 小组名
                "author": "floorfiller" // 作者
            },
            ......
            {
                "g_a_id": "406691",
                "gid": "22",
                "user_id": "7173",
                "name": "白菜价论文排版！排的是情怀！",
                "reply_num": "45",
                "fav_num": "14",
                "click_num": "1162",
                "creatime": "2016-03-24 10:10:46",
                "anonymous": "0",
                "marrow": "0",
                "top": "0",
                "TopTen": "1",
                "groupname": "南开之声",
                "author": "jinmunangua"
            }
        ]
    }
}
```  

#### 获取小组的帖子列表
Request URL:http://bbs.nankai.edu.cn/android/group_action    
Request Method:POST    
参数：    
gid=65  // 小组id 或者 ， all 所有小组   
page=1 // 页码    
type=get_group_article_list    
uid=3641 // 用户id   
 

```
{
    "status": 1,
    "error": "",
    "data": {
        "group": {
            "status": "1",
            "type": "1",
            "visitor_view": "0",
            "name": "化学学院",
            "gid": "65",
            "signature": "无化学，不南开！！！",
            "anonymous": "0"
        },
        "concern": 0, // 已关注
        "top_articles": [
            {
                "g_a_id": "404567",
                "gid": "65",
                "user_id": "3988",
                "name": "南开大学化学学院刘永胜课题组招收硕博研究生",
                "reply_num": "2",
                "fav_num": "5",
                "click_num": "810",
                "recommend_num": "12",
                "creatime": "2016-03-16 18:59:47",
                "anonymous": "0",
                "marrow": "0",
                "top": "1",
                "TopTen": "1",
                "groupname": "化学学院",
                "author": "快乐时光机"
            },
            ......
            {
                "g_a_id": "399049",
                "gid": "65",
                "user_id": "12969",
                "name": "请问在哪办理元素所的门禁卡，是本校本科生",
                "reply_num": "2",
                "fav_num": "0",
                "click_num": "49",
                "recommend_num": "0",
                "creatime": "2016-02-23 15:23:39",
                "anonymous": "0",
                "marrow": "0",
                "top": "0",
                "TopTen": "1",
                "groupname": "化学学院",
                "author": "李可能A"
            }
        ]
    }
}
```

#### 获取帖子详情
Request URL:http://bbs.nankai.edu.cn/android/group_action     
Request Method:POST    
参数：    
g_a_id=409295 // 帖子id    
page=1  // 回复的页码， 这个没用 现在的评论是全部一次吐过来的    
reply_order=0    回复的排序 按时间： 0 正序 1逆序   
type=get_group_article    
uid=3641 // 当前用户id     

```
{
    "status": 1,
    "error": "",
    "data": {
        "article": {
            "g_a_id": "409103",
            "gid": "5",
            "user_id": "13801",
            "name": "我要认认真真的上一次鹊桥 谁也别拦我！！！",
            "reply_num": "29", // 回复
            "fav_num": "0", // 收藏
            "click_num": "1382", // 浏览
            "recommend_num": "9", // 赞
            "recommend_user": "13494,15620,1703,7326,2420,33805,5991,31447,4117",
            "deter_num": "0", // 踩
            "creatime": "2016-04-02 15:31:33",
            "changetime": "2016-04-02 15:31:33",
            "lastreplytime": "2016-04-03 17:49:49",
            "content": "<p>&nbsp;.......&nbs</p>",
            "status": "1",
            "top": "0",
            "marrow": "0",
            "can_reply": "1",
            "TopTen": "1",
            "ever_TopTen": "1",
            "ever_top": "0",
            "ever_marrow": "0",
            "opinion_number": "0",
            "anonymous": "0",
            "vid": null,
            "g_a_tags": null
        },
        "group": {
            "visitor_view": "0",
            "type": "1",
            "gid": "5",
            "name": "鹊桥"
        },
        "concern": 1,
        "reply": [
            {
                "g_r_id": "280051",
                "g_a_id": "409103",
                "p_g_r_id": null,
                "user_id": "2387",
                "content": "<p>尽管楼主很多逻辑不通，但还是不错的，，，<br/></p>",
                "creatime": "2016-04-02 15:44:34",
                "changetime": null,
                "status": "1",
                "noname": "0",
                "count": 29,
                "user": {
                    "uid": "2387",
                    "name": "三个逗号"
                }
            },
			......
            {
                "g_r_id": "280235",
                "g_a_id": "409103",
                "p_g_r_id": "280205",
                "user_id": "13801",
                "content": "<p>想干客户经理的话 先干桂圆是很好的缓冲期 尤其是对公柜员</p><p>好好把握桂圆时光 积累资源<img src=\"http://bbs.nankai.edu.cn/data/ueditor/dialogs/emotion/images/jx2/j_0020.gif\"/></p><p><br/></p>",
                "creatime": "2016-04-03 17:49:49",
                "changetime": null,
                "status": "1",
                "noname": "0",
                "user": {
                    "uid": "13801",
                    "name": "ongmingjun"
                }
            }
        ],
        "page": "1",
        "author": {
            "uid": "13801",
            "name": "ongmingjun"
        },
        "fav": 0, // 是否收藏
        "rec": 0, // 是否赞
        "deter": 0, // 是否踩
        "top": "0", // 是否置顶
        "marrow": "0",
        "can_reply": "1", // 是否允许评论
        "opinions": [],
        "title": "小组-鹊桥-我要认认真真的上一次鹊桥 谁也别拦我！！！"
    }
}
```

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









