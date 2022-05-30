let checkButton = document.querySelector("#confirm");
checkButton.addEventListener("click",checkFunc);

function checkButton(){
    event.preventDefault()
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let address = document.querySelector("#address").value;


    if(name === "" || number === "" || address === "")
    {
        alert("Enter Your Details")
    }
    else{
        alert("Your order is accepted")

        setTimeout(function(){
            alert("Your order is being Prepared");
        },3000)

        setTimeout(function(){
            alert("Your order is being Packed");
        },8000)
        
        setTimeout(function(){
            alert("Your order is out for delivery");
        },10000)
        
        setTimeout(function(){
            alert("Order delivered");
        },12000)
        
    }
}
