// let input = "1213";
// // console.log(input.reverse());
// // console.log(input.reverse());
// // let spil1=input.split(',');
// // let rev1=spil1.reverse();
// console.log(rev1)
// function pallindrom() {
//     if (rev1 === input) {
//         console.log("palindrom ast")
//     } else {
//         console.log("palindrom nnnnnnnnist!!!!!!    ")
//     }
// }
function pallindrom(str){
    // split = String ---> Array
    var splitString= str.split("");
    // Reverse = Reverse
    var reverseArray=splitString.reverse();
    //join = Array ---> String
    var joinArray=reverseArray.join("");

    if (joinArray===str){
        console.log("add palindrom ast");
    }else {
        console.log("NIST!")
    }

}