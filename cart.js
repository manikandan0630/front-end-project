$(document).ready(() => {
  const view = () => {
    $.ajax({
      url: "./product.json",
      success: (e) => {
        let data = e.products;
        console.log(data);
        let rend = data.map((ele) => {
          return ` <div class="cards" id=${ele.id} >
                <div class="card-image">  <img src="${ele.images[0]}" alt="test" ></div>
                  
                  
                  <h2>${ele.title}</h2>
                  <p>Rs.${ele.price}</p>
                  
                  <button>Buy now</button>
              </div>`;
        });
        $(".card").append(rend);
      },
    });
  };
  view();
  //add data

  $("#add").click(() => {
    $(".add h2").show();
    $(".update").hide();
    $(".card").hide();
    $(".add").append(`
            <div class="detail-form">
            <form >
                <input type="text" placeholder="title" id="title">
                <input type="text" placeholder="price" id="price">
                <input type="text" name="" id="files" placeholder="img url">
                <button id="addSub">ADD</button>
            </form>
        </div>
        `);

    let title;
    let price;
    let files;

    $("#addSub").click((e) => {
      e.preventDefault();

      title = $("#title").val();
      price = $("#price").val();
      files = $("#files").val();

      let obj = {
        title: title,
        price: price,
        images: [files],
      };

      $.ajax({
        url: "./product.json",
        success: (E) => {
          let arr = E.products;
          arr.unshift(obj)
          console.log(arr);
          $.ajax({
            url: "./product.json",
            type: "POST",
            // contentType: "application/json" ,
            data: JSON.stringify(arr),
            success: (pro) => {
              console.log(pro);
              // let res = ` <div class="cards">
              //   <div class="card-image">  <img src="${pro.images}" alt="test" ></div>
              //     <h2>${pro.title}</h2>
              //     <p>Rs.${pro.price}</p>
              //     <button>Buy now</button>
              // </div>`;

              // $(".new").append(res);
            },
          });
        },
      });
    });
  });

  //update
  $("#update").click(() => {
    $(".update").show();
    $(".card").hide();

    $(".update").append(`
    <div class="detail-form">
    <form >
        <input type="text" placeholder="title" id="titleUp">
        <input type="text" placeholder="price" id="priceUp">
        <input type="text" name="" id="filesUp" placeholder="img url">
        <button id="updateSub">ADD</button>
    </form>
    `);
    $("#updateSub").click((e) => {
      let title = $("#titleUp").val();
      let price = $("#priceUp").val();
      let image = $("#filesUp").val();

      $.ajax({
        url: "https://dummyjson.com/products/1",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
          title: title,
          price: price,
          image: image,
        }),
        success: (e) => {
          let res = ` <div class="cards">
          <div class="card-image">  <img src="${e.images}" alt="test" ></div>
            <h2>${e.title}</h2>
            <p>Rs.${e.price}</p>
            <button>Buy now</button>
        </div>`;

          $(".update-show").append(res);
        },
      });
    });
  });
});
