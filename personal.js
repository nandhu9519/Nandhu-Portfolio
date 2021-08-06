$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            lname:{
                required:true,
                minlength:1
            },

            email:{
                required:true,
                email:true 
            },
            
            contact:{
                required:true,
                digits:true,
                minlength:10,
                maxlength:10
    
            },
        },
        messages:{
            
            fname:{
                minlength:"First name should have atleast 3 characters"
            },
            contact:{
        
                minlength:"Number not valid",
                maxlength:"Number not valid"
            },
        },

    })

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
})


