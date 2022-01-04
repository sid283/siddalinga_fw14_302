let mealarr = JSON.parse(localStorage.getItem("mealpage"))
    displaycart(mealarr)


    function displaycart(mealarr){
        document.querySelector("#cartpage").textContent=""
        mealarr.map(function(elem,index){
            let div1 = document.createElement("div")
            div1.id="div1"
            let image = document.createElement("img")
            image.id="image"
            image.src = elem.image
            let price = document.createElement("p")
            price.textContent = elem.price
            let remove = document.createElement("button")
            remove.textContent="Remove"
            remove.addEventListener("click",function(){
                removeitem(index)
            })
            div1.append(image,price,remove)
            document.querySelector("#cartpage").append(div1)
        })
    }


    displayprice(mealarr)
    function displayprice(mealarr){
        let cartprice = document.createElement("p")
        cartprice.value = 0
        let cartcount = document.createElement("p")
        cartcount.value = `Total items in cart: ${mealarr.length}`
        cartprice.textContent = "Total cart value: "
        for(let i=0;i<mealarr.length;i++){
            cartprice.value+= +mealarr[i].price
        }
        cartcount.append(cartcount.value)
        cartprice.append(cartprice.value)
        document.querySelector("#cartpage").append(cartcount,cartprice)
    }

    function removeitem(index){
        mealarr.splice(index,1)
        localStorage.setItem("mealpage",JSON.stringify(mealarr))
        displaycart(mealarr)
        displayprice(mealarr)
    }

    function checkout(){
        window.location.href= "checkout.html"
    }