var figures = 0;
var button = 0;
var square = new Image();
var side1 = 0;
var side2 = 0;
var totalArea = 0;
square.src = "./img/square.png";

function showFigure(){
    const button = document.getElementById("container__input");
    figures = button.value;
    switch (true) {
        case(figures == "square"):
        document.getElementById("container__figure").innerHTML ='<img src="./img/square.png" /> <br/> <p> Please, enter one side of the square, and then calc the area</p>'; ;
        break;
        case(figures == "circle"):
        document.getElementById("container__figure").innerHTML ='<img src="./img/circle.png" /> <br/> <p> Please, enter the radius of the circle, and then calc the area</p>'; ;
        break;
        case(figures == "triangle"):
        document.getElementById("container__figure").innerHTML ='<img src="./img/triangle.png" /> <br/> <p> Please, enter height and base of the triangle, and then calc the area</p>'; ;
        break;
        default:
        document.getElementById("container__figure").innerHTML = "Please, insert one of the figures in the list";   
    }
}

function calcArea(){
    const button = document.getElementById("container__input");
    figures = button.value;
    switch (true) {
        case(figures == "square"):
        area =document.getElementById("l1");
        side1 = parseInt(area.value);
        totalArea = side1 * side1;
        document.getElementById("result").innerHTML = "El area es de " + totalArea + "cm2"
        break;
        case(figures == "circle"):
        area =document.getElementById("l1");
        side1 = parseInt(area.value);
        totalArea = (side1 * side1) * Math.PI;
        document.getElementById("result").innerHTML = "El area es de " + totalArea + "cm2"
        break;
        case(figures == "triangle"):
        area =document.getElementById("l1");
        area2 = document.getElementById("l2");
        side1 = parseInt(area.value);
        side2 = parseInt(area2.value);
        totalArea = (side1 * side2) / 2;
        document.getElementById("result").innerHTML = "El area es de " + totalArea + "cm2"
        break;
        default: 
        
    }
}