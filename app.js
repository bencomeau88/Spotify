$(document).ready(function(){
	var $weather = $('.weather_question')
	var $breakup = $('.breakup_question')
	var $breakupBtn = $('.question button')
	$breakupBtn.click(function(){
		var clickval = $(this).val();
		console.log(clickval);
		$weather.show();
		$breakup.hide();
	})
	$weather.click(function(){
		var clickval = $(this).val();
		console.log(clickval);
		$('.song_list').show();
		$weather.hide();
	})



})