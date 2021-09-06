const list1 = [1,2,2,2,3,3,3,3,4,4,5,6];
/*const list2 = [[9, 5], 
    [9, 10],
    [9, 2]];*/
const list2 = [{note:9, cred:7},{note:5, cred:5},{note:3, cred:8}]
let allList = 0;

function prom(list){
//for (let i = 0; i < list.length; i++){
 //  allList += list[i];

//}
allList = list.reduce(function(acumulator = 0, current){
     return acumulator + current;
})
const average = allList / list.length;
document.write("average is " + average);
}

function med(list){
 let middle = 0;
 let mediana = 0;
 let middle1 = 0;
 let middle2 = 0;
if (list.length % 2 == 0){
    middle1 = list[list.length / 2];
    middle2 = list[(list.length/2) - 1];
    mediana = (middle1 + middle2)/2;   
}
else {
    middle = Math.floor(list.length/2);  
    mediana = list[middle]
}
return mediana;
}

/*let list1count = []

list1.map(function(element){
     if (list1count[element]){
         list1count [element] += 1;
 }
     else{
        list1count [element] = 1;
}
})*/

function mode(list){
var robj = {}
 list.map(function(obj){

    if (robj[obj]){
        robj[obj] += 1;
        return robj;
    }
    else {
        robj [obj] = 1;
        return robj;
    }
})

var robj1 = Object.entries(robj).sort(function (elementA, elementB){
    return elementA[1] - elementB[1];
})

var moda = robj1 [robj1.length - 1];
return moda;
}

/*var sum = list2.reduce(function(obj1, obj2){
    return (obj1[0] * obj1 [1]) + (obj2[0] * obj2[1]);
})

var sum1 = list2.reduce(function(obj3=0, obj4){
    return obj3 + obj4;
})

var pond = sum/sum1;*/

function pondAverage(list){
var sum = 0;
var sum1 = 0;
for(i=0; i<list.length;i++){
    sum += list[i].note*list[i].cred;
}
for(i=0;i<list.length;i++){
    sum1 += list[i].cred;
}

var pond = sum/sum1
}