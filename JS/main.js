$(document).ready(() => {
  $(".err-user").hide();
  $(".err-pwd").hide();
  $("#submit").click((e) => {
    e.preventDefault();
    let username = $("#user").val();
    let password = $("#pwd").val();
    console.log("teet");

    //form validation

    if (!username) {
      $("#user").css("border", "1.5px solid red");
      $(".err-user").show().css("color", "#DFF5FF");
      $("#user").keyup(() => {
        $(".err-user").hide();
        $("#user").css("border", "none");
      });
    }

    if (!password) {
      $("#pwd").css("border", "1.5px solid red");
      $(".err-pwd").show().css("color", "#DFF5FF");
      $("#pwd").keyup(() => {
        $(".err-pwd").hide();
        $("#pwd").css("border", "none");
      });
    }

    //authentication
    // let uname;
    // let pass;

    // let cred;
    // //ajax
    // $.ajax({
    //    url:"https://dummyjson.com/user/",
    //   success: (e) => {
    //     cred = e.users;
    //     // console.log(cred)
    //     let id;
        
    //     id = cred.filter((e) => {
    //       return e.id == 3;
    //     });
    //     id.map((ele) => {
    //       uname = ele.username;
    //       pass = ele.password;
    //     });
    //   },
    // }).done(() => {

    //     //username and password authentication
    //   try {
    //     if (username == uname && password == pass) {
    //       document.location.assign("./view.html")
    //     } else {
    //     alert("wrong");
    //     }
    //   } catch (e) {
    //     document.write(e);
    //   }
    // });
    let uname;
    let pass;
  
    let cred=localStorage.getItem("cred")
  
  let data=JSON.parse(cred);
    
    uname=data.user
    pass=data.password
  
    //username and password authentication
    try{
      if
      (uname==username && pass==password){
        location.assign("./view.html")
      }
      else{
        alert("incorrect details")
      }
    }catch(ele){
      document.write(ele)
    }
   
  });

  let clicked=false
  $("#icon").click(()=>{
    clicked=!clicked

    if(clicked)
    {
      $("#pwd").attr("type","text")
      $("#icon").attr("class","fa-solid fa-eye")
    }
    else if($("#icon").attr("class","fa-solid fa-eye"))
    {   $("#pwd").attr("type","password")
    $("#icon").attr("class","fa-solid fa-eye-slash")
    }
   
  })

  //login validation

 
});
