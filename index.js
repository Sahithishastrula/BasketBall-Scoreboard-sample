let homeCount=0
let guestCount=0
let hdisplay=document.getElementById("htext")
let gdisplay=document.getElementById("gtext")
function hadd1(){
    homeCount+=1
    hdisplay.textContent=homeCount
    console.log(homeCount)
}
function hadd2(){
    homeCount+=2
    hdisplay.textContent=homeCount
    console.log(homeCount)
}
function hadd3(){
    homeCount+=3
    hdisplay.textContent=homeCount
    console.log(homeCount)
}
function gadd1(){
    console.log("gadd1")
    guestCount+=1
    gdisplay.textContent=guestCount
}
function gadd2(){
    guestCount+=2
    gdisplay.textContent=guestCount
}
function gadd3(){
    guestCount+=3
    gdisplay.textContent=guestCount
}