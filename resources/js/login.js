 
        $(function() {
    $('#login-form-link').click(function(e) {
    	$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
         
          $('#deseotutor').change(function(){
        if(this.checked){
         	$('#datosestudiante').fadeOut('slow');
            $('#datostutor').fadeIn('slow');
        	
        }
        else{
        	$('#datostutor').fadeOut('slow');
        	$('#datosestudiante').fadeIn('slow');
    	
        }
            
        $('#soytutor').change(function(){
            if(this.checked){
             	$('#loginestudiante').fadeOut('fast');
                $('#logintutor').fadeIn('fast');
            	
            }
            else{
            	$('#logintutor').fadeOut('fast');
            	$('#loginestudiante').fadeIn('fast');
        	
            }


        }); 
        
    });   
            
            
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
    

$("#login-form").validate({
                    rules: {
                        "username": {
                            required: true,
                            email: true
                        },  
                        "password": {
                            required: true,
                            minlength: 8
                        } 
                    }
                });


$("#register-form").validate({
                    rules: {
                    	"fullname":{
                    		required:true,
                    		maxlength:50
                    	},
                        "email": {
                            required: true,
                            email: true
                        },  
                        "password": {
                            required: true,
                            minlength: 8
                        },
                        "especialidad": {
                            required: true,
                        }, 
                        "grado-estudio": {
                            required: true,
                        },  
                        "casa-estudio": {
                            required: true,
                        },  
                        "areas-int": {
                            required: true,
                        }
                    }
                });



 

});
 