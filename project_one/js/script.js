function playbutton1(){
  var button_audio1 = document.getElementById("button_audio1");
  button_audio1.play();
}

function playbutton2(){
  var button_audio2 = document.getElementById("button_audio2");
  button_audio2.play();
}



//-----------------------------------------------------------------
//text box click counter
var clicks = 0;

//Left choice counter
let x = 0;

//Right choice counter
let y = 0;

let a = 0;
let b = 0;

let c = 0;
let d = 0;

let e = 0;
let f = 0;

let g = 0;
let h = 0;


setTimeout(function(){
  tbb = $('#text_box_button');  
  tbb.addClass('pointer'); 
  tbb.addClass('border_clickable');      
}, 100);
//4600


$(function()
{
  $('#text_box_button').click(function() 
  {
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
        }, 100);
//5300
        i3.removeClass('display_none_text');
        i4.removeClass('display_none_text');
        i5.removeClass('display_none_text');

        i3.addClass('line-1 anim-typewriter3');
        i4.addClass('line-1 anim-typewriter4');
        i5.addClass('line-1 anim-typewriter5');
      } 

      else if(clicks == 1){
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
        }, 100);
//3600
        i6.removeClass('display_none_text');
        i7.removeClass('display_none_text');
        i6.addClass('line-1 anim-typewriter6');
        i7.addClass('line-1 anim-typewriter7');
      }

      else if(clicks == 2){
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');
        i6.addClass('display_none_text');
        i7.addClass('display_none_text');
        $( ".text_box_placement" ).fadeOut( 2000, function() {
        });
        // Animation complete.        

        //scroll to scene 3        
        setTimeout(function(){                
          $('html,body').animate({
          scrollTop: $(".scene_3").offset().top},
          2000);
        }, 300);

        //pop in text box
        setTimeout(function(){
          tbb.removeClass('pointer'); 
          tbb.removeClass('border_clickable');               
          $( ".text_box_placement" ).fadeIn( 200, function() {
          // Animation complete.
          }); 
        }, 100);
//2300
        setTimeout(function(){                
          one_1_t = $('#1_1_text');
          one_2_t = $('#1_2_text');
          one_3_t = $('#1_3_text');
          one_4_t = $('#1_4_text');
          tbb.removeClass('pointer'); 
          tbb.removeClass('border_clickable');

          one_1_t.removeClass('display_none_text');
          one_2_t.removeClass('display_none_text');
          one_3_t.removeClass('display_none_text');
          one_4_t.removeClass('display_none_text');


          one_1_t.addClass('line-1 anim-typewriter_one_1_t');
          one_2_t.addClass('line-1 anim-typewriter_one_2_t');
          one_3_t.addClass('line-1 anim-typewriter_one_3_t');
          one_4_t.addClass('line-1 anim-typewriter_one_4_t');

          setTimeout(function(){
            tbb = $('#text_box_button');  
            tbb.addClass('pointer'); 
            tbb.addClass('border_clickable');         
          }, 100);
//5300
        }, 2000);             
      }

        else if(clicks == 3)
        {

          //Variable Defining          
          one_5_t = $('#1_5_text');
          one_6_t = $('#1_6_text');
          one_7_t = $('#1_7_text');

          //Unclick textbox
          tbb.removeClass('pointer'); 
          tbb.removeClass('border_clickable');

          //Make text displayable
          one_5_t.removeClass('display_none_text');
          one_6_t.removeClass('display_none_text');
          one_7_t.removeClass('display_none_text');

          //Add class
          one_1_t.addClass('display_none_text');
          one_2_t.addClass('display_none_text');
          one_3_t.addClass('display_none_text');
          one_4_t.addClass('display_none_text');

          one_5_t.addClass('line-1 anim-typewriter_one_5_t');
          one_6_t.addClass('line-1 anim-typewriter_one_6_t');
          one_7_t.addClass('line-1 anim-typewriter_one_7_t');

          //Make text box choice
          setTimeout(function()
          {
            tbb = $('#text_box_button');  
            tbb.addClass('pointer'); 
            tbb.addClass('border_choice');         
          }, 5300);

          setTimeout(function()
          {
            $( ".btn_1_placement" ).fadeIn( 200, function() {
            // Animation complete.
            });
            $( ".btn_2_placement" ).fadeIn( 200, function() {
            // Animation complete.
            });            
          }, 5300);

        else if(clicks == 3){
        one_1_t = $('#1_1_text');
        one_2_t = $('#1_2_text');
        one_3_t = $('#1_3_text');
        one_4_t = $('#1_4_text');        
            tbb.removeClass('pointer'); 
            tbb.removeClass('border_clickable');

            one_1_t.removeClass('display_none_text');
            one_2_t.removeClass('display_none_text');
            one_3_t.removeClass('display_none_text');
            one_4_t.removeClass('display_none_text');

            one_1_t.addClass('line-1 anim-typewriter3');
            one_2_t.addClass('line-1 anim-typewriter4');
            one_3_t.addClass('line-1 anim-typewriter5');
            one_4_t.addClass('line-1 anim-typewriter5');                     
            
        } 

          $(function()
          {
            $('#btn_animation').click(function(){
              ++x;
              ++a;              
              e1 = $('.btn_1');
              e1.addClass('animate');
              button_audio1.play();

              //Unclick textbox
              tbb.removeClass('pointer'); 
              tbb.removeClass('border_clickable');
              
              setTimeout(function()
              {
                e1.removeClass('animate');        
              }, 500);

              setTimeout(function()
              {
                $( ".btn_1_placement" ).fadeOut( 200, function() {
                // Animation complete.
                });
                $( ".btn_2_placement" ).fadeOut( 200, function() {
                // Animation complete.
                });            
              }, 500);                  
            });
          });

          $(function()
          {
            $('#btn_animation2').click(function()
            {
              ++y;
              ++b;
              e2 = $('.btn_2');
              e2.addClass('animate');
              button_audio2.play();
              setTimeout(function()
              {
                e2.removeClass('animate');        
              }, 500);
              setTimeout(function()
              {
                $( ".btn_1_placement" ).fadeOut( 200, function() {
                // Animation complete.
                });
                $( ".btn_2_placement" ).fadeOut( 200, function() {
                // Animation complete.
                });            
              }, 500);              
            });
          });
        }
      ++clicks;
  });
});


$(function()
{

});







