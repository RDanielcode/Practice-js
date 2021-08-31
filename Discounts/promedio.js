const list1 = [1,2,3,4,5,6];
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

