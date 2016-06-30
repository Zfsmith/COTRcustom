//$(document).ready(function(){
	
			//get array from php
			
			
			//create arrays for each month to store days
			var January = new Array();
			var Febuary = new Array();
			var March = new Array();
			var April = new Array();
			var May = new Array();
			var June = new Array();
			var July = new Array();
			var August = new Array();
			var September = new Array();
			var October = new Array();
			var November = new Array();
			var December = new Array();
			
			document.write("<br>");
			
			//fill month arrays with days
			for (i = 0; i < list.length; i++){
				var date = list[i];
				date = date.replace(".", "-");
				date = date.split("-");
				if(date[0] == "January"){
					January.push(date[1]);
				}
				if(date[0] == "Febuary"){
					Febuary.push(date[1]);
				}
				if(date[0] == "March"){
					March.push(date[1]);
				}
				if(date[0] == "April"){
					April.push(date[1]);
				}
				if(date[0] == "May"){
					May.push(date[1]);
				}
				if(date[0] == "June"){
					June.push(date[1]);
				}
				if(date[0] == "July"){
					July.push(date[1]);
				}
				if(date[0] == "August"){
					August.push(date[1]);
				}
				if(date[0] == "September"){
					September.push(date[1]);
				}
				if(date[0] == "October"){
					October.push(date[1]);
				}
				if(date[0] == "November"){
					November.push(date[1]);
				}
				if(date[0] == "December"){
					December.push(date[1]);
				}	
			}
			
				//sort month arrays by day
				January.sort(function(a, b){return a-b});
				//document.write("January" + January);
				//document.write("<br>");
				
				Febuary.sort(function(a, b){return a-b});
				//document.write("Febuary" + Febuary);
				//document.write("<br>");
				
				March.sort(function(a, b){return a-b});
				//document.write("March" + March);
				//document.write("<br>");
				
				April.sort(function(a, b){return a-b});
				//document.write("April" + April);
				//document.write("<br>");
				
				May.sort(function(a, b){return a-b});
				//document.write("May" + May);
				//document.write("<br>");
				
				June.sort(function(a, b){return a-b});
				//document.write("June" + June);
				//document.write("<br>");
				
				July.sort(function(a, b){return a-b});
				//document.write("July" + July);
				//document.write("<br>");
				
				August.sort(function(a, b){return a-b});
				//document.write("August" + August);
				//document.write("<br>");
				
				September.sort(function(a, b){return a-b});
				//document.write("September" + September);
				//document.write("<br>");
				
				October.sort(function(a, b){return a-b});
				//document.write("October" + October);
				//document.write("<br>");
				
				November.sort(function(a, b){return a-b});
				//document.write("November" + November);
				//document.write("<br>");
				
				December.sort(function(a, b){return a-b});
				//document.write("December" + December);
				//document.write("<br>");
			
			//create month option in menu if the files exist
			cMonth = document.getElementById("month");
			
			if (January.length > 0){
				var optM = document.createElement('option');
				optM.value = "January";
				optM.innerHTML = "January";
				cMonth.appendChild(optM);
			}
			if (Febuary.length > 0){
				var optM = document.createElement('option');
				optM.value = "Febuary";
				optM.innerHTML = "Febuary";
				cMonth.appendChild(optM);
			}
			if (March.length > 0){
				var optM = document.createElement('option');
				optM.value = "March";
				optM.innerHTML = "March";
				cMonth.appendChild(optM);
			}
			if (April.length > 0){
				var optM = document.createElement('option');
				optM.value = "April";
				optM.innerHTML = "April";
				cMonth.appendChild(optM);
			}
			if (May.length > 0){
				var optM = document.createElement('option');
				optM.value = "May";
				optM.innerHTML = "May";
				cMonth.appendChild(optM);
			}
			if (June.length > 0){
				var optM = document.createElement('option');
				optM.value = "June";
				optM.innerHTML = "June";
				cMonth.appendChild(optM);
			}
			if (July.length > 0){
				var optM = document.createElement('option');
				optM.value = "July";
				optM.innerHTML = "July";
				cMonth.appendChild(optM);
			}
			if (August.length > 0){
				var optM = document.createElement('option');
				optM.value = "August";
				optM.innerHTML = "August";
				cMonth.appendChild(optM);
			}
			if (September.length > 0){
				var optM = document.createElement('option');
				optM.value = "September";
				optM.innerHTML = "September";
				cMonth.appendChild(optM);
			}
			if (October.length > 0){
				var optM = document.createElement('option');
				optM.value = "October";
				optM.innerHTML = "October";
				cMonth.appendChild(optM);
			}
			if (November.length > 0){
				var optM = document.createElement('option');
				optM.value = "November";
				optM.innerHTML = "November";
				cMonth.appendChild(optM);
			}
			if (December.length > 0){
				var optM = document.createElement('option');
				optM.value = "December";
				optM.innerHTML = "December";
				cMonth.appendChild(optM);
			}
			
			
			//create days in option menu
			function CreateDays(){
				document.getElementById("download").style.visibility = "hidden";
				
				select = document.getElementById("day");
				document.getElementById("day").options.length = 0;
				
				var opt = document.createElement('option');
				opt.value = "0";
				opt.innerHTML = "Select Day";
				select.appendChild(opt);
				
				
				
				switch (document.getElementById("month").value){
					
					
					case "January":
						for ( j = 0; j < January.length; j++){
							var opt = document.createElement('option');
							opt.value = January[j];
							opt.innerHTML = January[j];
							select.appendChild(opt);
						}
						
						break;
						
					case "Febuary":
						for ( j = 0; j < Febuary.length; j++){
							var opt = document.createElement('option');
							opt.value = Febuary[j];
							opt.innerHTML = Febuary[j];
							select.appendChild(opt);
						}
						break;
						
					case "March":
						for ( j = 0; j < March.length; j++){
							var opt = document.createElement('option');
							opt.value = March[j];
							opt.innerHTML = March[j];
							select.appendChild(opt);
						}
						break;	
						
					case "April":
						for ( j = 0; j < April.length; j++){
							var opt = document.createElement('option');
							opt.value = April[j];
							opt.innerHTML = April[j];
							select.appendChild(opt);
						}
						break;
						
					case "May":
						for ( j = 0; j < May.length; j++){
							var opt = document.createElement('option');
							opt.value = May[j];
							opt.innerHTML = May[j];
							select.appendChild(opt);
						}
						break;
						
					case "June":
						for ( j = 0; j < June.length; j++){
							var opt = document.createElement('option');
							opt.value = June[j];
							opt.innerHTML = June[j];
							select.appendChild(opt);
						}
						break;
						
					case "July":
						for ( j = 0; j < July.length; j++){
							var opt = document.createElement('option');
							opt.value = July[j];
							opt.innerHTML = July[j];
							select.appendChild(opt);
						}
						break;
						
					case "August":
						for ( j = 0; j < August.length; j++){
							var opt = document.createElement('option');
							opt.value = August[j];
							opt.innerHTML = August[j];
							select.appendChild(opt);
						}
						break;
						
					case "September":
						for ( j = 0; j < September.length; j++){
							var opt = document.createElement('option');
							opt.value = September[j];
							opt.innerHTML = September[j];
							select.appendChild(opt);
						}
						break;
						
					case "October":
						for ( j = 0; j < October.length; j++){
							var opt = document.createElement('option');
							opt.value = October[j];
							opt.innerHTML = October[j];
							select.appendChild(opt);
						}
						break;
						
					case "November":
						for ( j = 0; j < November.length; j++){
							var opt = document.createElement('option');
							opt.value = November[j];
							opt.innerHTML = November[j];
							select.appendChild(opt);
						}
						break;
						
					case "December":
						for ( j = 0; j < December.length; j++){
							var opt = document.createElement('option');
							opt.value = December[j];
							opt.innerHTML = December[j];
							select.appendChild(opt);
						}
						break;	
				}
			}
			
			//unhide and change href of download link
			function CreateDownload(){
				var selD = document.getElementById("day");
				var selM = document.getElementById("month");
				var file = ("Files\\" + selM.value +"-"+selD.value+ ".txt");
				down = document.getElementById("download");
				down.href = (file);
				down.style.visibility = "visible";
				//down.href = (file);
				//var a = document.createElement('a');
				//var linkText = document.createTextNode("Download");
				//a.appendChild(linkText);
				//a.title = "Download";
				
				
				//a.href = (file);
				//down.appendChild(a);
				//document.body.appendChild(a);
				
			}
			
			//function GetFile(){
				//var selD = document.getElementById("day");
				//var selM = document.getElementById("month");
				//var file = ("\"Files\\" + selM.value +"-"+selD.value+ ".txt\"");
				//document.write(file);
				//window.location =(file);
				
			//}
			//});
