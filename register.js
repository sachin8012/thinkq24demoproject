$(function(){
    var$registerForm=$("#registration");
    if($registerForm.length){
        $registerForm.validate({
            rules:{
                name:{
                    required:true
                }
                birthday:{
                    required:true
                },
                email:{
                    reqiured:true
                },
                phone:{
                    required:true
                },
                experience:{
                    required:true
                },
                skill set:{
                    required:true
                },
                qualification:{
                    required:true
                },
                gender:{
                    required:true
                },
                resume:{
                    required:true
                },
            },
            message:{
                name:{
                    required:'username is required'
                },
                birthday:{
                    required:'enter the birthday'
                },
                email:{
                    required:'please enter the email'
                },
                phone:{
                    required:'please enter the phonenumber'
                },
                experience:{
                    required:'please enter the experience'
                },
                qualification:{
                    required:'please enter the qualification'
                },
                gender:{
                    required:'please enter the gender'
                },
                resume:{
                    required:'please upload the resume' 
                },
            }
        })
    }
})            