
$(".heart").click(function(e) {
      $(this).toggleClass("red");
});

$(".pakage1 .link").click(function(e) {
      e.preventDefault();
      $('.pakage1 .content-container  div').fadeOut('slow');
      $('#' + $(this).data('rel')).fadeIn('slow');
     
});
$( document ).ready(function() {
    $(".pakage1 .link")[0].click(); 
});

$(".pakage2 .link").click(function(e) {
      e.preventDefault();
      $('.pakage2 .content-container div').fadeOut('slow');
      $('#' + $(this).data('rel')).fadeIn('slow');
     
});
$( document ).ready(function() {
    $(" .pakage2 .link")[0].click(); 
});

$(".pakage3 .link").click(function(e) {
      e.preventDefault();
      $('.pakage3 .content-container div').fadeOut('slow');
      $('#' + $(this).data('rel')).fadeIn('slow');
     
});
$( document ).ready(function() {
    $(" .pakage3 .link")[0].click(); 
});
$(".pakage4 .link").click(function(e) {
      e.preventDefault();
      $('.pakage4 .content-container div').fadeOut('slow');
      $('#' + $(this).data('rel')).fadeIn('slow');
     
});
$( document ).ready(function() {
    $(" .pakage4 .link")[0].click(); 
});
$(".pakage5 .link").click(function(e) {
      e.preventDefault();
      $('.pakage5 .content-container div').fadeOut('slow');
      $('#' + $(this).data('rel')).fadeIn('slow');
     
});
$( document ).ready(function() {
    $(" .pakage5 .link")[0].click(); 
});
// ============================================================================
// btn-plus and btn-minus in "#order-detail-content" table
// ============================================================================

  $('.btn-plus').on('click', function () {
    var $count = $(this).parent().find('.count');
    var val = parseInt($count.val(),10);
    $count.val(val+1);
    return false;
  });

  $('.btn-minus').on('click', function () {
    var $count = $(this).parent().find('.count');
    var val = parseInt($count.val(),10);
    if(val > 0) $count.val(val-1);
    return false;
  });

jQuery(function() {
  jQuery('.showSingle').click(function() {
    jQuery('.targetDiv').hide();
 
    jQuery('#div' + $(this).attr('target')).show();
  });
    $(".link").click(function(){
            $('.link').removeClass("active"); 
        $(this).addClass("active");
    });
});

  $('.showSingle-color').click(function() {
   
  $('.showSingle-color').removeClass("active1"); 
        $(this).addClass("active1");
 
  });
// ============================================================================
// PERSONALIZE
// ============================================================================

  /*$("#txtOutput").on('keyup', function () {
       var PERSONALIZE = document.getElementById("PERSONALIZ1");
       var text=   $('#PERSONALIZE1').html($(this).val());

    });
 function Heart(){
    
  var txtOutput = document.getElementById("txtOutput");
        var heart = document.getElementById("heart");
       var heart = heart.value;
   
        $("#PERSONALIZE").prepend('<img src="img/heart.png">');
  } 
 function Moon(){
    
  var txtOutput = document.getElementById("txtOutput");
          var PERSONALIZE = document.getElementById("PERSONALIZE");
        var moon = document.getElementById("moon");
       var moon = moon.value;
  
       PERSONALIZE.value +=  $("#PERSONALIZE").prepend('<img src="img/moon.png">');
  }*/
  
  function PERSONALIZE()
  {
	  var div = document.getElementById('PERSONALIZE');
      div.innerHTML = "";
	  
	  var txtOutput = $('#txtOutput').val();
	  var shape = "";
	  var isPracket = false;
	  for (i = 0; i <txtOutput.length ; i++) {
         if(txtOutput[i] == "[")
		 {
			 shape = shape + txtOutput[i];
			 isPracket = true;
			 //alert(shape);
		 }
		 else
		 {
			 
			 if(txtOutput[i] == "]")
			 {
				 shape = shape + txtOutput[i];
				 //alert(shape);
				 isPracket = false;
				 if(shape == "[heart]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/heart.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                 else  if(shape == "[heart1]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/h.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
				 else if(shape == "[moon]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/moon.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                     else if(shape == "[lheart]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/lheart.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                  else if(shape == "[rheart]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/rheart.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                  else if(shape == "[music]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/music.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                   else if(shape == "[music1]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/m.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                  else if(shape == "[music2]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/music2.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                    else if(shape == "[sun]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/sun.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                    else if(shape == "[sun1]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/2.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                      else if(shape == "[star]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/star.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                       else if(shape == "[strike]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/strike.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                       else if(shape == "[star]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/star.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                        else if(shape == "[star1]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/3.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                       else if(shape == "[cross]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/cross.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                       else if(shape == "[flag]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/7.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                       else if(shape == "[flower]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/f.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                                        else if(shape == "[jewel]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/9.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
                       else if(shape == "[shanab]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/1.png" style="width: 50px"></span>');
					 shape = "";
					 //alert(shape);
				 }
                      else if(shape == "[face]")
				 {
					 var PERSONALIZE = document.getElementById("PERSONALIZE");
                     PERSONALIZE.value +=  $("#PERSONALIZE").append('<span><img src="img/8.png"></span>');
					 shape = "";
					 //alert(shape);
				 }
				 else{
					 var div = document.getElementById('PERSONALIZE');
                     div.innerHTML += shape;
					 shape = "";
				 }
			 }
			 else if(isPracket == true)
			 {
				 shape = shape + txtOutput[i];
			     isPracket = true;
				 //alert(shape); 
			 }
			 else{
				 var div = document.getElementById('PERSONALIZE');
				 //alert(txtOutput[i]);
                 div.innerHTML += txtOutput[i];
			 }
			 
		 }
      }
	  
  }
   function Shanab(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[shanab]');   
	   
	   PERSONALIZE();
	   
  }  
  function Face(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[face]');   
	   
	   PERSONALIZE();
	   
  }
   function Flag(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[flag]');   
	   
	   PERSONALIZE();
	   
  } 
   function Jewel(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[jewel]');   
	   
	   PERSONALIZE();
	   
  } 
   
  function Heart(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[heart]');   
	   
	   PERSONALIZE();
	   
  } 
  function Heart1(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[heart1]');   
	   
	   PERSONALIZE();
	   
  } 
 function lHeart(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[lheart]');   
	   
	   PERSONALIZE();
	   
  } 
 function rHeart(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[rheart]');   
	   
	   PERSONALIZE();
	   
  } 
function Moon(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[moon]');   
	   
	   PERSONALIZE();
	   
  } 
 function Music(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[music]');   
	   
	   PERSONALIZE();
	   
  } 
 function Music1(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[music1]');   
	   
	   PERSONALIZE();
	   
  }
 function Music2(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[music2]');   
	   
	   PERSONALIZE();
	   
  } 
 function Sun(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[sun]');   
	   
	   PERSONALIZE();
	   
  } 
 function Flower(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[flower]');   
	   
	   PERSONALIZE();
	   
  }
 function Cross(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[cross]');   
	   
	   PERSONALIZE();
	   
  } 
 function Strike(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[strike]');   
	   
	   PERSONALIZE();
	   
  } 
 function Star(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[star]');   
	   
	   PERSONALIZE();
	   
  } 
 function Sun1(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[sun1]');   
	   
	   PERSONALIZE();
	   
  }
 function Star1(){
	  
       var txtOutput = $('#txtOutput');
	   txtOutput.val(txtOutput.val() + '[star1]');   
	   
	   PERSONALIZE();
	   
  }

 $(".simple").click(function(){
           
        $("#PERSONALIZE").addClass("simple");
      $("#PERSONALIZE").removeClass("script");
      $("#PERSONALIZE").removeClass("block");
      $("#PERSONALIZE").removeClass("roman");
      $("#PERSONALIZE").removeClass("bracelets");
      $("#PERSONALIZE").removeClass("earrings");
      $("#PERSONALIZE").removeClass("Letters");
      $("#PERSONALIZE").removeClass("necklaces");
      $("#PERSONALIZE").removeClass("madelyn");
    });
 $(".script").click(function(){
           
        $("#PERSONALIZE").addClass("script");
         $("#PERSONALIZE").removeClass("simple");
      $("#PERSONALIZE").removeClass("block");
      $("#PERSONALIZE").removeClass("roman");
      $("#PERSONALIZE").removeClass("bracelets");
      $("#PERSONALIZE").removeClass("earrings");
      $("#PERSONALIZE").removeClass("Letters");
      $("#PERSONALIZE").removeClass("necklaces");
      $("#PERSONALIZE").removeClass("madelyn");
    });
 $(".block").click(function(){
           
        $("#PERSONALIZE").addClass("block");
         $("#PERSONALIZE").removeClass("script");
      $("#PERSONALIZE").removeClass("simple");
      $("#PERSONALIZE").removeClass("roman");
      $("#PERSONALIZE").removeClass("bracelets");
      $("#PERSONALIZE").removeClass("earrings");
      $("#PERSONALIZE").removeClass("Letters");
      $("#PERSONALIZE").removeClass("necklaces");
      $("#PERSONALIZE").removeClass("madelyn");
    });
 $(".roman").click(function(){
            
        $("#PERSONALIZE").addClass("roman");
         $("#PERSONALIZE").removeClass("script");
      $("#PERSONALIZE").removeClass("block");
      $("#PERSONALIZE").removeClass("simple");
      $("#PERSONALIZE").removeClass("bracelets");
      $("#PERSONALIZE").removeClass("earrings");
      $("#PERSONALIZE").removeClass("Letters");
      $("#PERSONALIZE").removeClass("necklaces");
      $("#PERSONALIZE").removeClass("madelyn");
    });
 $(".bracelets").click(function(){
            
        $("#PERSONALIZE").addClass("bracelets");
         $("#PERSONALIZE").removeClass("script");
      $("#PERSONALIZE").removeClass("block");
      $("#PERSONALIZE").removeClass("simple");
      $("#PERSONALIZE").removeClass("roman");
      $("#PERSONALIZE").removeClass("earrings");
      $("#PERSONALIZE").removeClass("Letters");
      $("#PERSONALIZE").removeClass("necklaces");
      $("#PERSONALIZE").removeClass("madelyn");
    });

 $(".earrings").click(function(){
            
        $("#PERSONALIZE").addClass("earrings");
         $("#PERSONALIZE").removeClass("script");
      $("#PERSONALIZE").removeClass("block");
      $("#PERSONALIZE").removeClass("simple");
      $("#PERSONALIZE").removeClass("roman");
      $("#PERSONALIZE").removeClass("bracelets");
      $("#PERSONALIZE").removeClass("Letters");
      $("#PERSONALIZE").removeClass("necklaces");
      $("#PERSONALIZE").removeClass("madelyn");
    });

 $(".Letters").click(function(){
            
        $("#PERSONALIZE").addClass("Letters");
         $("#PERSONALIZE").removeClass("script");
      $("#PERSONALIZE").removeClass("block");
      $("#PERSONALIZE").removeClass("simple");
        $("#PERSONALIZE").removeClass("roman");
      $("#PERSONALIZE").removeClass("bracelets");
      $("#PERSONALIZE").removeClass("earrings");
      $("#PERSONALIZE").removeClass("madelyn");
       $("#PERSONALIZE").removeClass("necklaces");
     
    });
 $(".necklaces").click(function(){
            
        $("#PERSONALIZE").addClass("necklaces");
         $("#PERSONALIZE").removeClass("script");
      $("#PERSONALIZE").removeClass("block");
      $("#PERSONALIZE").removeClass("simple");
      $("#PERSONALIZE").removeClass("earrings");
      $("#PERSONALIZE").removeClass("roman");
      $("#PERSONALIZE").removeClass("bracelets");
      $("#PERSONALIZE").removeClass("Letters");
      $("#PERSONALIZE").removeClass("madelyn");
    });
 $(".madelyn").click(function(){
            
        $("#PERSONALIZE").addClass("madelyn");
         $("#PERSONALIZE").removeClass("script");
      $("#PERSONALIZE").removeClass("block");
      $("#PERSONALIZE").removeClass("simple");
       $("#PERSONALIZE").removeClass("earrings");
      $("#PERSONALIZE").removeClass("roman");
      $("#PERSONALIZE").removeClass("bracelets");
      $("#PERSONALIZE").removeClass("Letters");
      $("#PERSONALIZE").removeClass("necklaces");
    });