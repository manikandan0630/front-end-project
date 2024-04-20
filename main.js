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
    let uname;
    let pass;

    let cred;
    //ajax
    $.ajax({
       url:"https://dummyjson.com/user/",
      success: (e) => {
        cred = e.users;
        // console.log(cred)
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
          document.location.assign("./view.html")
        } else {
        alert("wrong");
        }
      } catch (e) {
        document.write(e);
      }
    });

   
  });
});
