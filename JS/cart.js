$(document).ready(() => {
  const view = () => {
    $.ajax({
      url: "https://dummyjson.com/products",
      success: (e) => {
        let data = e.products;
        console.log(data);
        let rend = data.map((ele) => {
          return ` <div class="cards" id=${ele.id} >
                <div class="card-image">  <img src="${ele.images[0]}" alt="test" ></div>
                  
                  
                  <h2>${ele.title}</h2>
                  <p>Rs.${ele.price}</p>
                  <span class="icon">
                    <i class="fa-solid fa-pen-to-square" id="updatepro"></i>
                    <i class="fa-solid fa-trash" id="deletpro"></i>
                  </span>
                  <button id="buy">Buy now</button>
              </div>`;
        });
        $(".card").append(rend);
      },
    });
  };
  view();

  //add data
  $("#add").click((e) => {
    e.preventDefault();
    $(".add h2").show();

    $(".card").hide();
    $(".add").append(`
            <div class="detail-form">
            <form >
                <input type="text" placeholder="title" id="title">
                <input type="text" placeholder="price" id="price">
                <input type="text" name="" id="files" placeholder="img url">
                <button class="addSub">ADD</button>
            </form>
        </div>
        `);

    let title;
    let price;
    let files;

    $(".addSub").click((e) => {
      e.preventDefault();
      $(".add form").hide();
      title = $("#title").val();
      price = $("#price").val();
      files = $("#files").val();

      let obj = {
        title: title,
        price: price,
        images: [files],
      };

      $.ajax({
        url: "https://dummyjson.com/product/add",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(obj),
        success: (pro) => {
          console.log(pro);
          let res = ` <div class="cards">
                <div class="card-image">  <img src="${pro.images}" alt="test" ></div>
                  <h2>${pro.title}</h2>
                  <p>Rs.${pro.price}</p>
                  <button>Buy now</button>
              </div>`;

          $(".new").append(res);
        },
      });
    });
  });

  //update
  $(".card").on("click", ".cards i:first-child", (event) => {
    $(".card").hide();

    let ele = $(event.currentTarget.parentElement.parentElement);

    let image = ele.find(" img").attr("src");
    let title = ele.find(" h2").text();
    let price = ele.find(" p").text();

    
    let form = `<div class="detail-form">
      <form >
      <input type="text" placeholder="title" id="title" value="${title}">
      <input type="text" placeholder="price" id="price" value=$${price}>
      <input type="text" name="" id="files" placeholder="img url" value=${image}>
      <button id="updatesub">Update</button>
  </form>
  </div>`;

    $(".update").append(form);

    $("#updatesub").click((E) => {
      E.preventDefault();
      $(".update h2").show();

      let title = $("#title").val();
      let price = $("#price").val();
      let image = $("#files").val();

      let upda = `<div class="cards">
    <div class="card-image">  <img src="${image}" alt="test" ></div>
      <h2>${title}</h2>
      <p>Rs.${price}</p>
      <button>Buy now</button>
  </div>`;
      $(".update-show").append(upda);
      $(".update form").hide();
    });
  });

  //delete

  $(document).on("click","i:last-child",(event)=>{
      let ele=$(event.currentTarget.parentElement.parentElement.parentElement)
      
      let id=ele.find(".cards").attr("id")
      console.log(id);
      $.ajax({
        url:`https://dummyjson.com/products/${id}`, 
        method:"DELETE",
        success:(del)=>{
           alert("Deleted successfully")
           location.reload()
          }
      })
  })
});
