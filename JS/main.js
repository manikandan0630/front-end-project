$(document).ready(() => {
  //session handling
  sessionStorage.clear()
  let login=false;
  //hide the two error message elements
  $(".err-user").hide();
  $(".err-pwd").hide();

  ////form submit button
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
    let uname;
    let pass;

    let cred;
    //ajax
    $.ajax({
      url: "https://dummyjson.com/user/",
      success: (e) => {
        cred = e.users;
       
        let id;

        id = cred.filter((e) => {
          return e.id == 3;
        });
        id.map((ele) => {
          uname = ele.username;
          pass = ele.password;
        });
      },
    }).done(() => {
      //username and password authentication
      try {
        if (username == uname && password == pass) {
          login=true
          sessionStorage.setItem("login",JSON.stringify(login))
          if(login==true){
            document.location.assign("./view.html");
          }
          else{
            alert("Session expired")
          }
        } else {
          alert("Please enter the details");
          location.reload()
        }
      } catch (e) {
        document.write(e);
      }
    });
  });


  //eye icon
  let clicked = false;
  $("#icon").click(() => {
    console.log("test");
    clicked = !clicked;
    console.log("test");
    if (clicked) {
      $("#pwd").attr("type", "text");
      $("#icon").attr("class", "fa-solid fa-eye");
    } else if ($("#icon").attr("class", "fa-solid fa-eye")) {
      $("#pwd").attr("type", "password");
      $("#icon").attr("class", "fa-solid fa-eye-slash");
    }
  });
});
