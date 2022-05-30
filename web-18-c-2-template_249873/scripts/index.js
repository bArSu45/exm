// Add the coffee to local storage with key "coffee"
//here is the api url tht stores all the data in array of objects format
let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;


//fetching all the data
fetch(url).then(function(res){
    return res.json();
})
.then(function(res){
    let coffee = res.menu.data;
    //storing all the data to local storage
    localStorage.setItem("coffee",JSON.stringify(coffee))
    displayCoffee(res.menu.data);
})
.catch(function(err){
    console.log(err);
})
//retrive the data from local storage
let coffee = JSON.parse(localStorage.getItem("coffee"))

let items = JSON.parse(localStorage.getItem("coffee")) || [];


function displayCoffee (data){
    // let menu = document.querySelector("#menu");
    
//using foreach bcoz the data is in array of objects
    data.forEach(function(ele){

        let menu = document.querySelector("#menu");

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


        let add_to_bucket = document.createElement("button");
        add_to_bucket.setAttribute("id","add_to_bucket");
        add_to_bucket.innerText = "ADD TO BUCKET";
        add_to_bucket.addEventListener("click",function(){
            addTobucketFunc(ele)
        })
//appending all the data to DOM
        box.append(images,title,price,add_to_bucket);

        menu.append(box);
})

}
//adding fuctionality to addtobucket button
function addTobucketFunc(ele){
    items.push(ele)
    let count = document.querySelector("#coffee_count");
    count.innerText = items.length;
    localStorage.setItem("items",JSON.stringify(items));

}