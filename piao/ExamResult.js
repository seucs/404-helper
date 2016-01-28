// <td align="center" width="10%">序号</td>
// <td align="center" width="10%">学年学期</td>
// <td align="center" width="10%">课程代码</td>
// <td align="center" width="20%">课程名称</td>
// <td align="center" width="10%">学分</td>
// <td align="center" width="10%">成绩</td>
// <td align="center" width="10%">成绩性质</td>
function getScore(){
	var doc = $("#table2",parent.frames["packageFrame"].document)[0];
	var len = doc.getElementsByTagName("tr").length;
	var m_tr = doc.getElementsByTagName("tr");
	//var resArr = new Array();
	var res = 0;
	var sum_w = 0;
	for( var i=1; i<len;i++){
		//resArr[i] = new Array(1,2);
		var w = parseFloat(m_tr[i].getElementsByTagName("td")[4].innerText);
		var s = m_tr[i].getElementsByTagName("td")[5].innerText.trim();
		if(s == "通过" || s == "缺考"){
			continue;
		}
		if(s == "优"){
			s = 95;
		}else if(s == "良"){
			s = 85;
		}else if(s == "中"){
			s = 75;
		}else if(s == "及格"){
			s = 65;
		}else if(s == "不及格"){
			s = 0;
		}else{
			s = parseInt(s);
		}

		//console.log(s);
		if(s>=85){
			s = 4;
		}else if(s>=75){
			s = 3;
		}else if(s>=65){
			s = 2;
		}else if(s>=60){
			s = 1;
		}else{
			s = 0;
		}

		res += w*s;
		sum_w += w;
	}

	console.log(res/sum_w);
}
