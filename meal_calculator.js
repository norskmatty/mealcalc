var diner = {
}

var rob = Object.create(diner);
var megan = Object.create(diner);
var steve = Object.create(diner);
var ashley = Object.create(diner);

var tax = 0.08;
var tip = 0.20;

rob.dish1 = getDish();
megan.dish1 = getDish();
steve.dish1 = getDish();
ashley.dish1 = getDish();

rob.dish2 = getDish();
megan.dish2 = getDish();
steve.dish2 = getDish();

rob.dish3 = getDish();
megan.dish3 = getDish();

console.log(rob.dish1);
console.log(megan.dish1);
console.log(steve.dish1);
console.log(ashley.dish1);

console.log(rob.dish2);
console.log(megan.dish2);
console.log(steve.dish2);

console.log(rob.dish3);
console.log(megan.dish3);

var robBill = getIndBill(rob);
var meganBill = getIndBill(megan);
var steveBill = getIndBill(steve);
var ashleyBill = getIndBill(ashley);

console.log("Rob Bill is " + robBill);
console.log("Megan Bill is " + meganBill);
console.log("Steve Bill is " + steveBill);
console.log("Ashley Bill is " + ashleyBill);

var totalBill = getTotalBill(robBill, meganBill, steveBill, ashleyBill);

console.log ("The total bill is " + totalBill);

robBill = robBill + (Math.round((robBill * tax) * 100) / 100);
meganBill = meganBill + (Math.round((meganBill * tax) * 100) / 100);
steveBill = steveBill + (Math.round((steveBill * tax) * 100) / 100);
ashleyBill = ashleyBill + (Math.round((ashleyBill * tax) * 100) / 100);

console.log("Rob's bill with tax is " + robBill);
console.log("Megan's bill with tax is " + meganBill);
console.log("Steve's bill with tax is " + steveBill);
console.log("Ashley's bill with tax is " + ashleyBill);

checkBill(totalBill, robBill, meganBill, steveBill, ashleyBill);

var tipTotal = Math.round((totalBill * tip) * 100) / 100;

console.log("Total Tip is " + tipTotal);

var tipPerDiner = Math.round((tipTotal / 4) * 100) / 100;

console.log("Tip per diner is " + tipPerDiner);

robBill += tipPerDiner;
meganBill += tipPerDiner;
steveBill += tipPerDiner;
ashleyBill += tipPerDiner;

console.log("Rob's Final Bill is " + robBill);
console.log("Megan's Final Bill is " + meganBill);
console.log("Steve's Final Bill is " + steveBill);
console.log("Ashley's Final Bill is " + ashleyBill);

function getDish() {
    var value = Math.floor((Math.random() * 100) + 1);
    return value;
}

function getIndBill(ind) {
    var bill = 0;
    for (var key in ind) {
        if (ind.hasOwnProperty(key)) {
            bill += ind[key];
        }
    }
    return bill;
}

function getTotalBill(one, two, three, four) {
    var total = one + two + three + four;
    return total;
}

function checkBill(total, rob, megan, steve, ashley) {
    var dinersCombined = rob + megan + steve + ashley;
    if (total != dinersCombined) {
        var diff = total - dinersCombined;
        rob += diff;
        return rob;
    }
}