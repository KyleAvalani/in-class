//js goes here

let test = document.querySelector('[href*="css/none.css"]');
console.log(test);

let h1 = document.querySelector('h1');
h1.addEventListener('click', function(){
    h1.style.fontSize = "10em";
})

let button = document.querySelector('button');
button.addEventListener('click', function(){
    let message ="You clicked " + event.offsetX +
    " and " + event.offsetY;

    let clickedElement = event.target;

    console.log(message);
    console.log(event.target);
})

function doSomething(item){
    document.querySelector(`#${item}`).addEventListener('click', function(){
        test.setAttribute('href',`css/${item}.css`);
    });
}

let listItems = document.querySelectorAll(".styles li");
for(var i in Object.keys(listItems)) doSomething(listItems[i].id);