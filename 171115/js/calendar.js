function drawCalendar(firstday, days, date, year, month){
	document.write(firstday+", "+year+", "+month+", "+days+", "+date)
	var text="<center>달력";
	text+="<table border=1>";
	text+="<th colspan='7' bgcolor='#ffffcc'>";
	text+=year+"년 "+(month+1)+"월 </th>";
	text+="<tr>";
	
	var weekDay=new Array('일','월','화','수','목','금','토');
	for(var i=0;i<7;i++){
		text+="<td width='45' height='40'>"+weekDay[i]+"</td>"
	}
	text+="</tr>";

	var digit=1;
	var curCell=1;
	var rowSize = Math.ceil((days+firstday-1)/7);

	for(var row=1;row<=rowSize;row++){
		text+="<tr>";
		for(var col=1;col<=7;col++){
			if(curCell < firstDay){
				text+="<td></td>";
				curCell++;
			}else{
				if(digit>days){
					text+="<td height=40></td>";
				}else{
					text+="<td height=40>"+digit+"</td>";
					digit++;
				}
			}
		}


		text+="</tr>";
	}

	text+="</table>";
	text+="</center>"
	return text;
}

function getDay(year,month){
	var lastMonth=new Array(31,29,31,30,31,30,31,31,30,31,30,31);
	var mon2;
	if(year%4==0){
		mon2=true;
	}
	if(year%100 == 0){
		mon2=false;
	}
	if(year%400 == 0){s
		mon2 = true;
	}

	if(mon2){
		lastMonth[1]=29;
	}else{
		lastMonth[1]=28;
	}

	return lastMonth[month];
}

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();

var days = getDay(year,month);
var firstDayInstance = new Date(year, month, 1);
var firstDay = firstDayInstance.getDay()+1;


var mycalendar=drawCalendar(firstDay, days, date, year, month);

document.write(mycalendar);