function greetUser(name){
    return `Hello, ${name}`
}

let greetResult = greetUser("vishv")
console.log(greetResult)

function makeTea(teaType){
    return `Making, ${teaType}`
}

let teaOrder = makeTea("lemon tea")

console.log(teaOrder);

// -----------------

function addNumbers(a,b){
return a + b;
}

let sumResult = addNumbers(20, 30)

console.log(sumResult);

function calculateTotal(price, quantity){

    return price* quantity
}

let totalCost = calculateTotal(150,4)

console.log(totalCost)


// ----------------------------
const calculateTotal2 = (price, quantity) => price* quantity;

let updatedTotalCost = calculateTotal2(80,5)

console.log(updatedTotalCost)

// sec - 4

function orderTea(teaType){
    function confirmOrder(){
        return `teaType`
    }

    return confirmOrder

}

let orderConfirmation = orderTea("chai")

console.log(`Order confirmed for, ${orderConfirmation}`)





function makeTea(){}
function processTeaOrder(teaFunction){
}


processTeaOrder(makeTea)