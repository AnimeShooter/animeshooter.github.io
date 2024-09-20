setTimeout(function(){
	if(document.getElementById('google_esf') == null)
	{
		console.log("FeelsBadMan")
		var img = document.getElementById('img-pepe');
		img.src = "/img/pepeAngry.png";
		img.style = "display:block;";
		var adBoxes = document.getElementsByClassName('FancyAdBox');
		for(var i = 0; i < adBoxes.length; i++)
		{
			adBoxes[i].innerHTML = '<a class="box-title">Please Disable AdBlocker</a><p>Please consider disabeling your Ad-Blocker to support this content, we don\'t show much ad\'s anyway</p>';
		}
		
	}else{
		console.log("FeelsGoodMan")
	};
}, 1100);
