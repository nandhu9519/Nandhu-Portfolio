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
})

function popup()
{   if(fname==true && sname==true && email==true && contact==true )
    {
    alert("Thank you for your response");
}
}