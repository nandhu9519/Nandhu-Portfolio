$(document).ready(function(){
    $.validator.addMethod("alpha", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    });

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value == '' || value.trim('').length >= 3;
    }, "Name should have at least three characters");

    $.validator.addMethod("isEmail", function (value, element) {
        return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    });
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                alpha:true,
                noSpace:true
            },
            lname:{
                required:true,
                alpha:true,
                minlength:1
            },

            email:{
                required:true,
                email:true, 
                isEmail:true
            },
            
            contact:{
                required:true,
                digits:true,
                minlength:10,
                maxlength:10,
                number:true
    
            },

            enquiry:{
                required:true,
                minlength:10
            }

        },
        messages:{
            
            fname:{
                
                alpha:"Please enter letters only"
            },
            lname:{
                alpha:"Please enter letters only"
            },
            contact:{
        
                minlength:"Number not valid",
                maxlength:"Number not valid"
            },
            enquiry:{
                minlength:"Please enter a valid enquiry"
            }
        },
        submitHandler:function(form){

        $("#signup-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbw6yG0dtXJP8KkcxK_eaPE6zIB06ziBHukXKnz8K2-B3IkY6t3gc60o4ZTv5Vxv_gN2nQ/exec",
                data:$("#signup-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })
     }  

    })

})


