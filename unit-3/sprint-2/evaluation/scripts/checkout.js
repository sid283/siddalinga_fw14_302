document.querySelector("#form").addEventListener("submit",orderdetails)

    function orderdetails(event){
        event.preventDefault()

        setTimeout(function(){
            alert("Your order is accepted")
        },000)
        setTimeout(function(){
            alert("Your order is being cooked")
        },3000)
        setTimeout(function(){
            alert("Your order is ready")
        },8000)
        setTimeout(function(){
            alert("Out for delivery!")
        },10000)
        setTimeout(function(){
            alert("Order delivered!")
        },12000)
    }