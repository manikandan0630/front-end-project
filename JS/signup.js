$(document).ready(()=>{
    let cred={}

    $("#signup").click((e)=>{
        e.preventDefault()
        
        let name=$("#nam").val()
        let email=$("#email").val()
        let uname=$("#uname").val()
        let password=$("#pwd").val()
        

        cred={name:name,email:email,user:uname,password:password}

        localStorage.setItem("cred",JSON.stringify(cred))
        alert("Signup success")
        location.reload()
    })
})