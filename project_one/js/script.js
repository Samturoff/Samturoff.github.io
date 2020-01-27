$(function(){
	$('#btn_animation').click(function(){
		e1 = $('.btn_1');
        e1.addClass('animate');
		    button_audio1.play();
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function () {
            e1.removeClass('animate');
        });
	});
});

$(function(){
  $('#btn_animation2').click(function(){
    e2 = $('.btn_2');
        e2.addClass('animate');
        button_audio2.play();
        e2.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function () {
            e2.removeClass('animate');
        });
  });
});

function playbutton1(){
  var button_audio1 = document.getElementById("button_audio1");
  button_audio1.play();
}

function plabutton2(){
  var button_audio2 = document.getElementById("button_audio2");
  button_audio2.play();
}



//-----------------------------------------------------------------
$(function introText(){



