function modify(data){
boxes=document.getElementsByClassName('boxes')[0]
var str='';
var count=0;
data.forEach((obj)=>{
count++;
if(count==1){
str+=`
<div class='boxrow'>`
}
str+=`
<div class="box1">
		<div class="head">
			<img src="images/mainlogo.png" alt="">
			<p>${obj.Matchname}</p>
		</div>
		<div class="time"> Time : ${obj.Time}</div>
		<div class="body">
			<div class="col">
				<div class="row"><p>Win Price</p><b>${obj.Win}</b></div>
				<div class="row"><p>Type</p><b>${obj.type}</b></div>
			</div>
			<div class="col">
				<div class="row"><p>Per Kill</p><b>${obj.Perkill}</b></div>
				<div class="row"><p>Version</p><b>${obj.version}</b></div>
			</div>
			<div class="col">
				<div class="row"><p>Entry Fee</p><b>${obj.entryfee}</b></div>
				<div class="row"><p>Map</p><b>Erangel</b></div>
			</div>
		</div>
	</div>
`
if(count==3){
	str+=`</div>`
	count=0;
}
})
boxes.innerHTML+=str;
}

var xml= new XMLHttpRequest()
xml.open('GET','api',true)
xml.onload=function(){
	if(xml.status==200)
	 modify(JSON.parse(this.responseText))
console.log(JSON.parse(this.responseText))
}
xml.send()