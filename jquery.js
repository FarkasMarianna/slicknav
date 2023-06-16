$(document).ready(
    function(){
   $(".menu li").hover(
    function(){
     $(">ul.sub" ,this).slideDown(1200);
   },
    function(){
     $(">ul.sub" ,this).slideUp(1300);
   },
  );
  
    $('#menu').slicknav( {
     label:'',
     
   }); 
 });
 