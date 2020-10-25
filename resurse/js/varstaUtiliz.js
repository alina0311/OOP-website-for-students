window.addEventListener("load", function(){
	document.getElementById("afla").onclick = function(){
		var input = document.getElementById("datanasterii").value.split(/[\s, /#]+/);
		const count = new Date(input[2],input[1],input[0],0,0,0,0).getTime();
		const x = setInterval(function () {
			const now = new Date().getTime();
			console.log(now);
			var d = now - count;
			var years = Math.floor(d / (1000 * 60 * 60 * 24 * 365 ));
			d = d - years * 1000 * 60 * 60 * 24 * 365;
			var months = Math.floor(d / (1000 * 60 * 60 * 24 * 7 * 4));
			d = d - months * 1000 * 60 * 60 * 24 * 7 * 4;
			var days = Math.floor(d / (1000 * 60 * 60 * 24));
			d = d - days * 1000 * 60 * 60 * 24;
			var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((d % (1000 * 60)) / 1000);
			document.getElementById("years").innerHTML = years;
			document.getElementById("years").style.opacity = "1";
			document.getElementById("months").innerHTML = months;
			document.getElementById("months").style.opacity = "1";
			document.getElementById("days").innerHTML = days;
			document.getElementById("days").style.opacity = "1";
			document.getElementById("hours").innerHTML = hours;
			document.getElementById("hours").style.opacity = "1";
			document.getElementById("minutes").innerHTML = minutes;
			document.getElementById("minutes").style.opacity = "1";
			document.getElementById("seconds").innerHTML = seconds;
			document.getElementById("seconds").style.opacity = "1";

		}, 1000);
	}
})