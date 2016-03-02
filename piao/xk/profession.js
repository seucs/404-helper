var inn = new Array();
var dic = new Array();
var t_time = new Array();
var o_obj = new Array();



$(".button1").each(function() {
    var clickfunc = $(this).attr('onclick').toString();
    var jhkcdm = clickfunc.split("'")[1];
    var jxbbh = clickfunc.split("'")[3];
    var xkkclx = clickfunc.split("'")[5];
    //console.log(jhkcdm+":"+$("#"+jhkcdm)[0].innerText);
});




function selectThis(jhkcdm,jxbbh,xkkclx,mkbh,obj,ind){
	if(!dic[jhkcdm]){
		dic[jhkcdm] = "a";
		o_obj[jhkcdm] = obj;
	}

	if(dic[jhkcdm]=="a"){
		t_time[jhkcdm] = 0;
		inn[jhkcdm] = self.setInterval("myselectThis('"+jhkcdm+"','"+jxbbh+"','"+xkkclx+"','"+mkbh+"')",20);
		dic[jhkcdm] = "b";
	}else{	
		window.clearInterval(inn[jhkcdm]);
		obj.innerText = "服从推荐";
		dic[jhkcdm] = "a";
	}
}

function myselectThis(jhkcdm,jxbbh,xkkclx,mkbh){
	$.ajax({ 
            async:false,
            type:"post", 
            contentType:"application/json", 
            url:"runSelectclassSelectionAction.action?select_jxbbh="+jxbbh+"&select_xkkclx="+xkkclx+"&select_jhkcdm="+jhkcdm+"&select_mkbh=" + mkbh+"&dxdbz=1", 


            data:"{}", 
            dataType:"json", 
            success:function(data){ 
				o_obj[jhkcdm].innerText = "正在刷课...目前第"+t_time[jhkcdm]+"次";
            	if(data.rso.isSuccess == 'false'){
					t_time[jhkcdm] += 1;
            		//console.log(myDate.toLocaleTimeString()+document.getElementById(jhkcdm).innerText +'选课失败');
        			return;
        		}else{
                    var myDate = new Date();
					dic[jhkcdm] = "a";
					window.clearInterval(inn[jhkcdm]);
					o_obj[jhkcdm].innerText = "服从推荐";
					console.log(myDate.toLocaleTimeString()+document.getElementById(jhkcdm).innerText +'选课成功');
        		}
            }
	});	
}


//选择其他
function selectOthers(xn,xq,jhkcdm,xkkclx,mkbh,ind){
    _w_table_td5_font2_Obj = $("#selectList tr:nth-child("+ ind +") td:nth-child(8) p:nth-child(2) font");
    _w_table_td5_font1_Obj = $("#selectList tr:nth-child("+ ind +") td:nth-child(8) p:nth-child(1) font");
    _w_table_td6_button3_Obj = $("#selectList tr:nth-child("+ ind +") td:nth-child(9) .button3");
    _w_table_td6_button1_Obj = $("#selectList tr:nth-child("+ ind +") td:nth-child(9) .button1");
    var obj = new Object();
    sFeatures   ="dialogWidth:"   +   window.screen.width  + ";dialogHeight:" + window.screen.height;
    obj.select_jhkcdm = jhkcdm;
    var retObj = window.open("runViewsecondSelectClassAction.action?Wv3opdZQ89ghgd88wjff43Dsdf4Fsd4SSg9FsgG49koguSd2fRVsfweSUj=" + new Date() + "&select_xn=" + xn+"&select_xq=" + xq+"&select_jhkcdm=" + jhkcdm+"&select_mkbh=" + mkbh+"&select_xkkclx="+xkkclx+"&select_dxdbz=1",obj,sFeatures);
    
    if(retObj != null && retObj.handlingtype != null){
        if(retObj.handlingtype == 'select'){
            //同模块编号下的
       /*   if(retObj.mkbh != ''){
        *       mkObj = $(".jg_"+retObj.mkbh + " p:nth-child(1) font");
        *       mkObj.text("[尚未选择]");
        *       mkObj.css("color","#FF0000");
        *       buttonObj = $(".button_"+retObj.mkbh + " #button3");
        *       buttonObj.attr("disabled","true");
        *   }
        */
            $("#select_xkjxb_"+ind).val(retObj.yxjxbbh);
            _w_table_td5_font1_Obj.text(retObj.str);
            _w_table_td5_font1_Obj.css("color","#009900");
            _w_table_td6_button3_Obj.attr("disabled",false);
            if(retObj.tjjxb == 'true'){
                _w_table_td6_button1_Obj.attr("disabled",true);
            }
            if(retObj.zyqz != "0"){
                _w_table_td5_font1_Obj.append("<span style='color:FF0000'>[占用权重]"+ retObj.zyqz +"</span>");
            }
        }else if(retObj.handlingtype == 'cancle'){
            _w_table_td5_font1_Obj.text("[尚未选择]");
            _w_table_td5_font1_Obj.css("color","#FF0000");
        }
    }
}













