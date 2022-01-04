async function appendmeals(){
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    console.log(res)
    let data = await res.json()
    appenditems(data.meals)
    console.log(data)
}

var mealarr = JSON.parse(localStorage.getItem("mealpage")) || []
function appenditems(arr){
    document.querySelector("#section").textContent=""
    arr.map(function(elem){
        let div1 = document.createElement("div")
        div1.id="div1"
        let image = document.createElement("img")
        image.id="image"
        image.src= elem.strMealThumb
        let name = document.createElement("h5")
        name.textContent = elem.strMeal
        let add = document.createElement("button")
        add.textContent = "Add"
        let price = document.createElement("p")
        price.textContent = Math.round(Math.random(100)*500)
        add.addEventListener("click",function(){
            alert("Added to cart")
            let mealObj = {
                image : elem.strMealThumb,
                price : price.textContent
            }
            mealarr.push(mealObj)
            localStorage.setItem("mealpage",JSON.stringify(mealarr))
        })
        div1.append(name,image,price,add)
        document.getElementById("section").append(div1)
    })
}

function gotocart(){
window.location.href="cart.html"
}