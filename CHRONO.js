jQuery(function($){
	var fformation = new Date(2021,2,22,17,30,0);
	var Days = $('#Days');
	var Hours = $('#Hours');
	var Minutes = $('#Minutes');
	var Secondes = $('#Secondes');
	chrono();
    function chrono()
   {
		var ajour = new Date();
		var s = (fformation.getTime() - ajour.getTime())/1000;
		var d = Math.floor(s/86400);
		Days.html('<strong>'+d+'</strong>');
		s -= d*86400;
		var h = Math.floor(s/3600);
		Hours.html('<strong>'+h+'</strong>');
		s -= h*3600;
		var m = Math.floor(s/60);
		Minutes.html('<strong>'+m+'</strong>');
		s -= m*60;
		var s = Math.floor(s);
		Secondes.html('<strong>'+s+'</strong>');
		setTimeout(chrono,1000);
	}
});