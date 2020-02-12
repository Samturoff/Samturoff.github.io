function playbutton1(){
  var button_audio1 = document.getElementById("button_audio1");
  button_audio1.play();
}

function playbutton2(){
  var button_audio2 = document.getElementById("button_audio2");
  button_audio2.play();
}

function poem_choice_one(){
  return x;
}

function poem_choice_two(){
  return x;
}

function continueOne()
{
    clicks = 4;
    $('#text_box_button').click(function() 
    {
      one_25_t = $('#1_25_text');
      one_26_t = $('#1_26_text');
      one_27_t = $('#1_27_text');
      one_28_t = $('#1_28_text');
      one_28_1_1_t = $('#1_28_1_1_text');      
      one_28_1_t = $('#1_28_1_text');
      one_28_2_t = $('#1_28_2_text');
      one_29_t = $('#1_29_text');
      one_29_1_t = $('#1_29_1_text');      
      one_30_t = $('#1_30_text');
      one_30_1_t = $('#1_30_1_text');
      one_31_t = $('#1_31_text');
      one_31_1_t = $('#1_31_1_text');
      one_31_2_t = $('#1_31_2_text');

      one_32_t = $('#1_32_text');
      one_33_t = $('#1_33_text');  
      one_33_1_t = $('#1_33_1_text');  

      if (clicks == 5)
      {

        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_14_1_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 5300);
  //5300
        one_25_t.removeClass('display_none_text');
        one_26_t.removeClass('display_none_text');

        one_25_t.addClass('line-1 anim-typewriter_one_25_t');
        one_26_t.addClass('line-1 anim-typewriter_one_26_t');
      } 

      else if(clicks == 6)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        one_25_t.addClass('display_none_text');
        one_26_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //3600
        one_27_t.removeClass('display_none_text');
        one_27_t.addClass('line-1 anim-typewriter_one_27_t');        
      }

      else if(clicks == 7)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        one_27_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //3600

        one_28_t.removeClass('display_none_text');
        one_28_1_1_t.removeClass('display_none_text');
        one_28_t.addClass('line-1 anim-typewriter_one_28_t');        
        one_28_1_1_t.addClass('line-1 anim-typewriter_one_28_1_1_t');        
      }

      else if(clicks == 8)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        one_28_t.addClass('display_none_text');
        one_28_1_1_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //3600

        one_28_1_t.removeClass('display_none_text');
        one_28_2_t.removeClass('display_none_text');        
        one_28_1_t.addClass('line-1 anim-typewriter_one_28_1_t');
        one_28_2_t.addClass('line-1 anim-typewriter_one_28_2_t');        
      }

      else if(clicks == 9)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        one_28_1_t.addClass('display_none_text');
        one_28_2_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //3600

        one_29_t.removeClass('display_none_text');
        one_29_1_t.removeClass('display_none_text');
        one_29_t.addClass('line-1 anim-typewriter_one_29_t');
        one_29_1_t.addClass('line-1 anim-typewriter_one_29_1_t');

      }

      else if(clicks == 10)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        one_29_t.addClass('display_none_text');
        one_29_1_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //3600

        one_30_t.removeClass('display_none_text');
        one_30_1_t.removeClass('display_none_text');
        one_30_t.addClass('line-1 anim-typewriter_one_30_t');
        one_30_1_t.addClass('line-1 anim-typewriter_one_30_1_t');
      }

      else if(clicks == 11)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        one_30_t.addClass('display_none_text');
        one_30_1_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //3600

        one_31_t.removeClass('display_none_text');
        one_31_1_t.removeClass('display_none_text');
        one_31_2_t.removeClass('display_none_text');

        one_31_t.addClass('line-1 anim-typewriter_one_31_t');
        one_31_1_t.addClass('line-1 anim-typewriter_one_31_1_t');
        one_31_2_t.addClass('line-1 anim-typewriter_one_31_2_t');
      }

      else if(clicks == 12)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        one_31_t.addClass('display_none_text');
        one_31_1_t.addClass('display_none_text');
        one_31_2_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //3600

        one_32_t.removeClass('display_none_text');
        one_32_t.addClass('line-1 anim-typewriter_one_32_t');
      }

      else if(clicks == 13)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');        
        one_32_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
          continueSceneFour();                   
        }, 100);
        //3600

        one_33_t.removeClass('display_none_text');
        one_33_1_t.removeClass('display_none_text');
        one_33_t.addClass('line-1 anim-typewriter_one_33_t');        
        one_33_1_t.addClass('line-1 anim-typewriter_one_33_1_t');
      }

    });
};

function continueTwo(){
  clicks = 4;
  $('#text_box_button').click(function() 
  {   
      one_34_t = $('#1_34_text');
      one_35_t = $('#1_35_text');
      one_36_t = $('#1_36_text');
      one_37_t = $('#1_37_text');      
      one_38_t = $('#1_38_text');
      one_39_t = $('#1_39_text');
      one_40_t = $('#1_40_text');
      one_40_1_t = $('#1_40_1_text');
      one_41_t = $('#1_41_text');
      one_41_1_t = $('#1_41_1_text');      
      one_42_t = $('#1_42_text');
      one_43_t = $('#1_43_text');
      one_43_1_t = $('#1_43_1_text');

      if (clicks == 5)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_24_1_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //5300
        one_34_t.removeClass('display_none_text');

        one_34_t.addClass('line-1 anim-typewriter_one_34_t');
      }

      if (clicks == 6)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_34_t.addClass('display_none_text');

        setTimeout(function(){
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //5300
        one_35_t.removeClass('display_none_text');
        one_36_t.removeClass('display_none_text');
        one_35_t.addClass('line-1 anim-typewriter_one_35_t');
        one_36_t.addClass('line-1 anim-typewriter_one_36_t');
      }

      if (clicks == 7)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_35_t.addClass('display_none_text');
        one_36_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //5300
        one_37_t.removeClass('display_none_text');
        one_38_t.removeClass('display_none_text');
        one_39_t.removeClass('display_none_text');
        one_37_t.addClass('line-1 anim-typewriter_one_37_t');
        one_38_t.addClass('line-1 anim-typewriter_one_38_t');
        one_39_t.addClass('line-1 anim-typewriter_one_39_t');
      }

      if (clicks == 8)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_37_t.addClass('display_none_text');
        one_38_t.addClass('display_none_text');
        one_39_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //5300
        one_40_t.removeClass('display_none_text');
        one_40_1_t.removeClass('display_none_text');
        one_40_t.addClass('line-1 anim-typewriter_one_40_t');
        one_40_1_t.addClass('line-1 anim-typewriter_one_40_1_t');        
      }

      if (clicks == 9)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_40_t.addClass('display_none_text');
        one_40_1_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //5300
        one_41_t.removeClass('display_none_text');
        one_41_1_t.removeClass('display_none_text');
        one_41_t.addClass('line-1 anim-typewriter_one_41_t');
        one_41_1_t.addClass('line-1 anim-typewriter_one_41_1_t');

      }

      if (clicks == 10)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_41_t.addClass('display_none_text');
        one_41_1_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');         
        }, 100);
        //5300
        one_42_t.removeClass('display_none_text');
        one_42_t.addClass('line-1 anim-typewriter_one_42_t');
      }    

      if (clicks == 11)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_42_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
          continueSceneFour();          
        }, 100);
        //5300
        one_43_t.removeClass('display_none_text');
        one_43_1_t.removeClass('display_none_text');
        one_43_t.addClass('line-1 anim-typewriter_one_43_t');
        one_43_1_t.addClass('line-1 anim-typewriter_one_43_1_t');

      }         
  });
};

function continueSceneFour(){
      let clicks = 21;
      one_24_t = $('#1_24_text');
      one_24_1_t = $('#1_24_1_text');
      one_33_t = $('#1_33_text');
      one_33_1_t = $('#1_33_1_text');
      one_43_t = $('#1_43_text');
      one_43_1_t = $('#1_43_1_text');
      one_44_t = $('#1_44_text');
      one_45_t = $('#1_45_text');
      one_46_t = $('#1_46_text');
      four_1_t = $('#4_1_text');
      four_2_t = $('#4_2_text');
      four_3_t = $('#4_3_text');
      four_4_t = $('#4_4_text');
      four_5_t = $('#4_5_text');
      four_6_t = $('#4_6_text');
      four_7_t = $('#4_7_text');
      four_8_t = $('#4_8_text');
      four_9_t = $('#4_9_text');
      four_10_t = $('#4_10_text');
      four_11_t = $('#4_11_text');
      four_12_t = $('#4_12_text');
      four_13_t = $('#4_13_text');
      four_14_t = $('#4_14_text');
      four_15_t = $('#4_15_text');
      four_16_t = $('#4_16_text');
      four_17_t = $('#4_17_text');
      four_18_t = $('#4_18_text');
      four_19_t = $('#4_19_text');
      four_20_t = $('#4_20_text');
      four_21_t = $('#4_21_text');
      four_22_t = $('#4_22_text');
      four_23_t = $('#4_23_text');
      four_24_t = $('#4_24_text');
      four_25_t = $('#4_25_text');
      four_26_t = $('#4_26_text');
      five_1_t = $('#5_1_text');

      if (clicks == 21)
      {
        one_24_t.addClass('display_none_text');
        one_24_1_t.addClass('display_none_text');
        one_33_t.addClass('display_none_text');
        one_33_1_t.addClass('display_none_text');           
        one_43_t.addClass('display_none_text');
        one_43_1_t.addClass('display_none_text'); 
        setTimeout(function(){                
          $('html,body').animate({
          scrollTop: $(".scene_4").offset().top},
          2000);
        }, 300);

        //pop in text box
        setTimeout(function()
        {
          tbb.removeClass('pointer'); 
          tbb.removeClass('border_clickable');               
          $( ".text_box_placement" ).fadeIn( 200, function() {
          // Animation complete.
          }); 
        }, 100);
        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);        
        one_44_t.removeClass('display_none_text');
        one_45_t.removeClass('display_none_text');
        one_46_t.removeClass('display_none_text');

        one_44_t.addClass('line-1 anim-typewriter_one_44_t');
        one_45_t.addClass('line-1 anim-typewriter_one_45_t');
        one_46_t.addClass('line-1 anim-typewriter_one_46_t');
      }

  $('#text_box_button').click(function() 
  {      
      ++clicks;  
      if (clicks == 22)
      {

        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        one_44_t.addClass('display_none_text');
        one_45_t.addClass('display_none_text');
        one_46_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_1_t.removeClass('display_none_text');
        four_1_t.addClass('line-1 anim-typewriter_four_1_t');
      }

      if (clicks == 23)
      {

        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_1_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_2_t.removeClass('display_none_text');
        four_3_t.removeClass('display_none_text');
        four_2_t.addClass('line-1 anim-typewriter_four_2_t');
        four_3_t.addClass('line-1 anim-typewriter_four_3_t');
      } 

      if (clicks == 24)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_2_t.addClass('display_none_text');
        four_3_t.addClass('display_none_text');
        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_4_t.removeClass('display_none_text');
        four_5_t.removeClass('display_none_text');
        four_6_t.removeClass('display_none_text');

        four_4_t.addClass('line-1 anim-typewriter_four_4_t');
        four_5_t.addClass('line-1 anim-typewriter_four_5_t');
        four_6_t.addClass('line-1 anim-typewriter_four_6_t');
      }

      if (clicks == 25)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_4_t.addClass('display_none_text');
        four_5_t.addClass('display_none_text');
        four_6_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_7_t.removeClass('display_none_text');
        four_8_t.removeClass('display_none_text');
        four_9_t.removeClass('display_none_text');
        four_10_t.removeClass('display_none_text');

        four_7_t.addClass('line-1 anim-typewriter_four_7_t');
        four_8_t.addClass('line-1 anim-typewriter_four_8_t');
        four_9_t.addClass('line-1 anim-typewriter_four_9_t');
        four_10_t.addClass('line-1 anim-typewriter_four_10_t');
      }

      if (clicks == 26)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_7_t.addClass('display_none_text');
        four_8_t.addClass('display_none_text');
        four_9_t.addClass('display_none_text');
        four_10_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_11_t.removeClass('display_none_text');
        four_12_t.removeClass('display_none_text');

        four_11_t.addClass('line-1 anim-typewriter_four_11_t');
        four_12_t.addClass('line-1 anim-typewriter_four_12_t');
      }

      if (clicks == 27)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_11_t.addClass('display_none_text');
        four_12_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_13_t.removeClass('display_none_text');
        four_14_t.removeClass('display_none_text');

        four_13_t.addClass('line-1 anim-typewriter_four_13_t');
        four_14_t.addClass('line-1 anim-typewriter_four_14_t');
      }

      if (clicks == 28)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_13_t.addClass('display_none_text');
        four_14_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_15_t.removeClass('display_none_text');
        four_16_t.removeClass('display_none_text');
        four_17_t.removeClass('display_none_text');

        four_15_t.addClass('line-1 anim-typewriter_four_15_t');
        four_16_t.addClass('line-1 anim-typewriter_four_16_t');
        four_17_t.addClass('line-1 anim-typewriter_four_17_t');
      }

        if (clicks == 29)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_15_t.addClass('display_none_text');
        four_16_t.addClass('display_none_text');
        four_17_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_18_t.removeClass('display_none_text');
        four_19_t.removeClass('display_none_text');
        four_20_t.removeClass('display_none_text');
        four_21_t.removeClass('display_none_text');

        four_18_t.addClass('line-1 anim-typewriter_four_18_t');
        four_19_t.addClass('line-1 anim-typewriter_four_19_t');
        four_20_t.addClass('line-1 anim-typewriter_four_20_t');
        four_21_t.addClass('line-1 anim-typewriter_four_21_t');
      }

       if (clicks == 30)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_18_t.addClass('display_none_text');
        four_19_t.addClass('display_none_text');
        four_20_t.addClass('display_none_text');
        four_21_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_22_t.removeClass('display_none_text');
        four_23_t.removeClass('display_none_text');
        four_24_t.removeClass('display_none_text');

        four_22_t.addClass('line-1 anim-typewriter_four_22_t');
        four_23_t.addClass('line-1 anim-typewriter_four_23_t');
        four_24_t.addClass('line-1 anim-typewriter_four_24_t');
      }

       if (clicks == 31)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_22_t.addClass('display_none_text');
        four_23_t.addClass('display_none_text');
        four_24_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_clickable');
        }, 100);
        //5300
        four_25_t.removeClass('display_none_text');
        four_26_t.removeClass('display_none_text');

        four_25_t.addClass('line-1 anim-typewriter_four_25_t');
        four_26_t.addClass('line-1 anim-typewriter_four_26_t');
      }

      if (clicks == 32)
      {
        tbb.removeClass('pointer'); 
        tbb.removeClass('border_clickable');                    
        four_25_t.addClass('display_none_text');
        four_26_t.addClass('display_none_text');

        setTimeout(function()
        {
          tbb = $('#text_box_button');  
          tbb.addClass('pointer'); 
          tbb.addClass('border_choice');
        }, 100);
        //5300
        setTimeout(function(){                
          $('html,body').animate({
          scrollTop: $(".scene_5").offset().top},
          2000);
        }, 300);        
        five_1_t.removeClass('display_none_text');

        five_1_t.addClass('line-1 anim-typewriter_five_1_t');


        setTimeout(function()
        {
          btn_1_1 = $('#btn_1_1');
          btn_1_2 = $('#btn_1_2');

          $( ".btn_1_placement" ).fadeIn( 200, function() {
          // Animation complete.
          });
          btn_1_1.addClass('display_none_text');
          btn_1_1.hide();

          $( "#btn_2_1" ).fadeIn( 200, function() {
          // Animation complete.
          });           
          $( ".btn_2_placement" ).fadeIn( 200, function() {
          // Animation complete.
          });
          btn_1_2.addClass('display_none_text');
          btn_1_2.hide();          

          $( "#btn_2_2" ).fadeIn( 200, function() {
          // Animation complete.
          });                       
        }, 400);



          $('#btn_animation').click(function()
          {
            x = 3;
            poem_choice_two();
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

            switcheroo2();

          });


          $('#btn_animation2').click(function()
          {
            x = 4;
            poem_choice_two();
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
            switcheroo2();            
          });        
      }


  });
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

setTimeout(function()
{
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
          one_1_t = $('#1_1_text');
          one_2_t = $('#1_2_text');
          one_3_t = $('#1_3_text');
          one_4_t = $('#1_4_text');                                                  
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
            tbb.addClass('border_choice');         
          }, 5300);

          setTimeout(function()
          {
            $( ".btn_1_placement" ).fadeIn( 200, function() {
            // Animation complete.
            });
            $( "#btn_1_1" ).fadeIn( 200, function() {
            // Animation complete.
            });            
            $( ".btn_2_placement" ).fadeIn( 200, function() {
            // Animation complete.
            });
            $( "#btn_1_2" ).fadeIn( 200, function() {
            // Animation complete.
            });                      
          }, 5300);



            $('#btn_animation').click(function()
            {
              $("#btn_1_1").addClass('display_none_text');          
              $("#btn_1_2").addClass('display_none_text');          
              x = 1;
              poem_choice_one();
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

              switcheroo1();
            });


            $('#btn_animation2').click(function()
            {
              $("#btn_1_1").addClass('display_none_text');          
              $("#btn_1_2").addClass('display_none_text');                 
              x = 2;
              poem_choice_one();
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
              switcheroo1();            
            });
        }
        else if(clicks == 5)
        {
  
        }   
      ++clicks;
  });
});

function switcheroo1()
{
    switch(poem_choice_one()) 
  {
   case 1:
            //Variable Defining          
            one_8_t = $('#1_8_text');
            one_9_t = $('#1_9_text');
            one_10_t = $('#1_10_text');
            one_11_t = $('#1_11_text');
            one_12_t = $('#1_12_text');
            one_13_t = $('#1_13_text');
            one_14_t = $('#1_14_text');
            one_14_1_t = $('#1_14_1_text');
            
            //Unclick textbox
            tbb.removeClass('border_choice');
            tbb.addClass('border_song');

            //Make text displayable
            one_8_t.removeClass('display_none_text');
            one_9_t.removeClass('display_none_text');

            //Add class
            one_5_t.addClass('display_none_text');
            one_6_t.addClass('display_none_text');
            one_7_t.addClass('display_none_text');

            one_8_t.addClass('line-1 anim-typewriter_one_8_t');
            one_9_t.addClass('line-1 anim-typewriter_one_9_t');

            //Make text box choice
            setTimeout(function()
            {
              $(one_8_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_9_t).fadeOut( 400, function() {
              // Animation complete.
              });                        
            }, 4000);

            setTimeout(function()
            {
              one_10_t.removeClass('display_none_text');
              one_11_t.removeClass('display_none_text');

              //Add class
              one_8_t.addClass('display_none_text');
              one_9_t.addClass('display_none_text');

              one_10_t.addClass('line-1 anim-typewriter_one_10_t');
              one_11_t.addClass('line-1 anim-typewriter_one_11_t');
            }, 4500);

            setTimeout(function()
            {
              $(one_10_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_11_t).fadeOut( 400, function() {
              // Animation complete.
              });    
            }, 8000);

        setTimeout(function()
            {
              one_12_t.removeClass('display_none_text');
              one_13_t.removeClass('display_none_text');
              one_14_t.removeClass('display_none_text');

              //Add class
              one_10_t.addClass('display_none_text');
              one_11_t.addClass('display_none_text');

              one_12_t.addClass('line-1 anim-typewriter_one_12_t');
              one_13_t.addClass('line-1 anim-typewriter_one_13_t');
              one_14_t.addClass('line-1 anim-typewriter_one_14_t');                      
            }, 8600);

            setTimeout(function()
            {
              $(one_10_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_11_t).fadeOut( 400, function() {
              // Animation complete.
              });    
            }, 8000);

        setTimeout(function()
            {
              one_14_1_t.removeClass('display_none_text');
              one_14_1_t.addClass('line-1 anim-typewriter_one_12_t');                     
            }, 15500);

            setTimeout(function()
            {
              $(one_12_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_13_t).fadeOut( 400, function() {
              // Animation complete.
              }); 
              $(one_14_t).fadeOut( 400, function() {
              // Animation complete.
              });
            }, 15500);

            setTimeout(function()
                {
                  tbb.removeClass('border_song');                      
                  tbb.addClass('border_clickable');
                  tbb.addClass('pointer');
                  continueOne();
                }, 16000);            
           
    break;

    case 2:
            //Variable Defining          
            one_15_t = $('#1_15_text');
            one_16_t = $('#1_16_text');
            one_17_t = $('#1_17_text');
            one_18_t = $('#1_18_text');
            one_19_t = $('#1_19_text');
            one_20_t = $('#1_20_text');
            one_21_t = $('#1_21_text');
            one_22_t = $('#1_22_text');
            one_23_t = $('#1_23_text');
            one_24_t = $('#1_24_text');
            one_24_1_t = $('#1_24_1_text');

            //Unclick textbox
            tbb.removeClass('border_choice');
            tbb.addClass('border_song');

            //Make text displayable
            one_15_t.removeClass('display_none_text');
            one_16_t.removeClass('display_none_text');
            one_17_t.removeClass('display_none_text');

            //Add class
            one_5_t.addClass('display_none_text');
            one_6_t.addClass('display_none_text');
            one_7_t.addClass('display_none_text');

            one_15_t.addClass('line-1 anim-typewriter_one_15_t');
            one_16_t.addClass('line-1 anim-typewriter_one_16_t');
            one_17_t.addClass('line-1 anim-typewriter_one_17_t');

            //Make text box choice
            setTimeout(function()
            {
              $(one_15_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_16_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_17_t).fadeOut( 400, function() {
              // Animation complete.
              });                  
            }, 6500);


            setTimeout(function()
            {
              one_18_t.removeClass('display_none_text');
              one_19_t.removeClass('display_none_text');

              //Add class
              one_15_t.addClass('display_none_text');
              one_16_t.addClass('display_none_text');
              one_17_t.addClass('display_none_text');

              one_18_t.addClass('line-1 anim-typewriter_one_18_t');
              one_19_t.addClass('line-1 anim-typewriter_one_19_t');
            }, 7200);

            setTimeout(function()
            {
              $(one_18_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_19_t).fadeOut( 400, function() {
              // Animation complete.
              });    
            }, 11500);

            setTimeout(function()
            {
              one_20_t.removeClass('display_none_text');
              one_21_t.removeClass('display_none_text');

              //Add class
              one_15_t.addClass('display_none_text');
              one_16_t.addClass('display_none_text');
              one_17_t.addClass('display_none_text');

              one_20_t.addClass('line-1 anim-typewriter_one_20_t');
              one_21_t.addClass('line-1 anim-typewriter_one_21_t');
            }, 12000);

            setTimeout(function()
            {
              $(one_20_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_21_t).fadeOut( 400, function() {
              // Animation complete.
              });    
            }, 16500);

            setTimeout(function()
            {
              one_22_t.removeClass('display_none_text');
              one_23_t.removeClass('display_none_text');
              one_24_t.removeClass('display_none_text');

              //Add class
              one_20_t.addClass('display_none_text');
              one_21_t.addClass('display_none_text');

              one_22_t.addClass('line-1 anim-typewriter_one_22_t');
              one_23_t.addClass('line-1 anim-typewriter_one_23_t');
              one_24_t.addClass('line-1 anim-typewriter_one_24_t');
            }, 17200);

            setTimeout(function()
            {
              $(one_22_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_23_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_24_t).fadeOut( 400, function() {
              // Animation complete.              
              });    
            }, 24500);

            setTimeout(function()
            {
              one_22_t.removeClass('display_none_text');
              one_23_t.removeClass('display_none_text');
              one_24_t.removeClass('display_none_text');

              //Add class
              one_20_t.addClass('display_none_text');
              one_21_t.addClass('display_none_text');

              one_22_t.addClass('line-1 anim-typewriter_one_22_t');
              one_23_t.addClass('line-1 anim-typewriter_one_23_t');
              one_24_t.addClass('line-1 anim-typewriter_one_24_t');
            }, 17200);            

            setTimeout(function()
            {
              $(one_22_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_23_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_24_t).fadeOut( 400, function() {
              // Animation complete.              
              });    
            }, 24000);

            setTimeout(function()
            {
              one_24_1_t.removeClass('display_none_text');              
              one_24_1_t.addClass('line-1 anim-typewriter_one_24_1_t');              
            }, 24500); 

            setTimeout(function()
            {
              tbb.removeClass('border_song');                      
              tbb.addClass('border_clickable');
              tbb.addClass('pointer');
              continueTwo();              
            }, 25700);  
          
    break;
   default:
   // code to be executed if n is different from case 1 and 2
  };
}


function switcheroo2()
{
    switch(poem_choice_one()) 
  {
   case 3:
            //Variable Defining          
            one_8_t = $('#1_8_text');
            one_9_t = $('#1_9_text');
            one_10_t = $('#1_10_text');
            one_11_t = $('#1_11_text');
            one_12_t = $('#1_12_text');
            one_13_t = $('#1_13_text');
            one_14_t = $('#1_14_text');
            one_14_1_t = $('#1_14_1_text');
            
            //Unclick textbox
            tbb.removeClass('border_choice');
            tbb.addClass('border_song');

            //Make text displayable
            one_8_t.removeClass('display_none_text');
            one_9_t.removeClass('display_none_text');

            //Add class
            one_5_t.addClass('display_none_text');
            one_6_t.addClass('display_none_text');
            one_7_t.addClass('display_none_text');

            one_8_t.addClass('line-1 anim-typewriter_one_8_t');
            one_9_t.addClass('line-1 anim-typewriter_one_9_t');

            //Make text box choice
            setTimeout(function()
            {
              $(one_8_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_9_t).fadeOut( 400, function() {
              // Animation complete.
              });                        
            }, 4000);

            setTimeout(function()
            {
              one_10_t.removeClass('display_none_text');
              one_11_t.removeClass('display_none_text');

              //Add class
              one_8_t.addClass('display_none_text');
              one_9_t.addClass('display_none_text');

              one_10_t.addClass('line-1 anim-typewriter_one_10_t');
              one_11_t.addClass('line-1 anim-typewriter_one_11_t');
            }, 4500);

            setTimeout(function()
            {
              $(one_10_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_11_t).fadeOut( 400, function() {
              // Animation complete.
              });    
            }, 8000);

        setTimeout(function()
            {
              one_12_t.removeClass('display_none_text');
              one_13_t.removeClass('display_none_text');
              one_14_t.removeClass('display_none_text');

              //Add class
              one_10_t.addClass('display_none_text');
              one_11_t.addClass('display_none_text');

              one_12_t.addClass('line-1 anim-typewriter_one_12_t');
              one_13_t.addClass('line-1 anim-typewriter_one_13_t');
              one_14_t.addClass('line-1 anim-typewriter_one_14_t');                      
            }, 8600);

            setTimeout(function()
            {
              $(one_10_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_11_t).fadeOut( 400, function() {
              // Animation complete.
              });    
            }, 8000);

        setTimeout(function()
            {
              one_14_1_t.removeClass('display_none_text');
              one_14_1_t.addClass('line-1 anim-typewriter_one_12_t');                     
            }, 15500);

            setTimeout(function()
            {
              $(one_12_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_13_t).fadeOut( 400, function() {
              // Animation complete.
              }); 
              $(one_14_t).fadeOut( 400, function() {
              // Animation complete.
              });
            }, 15500);

            setTimeout(function()
                {
                  tbb.removeClass('border_song');                      
                  tbb.addClass('border_clickable');
                  tbb.addClass('pointer');
                  continueOne();
                }, 16000);            
           
    break;

    case 4:
            //Variable Defining          
            five_1_t = $('#5_1_text');
            five_2_t = $('#5_2_text');
            five_3_t = $('#5_3_text');
            five_4_t = $('#5_4_text');
            five_5_t = $('#5_5_text');
            five_6_t = $('#5_6_text');
            five_7_t = $('#5_7_text');
            five_8_t = $('#5_8_text');
            five_9_t = $('#5_9_text');
            five_10_t = $('#5_10_text');
            five_11_t = $('#5_11_text');
            five_12_t = $('#5_12_text');
            five_13_t = $('#5_13_text');
            five_14_t = $('#5_14_text');
            five_15_t = $('#5_15_text');
            five_16_t = $('#5_16_text');
            five_17_t = $('#5_17_text');
            five_18_t = $('#5_18_text');
            five_19_t = $('#5_19_text');
            five_20_t = $('#5_20_text');
            five_21_t = $('#5_21_text');
            five_22_t = $('#5_22_text');
            five_23_t = $('#5_23_text');
            five_24_t = $('#5_24_text');
            five_25_t = $('#5_25_text');
            five_26_t = $('#5_26_text');
            five_27_t = $('#5_27_text');
            five_28_t = $('#5_28_text');
            five_29_t = $('#5_29_text');
            five_30_t = $('#5_30_text');
            five_31_t = $('#5_31_text');
            five_32_t = $('#5_32_text');
            five_33_t = $('#5_33_text');
            five_34_t = $('#5_34_text');
            five_35_t = $('#5_35_text');

            six_1_t = $('#6_1_text');
            six_2_t = $('#6_2_text');
            six_3_t = $('#6_3_text');
            six_4_t = $('#6_4_text');
            six_5_t = $('#6_5_text');
            six_6_t = $('#6_6_text');
            six_7_t = $('#6_7_text');
            six_8_t = $('#6_8_text');
            six_9_t = $('#6_9_text');
            six_10_t = $('#6_10_text');
            six_11_t = $('#6_11_text');
            six_12_t = $('#6_12_text');
            six_13_t = $('#6_13_text');
            six_14_t = $('#6_14_text');
            six_15_t = $('#6_15_text');
            six_16_t = $('#6_16_text');
            six_17_t = $('#6_17_text');
            six_18_t = $('#6_18_text');
            six_19_t = $('#6_19_text');
            six_20_t = $('#6_20_text');
            six_21_t = $('#6_21_text');
            six_22_t = $('#6_22_text');
            six_23_t = $('#6_23_text');
            six_24_t = $('#6_24_text');
            six_25_t = $('#6_25_text');
            six_26_t = $('#6_26_text');
            six_27_t = $('#6_27_text');
            six_28_t = $('#6_28_text');
            six_29_t = $('#6_29_text');
            six_30_t = $('#6_30_text');
            six_31_t = $('#6_31_text');
            six_32_t = $('#6_32_text');
            six_33_t = $('#6_33_text');

            seven_1_t = $('#7_1_text');
            seven_2_t = $('#7_2_text');
            seven_3_t = $('#7_3_text');
            seven_4_t = $('#7_4_text');
            seven_5_t = $('#7_5_text');
            seven_6_t = $('#7_6_text');
            seven_7_t = $('#7_7_text');
            seven_8_t = $('#7_8_text');
            seven_9_t = $('#7_9_text');
            seven_10_t = $('#7_10_text');
            seven_11_t = $('#7_11_text');
            seven_12_t = $('#7_12_text');
            seven_13_t = $('#7_13_text');
            seven_14_t = $('#7_14_text');
            seven_15_t = $('#7_15_text');
            seven_16_t = $('#7_16_text');
            seven_17_t = $('#7_17_text');
            seven_18_t = $('#7_18_text');
            seven_19_t = $('#7_19_text');
            seven_20_t = $('#7_20_text');
            seven_21_t = $('#7_21_text');
            seven_22_t = $('#7_22_text');
            seven_23_t = $('#7_23_text');
            seven_24_t = $('#7_24_text');
            seven_25_t = $('#7_25_text');
            seven_26_t = $('#7_26_text');
            seven_27_t = $('#7_27_text');
            seven_28_t = $('#7_28_text');
            seven_29_t = $('#7_29_text');
            seven_30_t = $('#7_30_text');
            seven_31_t = $('#7_31_text');
            seven_32_t = $('#7_32_text');
            seven_33_t = $('#7_33_text');
            seven_34_t = $('#7_34_text');
            seven_35_t = $('#7_35_text');

            eight_1_t = $('#8_1_text');
            eight_2_t = $('#8_2_text');
            eight_3_t = $('#8_3_text');
            eight_4_t = $('#8_4_text');
            eight_5_t = $('#8_5_text');
            eight_6_t = $('#8_6_text');
            eight_7_t = $('#8_7_text');
            eight_8_t = $('#8_8_text');
            eight_9_t = $('#8_9_text');
            eight_10_t = $('#8_10_text');
            eight_11_t = $('#8_11_text');
            eight_12_t = $('#8_12_text');
            eight_13_t = $('#8_13_text');
            eight_14_t = $('#8_14_text');
            eight_15_t = $('#8_15_text');
            eight_16_t = $('#8_16_text');
            eight_17_t = $('#8_17_text');
            eight_18_t = $('#8_18_text');
            eight_19_t = $('#8_19_text');
            eight_20_t = $('#8_20_text');
            eight_21_t = $('#8_21_text');
            eight_22_t = $('#8_22_text');
            eight_23_t = $('#8_23_text');
            eight_24_t = $('#8_24_text');
            eight_25_t = $('#8_25_text');
            eight_26_t = $('#8_26_text');
            eight_27_t = $('#8_27_text');
            eight_28_t = $('#8_28_text');

            nine_1_t = $('#9_1_text');
            nine_2_t = $('#9_2_text');
            nine_3_t = $('#9_3_text');
            nine_4_t = $('#9_4_text');
            nine_5_t = $('#9_5_text');
            nine_6_t = $('#9_6_text');
            nine_7_t = $('#9_7_text');
            nine_8_t = $('#9_8_text');
            nine_9_t = $('#9_9_text');
            nine_10_t = $('#9_10_text');
            nine_11_t = $('#9_11_text');
            nine_12_t = $('#9_12_text');
            nine_13_t = $('#9_13_text');
            nine_14_t = $('#9_14_text');
            nine_15_t = $('#9_15_text');
            nine_16_t = $('#9_16_text');
            nine_17_t = $('#9_17_text');
            nine_18_t = $('#9_18_text');
            nine_19_t = $('#9_19_text');
            nine_20_t = $('#9_20_text');
            nine_21_t = $('#9_21_text');
            nine_22_t = $('#9_22_text');
            nine_23_t = $('#9_23_text');
            nine_24_t = $('#9_24_text');
            nine_25_t = $('#9_25_text');
            nine_26_t = $('#9_26_text');
            nine_27_t = $('#9_27_text');
            nine_28_t = $('#9_28_text');
            nine_29_t = $('#9_29_text');
            nine_30_t = $('#9_30_text');
            nine_31_t = $('#9_31_text');
            nine_32_t = $('#9_32_text');
            nine_33_t = $('#9_33_text');
            nine_34_t = $('#9_34_text');
            nine_35_t = $('#9_35_text');
            nine_36_t = $('#9_36_text');
            nine_37_t = $('#9_37_text');
            nine_38_t = $('#9_38_text');
            nine_39_t = $('#9_39_text');
            nine_40_t = $('#9_40_text');
            nine_41_t = $('#9_41_text');
            nine_42_t = $('#9_42_text');
            nine_43_t = $('#9_43_text');
            nine_44_t = $('#9_44_text');
            nine_45_t = $('#9_45_text');
            nine_46_t = $('#9_46_text');
            nine_47_t = $('#9_47_text');
            nine_48_t = $('#9_48_text');
            nine_49_t = $('#9_49_text');
            nine_50_t = $('#9_50_text');
            nine_51_t = $('#9_51_text');
            nine_52_t = $('#9_52_text');
            nine_53_t = $('#9_53_text');
            nine_54_t = $('#9_54_text');
            nine_55_t = $('#9_55_text');
            nine_56_t = $('#9_56_text');
            nine_57_t = $('#9_57_text');
            nine_58_t = $('#9_58_text');
            nine_59_t = $('#9_59_text');
            nine_60_t = $('#9_60_text');
            nine_61_t = $('#9_61_text');
            nine_62_t = $('#9_62_text');
            nine_63_t = $('#9_63_text');
            nine_64_t = $('#9_64_text');
            nine_65_t = $('#9_65_text');
            nine_66_t = $('#9_66_text');
            nine_67_t = $('#9_67_text');
            nine_68_t = $('#9_68_text');
            nine_69_t = $('#9_69_text');
            nine_70_t = $('#9_70_text');
            nine_71_t = $('#9_71_text');
            nine_72_t = $('#9_72_text');
            nine_73_t = $('#9_73_text');
            nine_74_t = $('#9_74_text');
            nine_75_t = $('#9_75_text');
            nine_76_t = $('#9_76_text');
            nine_77_t = $('#9_77_text');
            nine_78_t = $('#9_78_text');
            nine_79_t = $('#9_79_text');
            nine_80_t = $('#9_80_text');
            nine_81_t = $('#9_81_text');
            nine_82_t = $('#9_82_text');
            nine_83_t = $('#9_83_text');
            nine_84_t = $('#9_84_text');
            nine_85_t = $('#9_85_text');
            nine_86_t = $('#9_86_text');
            nine_87_t = $('#9_87_text');
            nine_88_t = $('#9_88_text');
            nine_89_t = $('#9_89_text');
            nine_90_t = $('#9_90_text');
            nine_91_t = $('#9_91_text');
            nine_92_t = $('#9_92_text');
            nine_93_t = $('#9_93_text');
            nine_94_t = $('#9_94_text');
            nine_95_t = $('#9_95_text');
            nine_96_t = $('#9_96_text');
            nine_97_t = $('#9_97_text');
            nine_98_t = $('#9_98_text');
            nine_99_t = $('#9_99_text');
            nine_100_t = $('#9_100_text');
            nine_101_t = $('#9_101_text');
            nine_102_t = $('#9_102_text');
            nine_103_t = $('#9_103_text');
            //Unclick textbox
            tbb.removeClass('border_choice');
            tbb.addClass('border_song');

            //Make text displayable
            one_15_t.removeClass('display_none_text');
            one_16_t.removeClass('display_none_text');
            one_17_t.removeClass('display_none_text');

            //Add class
            one_5_t.addClass('display_none_text');
            one_6_t.addClass('display_none_text');
            one_7_t.addClass('display_none_text');

            one_15_t.addClass('line-1 anim-typewriter_one_15_t');
            one_16_t.addClass('line-1 anim-typewriter_one_16_t');
            one_17_t.addClass('line-1 anim-typewriter_one_17_t');

            //Make text box choice
            setTimeout(function()
            {
              $(one_15_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_16_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_17_t).fadeOut( 400, function() {
              // Animation complete.
              });                  
            }, 6500);


            setTimeout(function()
            {
              one_18_t.removeClass('display_none_text');
              one_19_t.removeClass('display_none_text');

              //Add class
              one_15_t.addClass('display_none_text');
              one_16_t.addClass('display_none_text');
              one_17_t.addClass('display_none_text');

              one_18_t.addClass('line-1 anim-typewriter_one_18_t');
              one_19_t.addClass('line-1 anim-typewriter_one_19_t');
            }, 7200);

            setTimeout(function()
            {
              $(one_18_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_19_t).fadeOut( 400, function() {
              // Animation complete.
              });    
            }, 11500);

            setTimeout(function()
            {
              one_20_t.removeClass('display_none_text');
              one_21_t.removeClass('display_none_text');

              //Add class
              one_15_t.addClass('display_none_text');
              one_16_t.addClass('display_none_text');
              one_17_t.addClass('display_none_text');

              one_20_t.addClass('line-1 anim-typewriter_one_20_t');
              one_21_t.addClass('line-1 anim-typewriter_one_21_t');
            }, 12000);

            setTimeout(function()
            {
              $(one_20_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_21_t).fadeOut( 400, function() {
              // Animation complete.
              });    
            }, 16500);

            setTimeout(function()
            {
              one_22_t.removeClass('display_none_text');
              one_23_t.removeClass('display_none_text');
              one_24_t.removeClass('display_none_text');

              //Add class
              one_20_t.addClass('display_none_text');
              one_21_t.addClass('display_none_text');

              one_22_t.addClass('line-1 anim-typewriter_one_22_t');
              one_23_t.addClass('line-1 anim-typewriter_one_23_t');
              one_24_t.addClass('line-1 anim-typewriter_one_24_t');
            }, 17200);

            setTimeout(function()
            {
              $(one_22_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_23_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_24_t).fadeOut( 400, function() {
              // Animation complete.              
              });    
            }, 24500);

            setTimeout(function()
            {
              one_22_t.removeClass('display_none_text');
              one_23_t.removeClass('display_none_text');
              one_24_t.removeClass('display_none_text');

              //Add class
              one_20_t.addClass('display_none_text');
              one_21_t.addClass('display_none_text');

              one_22_t.addClass('line-1 anim-typewriter_one_22_t');
              one_23_t.addClass('line-1 anim-typewriter_one_23_t');
              one_24_t.addClass('line-1 anim-typewriter_one_24_t');
            }, 17200);            

            setTimeout(function()
            {
              $(one_22_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_23_t).fadeOut( 400, function() {
              // Animation complete.
              });
              $(one_24_t).fadeOut( 400, function() {
              // Animation complete.              
              });    
            }, 24000);

            setTimeout(function()
            {
              one_24_1_t.removeClass('display_none_text');              
              one_24_1_t.addClass('line-1 anim-typewriter_one_24_1_t');              
            }, 24500); 

            setTimeout(function()
            {
              tbb.removeClass('border_song');                      
              tbb.addClass('border_clickable');
              tbb.addClass('pointer');
              continueTwo();              
            }, 25700);  
          
    break;
   default:
   // code to be executed if n is different from case 1 and 2
  };

  

}


















