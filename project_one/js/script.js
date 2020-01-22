$(function(){
	$('#btn_animation').click(function(){
		e1 = $('.btn_1');
        e1.addClass('animate');
		var button_audio = document.getElementById("button_audio");
		button_audio.play();
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            e1.removeClass('animate');
        });
	});
});

  function play(){
       var button_audio = document.getElementById("button_audio");
       button_audio.play();
                 }