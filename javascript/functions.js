function validate_registration_form(){

	 if( document.contact_form.name.value == "" ) {
            alert( "Please provide your name!" );
            document.contact_form.name.focus() ;
            return false;
       }

     if( document.contact_form.email.value == "" ) {
            alert( "Please provide your valid email!" );
            document.contact_form.email.focus() ;
            return false;
       }  

     if( document.contact_form.phone_no.value == "" ) {
            alert( "Please provide your valid Mobile No!" );
            document.contact_form.phone_no.focus() ;
            return false;
       }   

     if( document.contact_form.message.value == "" ) {
            alert( "Please leave us a query to solve!" );
            document.contact_form.message.focus() ;
            return false;
       }    

     if( isNaN(document.contact_form.phone_no.value) && document.contact_form.phone_no.value.length !=10 ) {
            alert( "Mobile no should be of 10 digits" );
            document.contact_form.phone_no.focus() ;
            return false;
       }   
      return false;
     }



$(window).on('load', function() {  
$('#status').fadeOut(); 
$('#preloader').delay(350).fadeOut('slow'); 
$('body').delay(350).css({'overflow':'visible'});
})