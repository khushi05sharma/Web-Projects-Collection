const btn = document.querySelector('#button');

btn.addEventListener("click", function(){
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    
    function getRandomColor(){
        let red = Math.floor(Math.random() *255);
        let green = Math.floor(Math.random() *255);
        let blue = Math.floor(Math.random() *255);

        return `rgb(${red}, ${green}, ${blue})`;
        
    }

    
})