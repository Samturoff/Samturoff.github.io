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
var clicks = 0;

setTimeout(function(){
  tbb = $('#text_box_button');  
  tbb.addClass('pointer'); 
  tbb.addClass('border_clickable');      
}, 4700);

$(function(){
  $('#text_box_button').click(function() {
      if (clicks == 0){
        tbb = $('#text_box_button');          
        i1 = $('#intro_1');
        i2 = $('#intro_2');
            tbb.removeClass('pointer'); 
            tbb.removeClass('border_clickable');                    
            i1.addClass('display_none_text');
            i2.addClass('display_none_text');
        i3 = $('#intro_3');
        i4 = $('#intro_4');
        i5 = $('#intro_5'); 

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 5000);

        i3.removeClass('display_none_text');
        i4.removeClass('display_none_text');
        i5.removeClass('display_none_text');

        i3.addClass('line-1 anim-typewriter3');
        i4.addClass('line-1 anim-typewriter4');
        i5.addClass('line-1 anim-typewriter5');
      } else if(clicks == 1){
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        i3.addClass('display_none_text');
        i4.addClass('display_none_text');
        i5.addClass('display_none_text');
        i6 = $('#intro_6');
        i7 = $('#intro_7');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 3000);

        i6.removeClass('display_none_text');
        i7.removeClass('display_none_text');
        i6.addClass('line-1 anim-typewriter6');
        i7.addClass('line-1 anim-typewriter7');
      }
      ++clicks;
  });

});


