var res,show,is_digit,is_letter;

function show_result(){
	show=true;
	func1();
	if(res=="" && show)
		res="Not Found";
	else if(res!="" && show)
		res=process();
	return res;
}

function process(){
	var i=0;
	var x,y;
	x="";
	while(i<res.length){
		y="";
		while(res[i]!='<'){
			y+=res[i];
			i++;
		}
		y=capitalize(y);
		x+=y+"<br/>";
		i+=5;
	}
	return x;
}

function capitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
function func1(){
	
	var str;
	str=document.getElementById("search").value;
	str=str.toLowerCase();
	res="";
	if(str[0]=='+' || str[0]=='-'){
		show=false;
		alert("Invalid Format");
		return;
	}
	if(str.length>=2){
		
		isnum(str);
		if(is_digit && !is_letter){
			
			if(str.length<=11){
				
				var i,out=[];
				out=id_phone(str);
				for(i=0;i<out.length;i++){
					res+=out[i].name+" "+out[i].id+" "+out[i].phn+" "+out[i].dis+"<br/>";
				}
			}
			else{
				show=false;
				alert("Invalid Input");
				return;
			}
		}
		else if(is_letter && !is_digit){

			if(isbg(str)){
				
				var i,out=[];
				out=store();
				for(i=0;i<out.length;i++){
					if(str==out[i].bg){
						res+=out[i].name+" "+out[i].phn+" "+out[i].dis+"<br/>";
					}
				}
			}
			else{
				
				var i,out=[];
				out=find_name_dist(str);
				for(i=0;i<out.length;i++){
					res+=out[i].name+" "+out[i].id+" "+out[i].phn+" "+out[i].dis+"<br/>";
				}
			}
		}
		else{
			show=false;
			alert("Invalid Input");
			return;
		}
	}
	else{
		show=false;
		alert("Please Enter At Least 2 Characters");
	}
}

function is_dist(str){
	var i;
	for(i=0;i<str.length;i++){
		if(str[i]==' ')
			return false;
	}
	return true;
}

function isnum(str){
	var i;
	is_digit=false;
	is_letter=false;
	for(i=0;i<str.length;i++){
		if(str[i]>='0' && str[i]<='9'){
			is_digit=true;
		}
		else if(str[i]>='a' && str[i]<='z'){
			is_letter=true;
		}
	}
}

function isbg(str){
	var n=str.length-1;
	if(str[n]=='+' || str[n]=='-')
		return true;
	return false;
}

function id_phone(ss){
	
	var num,i,j,k,l,students=[],out=[];
	students=store();
	for(i=0;i<students.length;i++){
		
		if(students[i].flag)
			continue;
		
		for(j=0;j+ss.length-1<7;j++){
			num="";
			k=0;
			l=j;
			while(k<ss.length){
				num+=students[i].id[l];
				k++;
				l++;
			}
			if(num==ss){
				students[i].flag=true;
				out.push(students[i]);
				break;
			}
		}
	}
	
	for(i=0;i<students.length;i++){
		
		if(students[i].flag)
			continue;
		
		for(j=0;j+ss.length-1<11;j++){
			num="";
			k=0;
			l=j;
			while(k<ss.length){
				num+=students[i].phn[l];
				k++;
				l++;
			}
			if(num==ss){
				students[i].flag=true;
				out.push(students[i]);
				break;
			}
		}
	}
	return out;
}

function find_name_dist(ss){
	
	var num,i,j,k,l,students=[],out=[];
	students=store();
	for(i=0;i<students.length;i++){
		
		if(students[i].flag)
			continue;
		
		for(j=0;j+ss.length-1<students[i].name.length;j++){
			num="";
			k=0;
			l=j;
			while(k<ss.length){
				num+=students[i].name[l];
				k++;
				l++;
			}
			if(num==ss){
				out.push(students[i]);
				break;
			}
		}
	}
	for(i=0;i<students.length;i++){
		
		if(students[i].flag)
			continue;
		
		for(j=0;j+ss.length-1<students[i].dis.length;j++){
			num="";
			k=0;
			l=j;
			while(k<ss.length){
				num+=students[i].dis[l];
				k++;
				l++;
			}
			if(num==ss){
				out.push(students[i]);
				break;
			}
		}
	}
	return out;
}

function store(){
	var i,stdnt=[];
	stdnt.push({name:"MD. Khairul Basar",id:"1302030",dis:"Natore",flag:false,bg:"n/a",phn:"01760446942"});
	stdnt.push({name:"Ratna Akter Rony",id:"1302032",dis:"Gaibandha",flag:false,bg:"n/a",phn:"01756505517"});
	stdnt.push({name:"Jyotirmay Pulok",id:"1302029",dis:"Dinajpur",flag:false,bg:"B+",phn:"01751344601"});
	stdnt.push({name:"Tasnim Tabassum",id:"1402020",dis:"Rangpur",flag:false,bg:"B+",phn:"01713647922"});
	stdnt.push({name:"MD. Imran Hossain",id:"1302015",dis:"Jessore",flag:false,bg:"B+",phn:"01754443153"});
	stdnt.push({name:"MD. Al Amin",id:"1402039",dis:"Joypurhat",flag:false,bg:"B+",phn:"01738088967"});
	stdnt.push({name:"Imam Mahadi",id:"1302049",dis:"Dinajpur",flag:false,bg:"B+",phn:"01738088967"});
	stdnt.push({name:"MD. Ismail",id:"1402035",dis:"Chapai Nawabganj",flag:false,bg:"B+",phn:"01743557172"});
	stdnt.push({name:"Abdullah Al Mahmud",id:"1402015",dis:"Kurigram",flag:false,bg:"O+",phn:"01791810207"});
	stdnt.push({name:"Bhagyobandhu Roy",id:"1402031",dis:"Nilphamari",flag:false,bg:"O+",phn:"01754873986"});
	stdnt.push({name:"MD. Abdullah Al Noman",id:"1402043",dis:"Bogra",flag:false,bg:"B+",phn:"01738148344"});
	stdnt.push({name:"Zunnun Rahman",id:"1402063",dis:"Naogaon",flag:false,bg:"B+",phn:"01765123122"});
	stdnt.push({name:"MEHADI HASAN SHUVO",id:"1402045",dis:"THAKURGAON",flag:false,bg:"B+",phn:"01774415361"});
	stdnt.push({name:"rifat hasan rinky",id:"1302035",dis:"dinajpur",flag:false,bg:"O+",phn:"01932747906"});
	stdnt.push({name:"Iqbal Mahmud",id:"1402048",dis:"Rajshahi",flag:false,bg:"O+",phn:"01710656794"});
	stdnt.push({name:"MD. SHARIFUL ISLAM",id:"1302042",dis:"PANCHAGARH",flag:false,bg:"n/a",phn:"0178510023"});
	stdnt.push({name:"Abu Hasan",id:"1402074",dis:"Jessore",flag:false,bg:"A+",phn:"01742835323"});
	stdnt.push({name:"khaled hasan prince",id:"1402032",dis:"rangpur",flag:false,bg:"A+",phn:"01773019511"});
	stdnt.push({name:"Sharmin Akter",id:"1302047",dis:"Dinajpur",flag:false,bg:"A+",phn:"01722413982"});
	stdnt.push({name:"Nuzhat moumita",id:"1402038",dis:"Rangpur",flag:false,bg:"O+",phn:"01773079743"});
	stdnt.push({name:"TAOHIDA ISLAM",id:"1302033",dis:"Nilphamari",flag:false,bg:"n/a",phn:"01929316326"});
	stdnt.push({name:"Kamrun Nahar",id:"1402033",dis:"Thakurgaon",flag:false,bg:"A+",phn:"01748858355"});
	stdnt.push({name:"nafisa tasnim prome",id:"1402070",dis:"Rangpur",flag:false,bg:"B+",phn:"01792880561"});
	stdnt.push({name:"MD. ARSHAD KHAN",id:"1402012",dis:"TANGAIL",flag:false,bg:"B+",phn:"01680588378"});
	stdnt.push({name:"MD. Sajib Chowdhury",id:"1402071",dis:"Dinajpur",flag:false,bg:"AB-",phn:"01944368116"});
	stdnt.push({name:"MD. Sabbir Hossain",id:"1302018",dis:"Dinajpur",flag:false,bg:"AB+",phn:"01775640944"});
	stdnt.push({name:"Bipasha Sarkar",id:"1402023",dis:"Dinajpur",flag:false,bg:"O+",phn:"01761712591"});
	stdnt.push({name:"MD. AL AMIN HOSSAIN",id:"1402024",dis:"Rangpur",flag:false,bg:"O+",phn:"01755134480"});
	stdnt.push({name:"MD. Nazmul islam",id:"1402066",dis:"Rangpur",flag:false,bg:"B+",phn:"01736586106"});
	stdnt.push({name:"MD. Raihanul ferdous",id:"1402036",dis:"bogra",flag:false,bg:"O+",phn:"01673101946"});
	stdnt.push({name:"MD. Abdullah Al Mamun",id:"1402040",dis:"Rangpur",flag:false,bg:"B+",phn:"01755339741"});
	stdnt.push({name:"SURJO NARAYAN ROY",id:"1402047",dis:"NILFAMARI",flag:false,bg:"n/a",phn:"01738770450"});
	stdnt.push({name:"sadi mohammud syfullah",id:"1402008",dis:"chuadanga",flag:false,bg:"AB+",phn:"01738357019"});
	stdnt.push({name:"Eshita Mitra",id:"1402061",dis:"Rajbari",flag:false,bg:"B+",phn:"01704528007"});
	stdnt.push({name:"rezwanur rahman",id:"1402041",dis:"dinajpur",flag:false,bg:"A+",phn:"01521440572"});
	stdnt.push({name:"Mst. Farjana Alam",id:"1302006",dis:"bogra",flag:false,bg:"B+",phn:"01768831617"});
	stdnt.push({name:"MD. Galib bin alam",id:"1402051",dis:"Naogaon",flag:false,bg:"A+",phn:"0177821149"});
	stdnt.push({name:"Shyama prosad mollick",id:"1402049",dis:"jessore",flag:false,bg:"O+",phn:"01753027187"});
	stdnt.push({name:"Maminul Haque",id:"1402059",dis:"Thakurgaon",flag:false,bg:"B+",phn:"01737937186"});
	stdnt.push({name:"Md. Najmul Hossain",id:"1402065",dis:"Lalmonirhat",flag:false,bg:"A+",phn:"01761376058"});
	stdnt.push({name:"Md. shahidul islam",id:"1402050",dis:"dinajpur",flag:false,bg:"O+",phn:"01751004947"});
	stdnt.push({name:"Hasanuzzaman Hasan",id:"1402069",dis:"Mymensingh",flag:false,bg:"A+",phn:"01760697423"});
	stdnt.push({name:"Nur Ahmadullah",id:"1402029",dis:"kurigram",flag:false,bg:"O+",phn:"01740153311"});
	stdnt.push({name:"Moshiur Rahman Mohim",id:"1402042",dis:"Dhaka",flag:false,bg:"B+",phn:"01754686599"});
	stdnt.push({name:"Rabbiul Hasan Likhon",id:"1302043",dis:"Dhaka",flag:false,bg:"A+",phn:"01780506520"});
	
	stdnt.sort( function(a, b) {  return parseInt(a.id) - parseInt(b.id); });
	
	for(i=0;i<stdnt.length;i++){
		stdnt[i].name=stdnt[i].name.toLowerCase();
		stdnt[i].dis=stdnt[i].dis.toLowerCase();
		stdnt[i].bg=stdnt[i].bg.toLowerCase();
	}
	return stdnt;
}