const cartButton = document.querySelectorAll('.cart_btn');
const increasingButton = document.querySelectorAll('.increasing_btn');
const decreasingButton = document.querySelectorAll('.decreasing_btn');

let itemCount = [0,0,0,0,0]
// increasing buttons(plus sign)
increasingButton.forEach((button,index)=>{
    button.addEventListener("click",function(){
        if(itemCount[index] < 5){
            itemCount[index]++
            cartButton[index].textContent = `Added (${itemCount[index]})`
        }
        else{
            cartButton[index].textContent = `Product limit`
        }
    })
})

// decreasing buttons(minus sign)
decreasingButton.forEach((button,index)=>{
    button.addEventListener("click",function(){
        if(itemCount[index] > 0){
            itemCount[index]--
             cartButton[index].textContent = `Removed (${itemCount[index]})`
        }
        else{
            itemCount[index] = 0
             cartButton[index].textContent = `Add to cart(${itemCount[index]})`
        }

    })
})
const submitButton = document.querySelector(".submit_btn")
const popUpMessage = document.querySelector(".pop_message")
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".close-modal")

submitButton.addEventListener("click",function (){
    popUpMessage.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

const closeMOdal = function(){
    popUpMessage.classList.add('hidden')
    overlay.classList.add('hidden')
}
closeModalBtn.addEventListener('click',closeMOdal)
overlay.addEventListener('click',closeMOdal)

