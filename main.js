function changeBgColor(){
    let colors = ["red", "green", "blue", "pink", "yellow", "aqua", "purple"];
    let body = document.querySelector("body");
    let button = document.querySelector("button");
    button.addEventListener('click', function(){
        let colorIndex = parseInt(Math.floor((Math.random() * colors.length)));
        body.style.backgroundColor = colors[colorIndex];
    });

}
changeBgColor();