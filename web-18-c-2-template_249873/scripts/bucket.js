// On clicking remove button the item should be removed from DOM as well as localstorage.

let items = localStorage.setItem("items",JSON.stringify(items));

let amount = items.reduce(function(func,ele){
    return func + ele.price
},0)

displayCoffee(items)


function displayCoffee(data){
    data.forEach(function(ele,index){
        let bucket = document.querySelector("#bucket");

        let box = document.createElement("div");
        box.setAttribute("id","box");

        let images = document.createElement("img");
        images.setAttribute("id","coffee");
        images.src = ele.image;
         
        let title = document.createElement("h3");
        title.setAttribute("id","title");
        title.innerText = `Coffee Type:${ele.title}`;

        let price = document.createElement("p");
        price.setAttribute("id","price");
        price.innerText = `Price:${ele.price}/-`;


        let remove_coffee = document.createElement("button");
        remove_coffee.setAttribute("id","remove_coffee");
        remove_coffee.innerText = "REMOVE";
        remove_coffee.addEventListener("click",function(){
            removeCoffee(ele)
    })
    box.append(images,title,price,add_to_bucket);

    bucket.append(box);

    })
}

function removeCoffee(ele,index){
    items.splice(index,1);
    localStorage.setItem("items",JSON.stringify(items))
    window.location.reload();
}