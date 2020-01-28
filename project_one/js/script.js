$(function(){
	$('#btn_animation').click(function(){
		e1 = $('.btn_1');
        e1.addClass('animate');
		    button_audio1.play();
        e1.one('',
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
        e2.one('',
        function () {
            e2.removeClass('animate');
        });
  });
});

function playbutton1(){
  var button_audio1 = document.getElementById("button_audio1");
  button_audio1.play();
}

function playbutton2(){
  var button_audio2 = document.getElementById("button_audio2");
  button_audio2.play();
}



//-----------------------------------------------------------------


$(function(){
  $('#text_box_button').click(function(){
    i1 = $('#intro_1');
    i2 = $('#intro_2');   
        i1.addClass('display_none_text');
        i2.addClass('display_none_text');
    i3 = $('#intro_3');
    i4 = $('#intro_4'); 
        i3.removeClass('display_none_text')
        i4.removeClass('display_none_text')
        i3.addClass('line-1 anim-typewriter1')
        i4.addClass('line-1 anim-typewriter2')

  });
});
