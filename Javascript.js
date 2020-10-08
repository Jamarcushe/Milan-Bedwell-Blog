
function    yesButton(){
    document.getElementById('myImage').src= "Images/Bart.png";
    var yourImg = document.getElementById('myImage');
    if(yourImg && yourImg.style) {
    yourImg.style.width = '20vw';
}
    }

    function    noButton(){
        document.getElementById('myImage').src= "Images/Lisa.png";
        var yourImg = document.getElementById('myImage');
        if(yourImg && yourImg.style) {
        yourImg.style.width = '10vw';
    }
}

// Dark Mode
function changeMode() {
    const blogpage = document.querySelectorAll(".blogpageEleven")
    const button = document.querySelectorAll(".mode-button")
    const blogpost = document.querySelectorAll(".blogpostEleven")
    const darkModeImg = document.querySelectorAll(".darkModeImg")
    const blogText = document.querySelectorAll(".blogTextEleven")
    const java = document.querySelectorAll(".javaTutTen")
    

    if(document.getElementById("blogpageEleven").getAttribute("class") === "blogpageEleven light")
    {
        makeDark(blogpage);
        makeDark(button);
        makeDark(blogpost);
        makeDark(darkModeImg);
        makeDark(blogText);
        makeDark(java);


        
    } else{
        makeLight(blogpage);
        makeLight(button);
        makeLight(blogpost);
        makeLight(darkModeImg);
        makeLight(blogText);
        makeLight(java);
  
    }

}

function makeDark(element){
    element.forEach(function(el) {
        el.classList.remove("light");
        el.classList.add("dark");
    })
}

function makeLight(element){
    element.forEach(function(el) {
        el.classList.remove("dark");
        el.classList.add("light");
    })
}