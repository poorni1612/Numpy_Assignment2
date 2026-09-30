

const customers = [{ customerNumber: 0, customerName: "John", customerType: "Regular", totalPurchaseAmount: 1000 }, { customerNumber: 1, customerName: "Smith", customerType: "Premium", totalPurchaseAmount: 2000 },
{ customerNumber: 2, customerName: "David", customerType: "Regular", totalPurchaseAmount: 1500 }, { customerNumber: 3, customerName: "Michael", customerType: "Premium", totalPurchaseAmount: 3000 }
];


let selectedCustomerNumber = 3;
let actionChoice = 3;
let paymentMethod = 2;
//================================================================================================Option 1========================================================================================================================//
const customer = customers[selectedCustomerNumber];
let discountRate;
if (customer.customerType == "Premium") {
    if (customer.totalPurchaseAmount >= 5000) {
        discountRate = 20;
    }
    else if (customer.totalPurchaseAmount < 5000) {
        discountRate = 10;
    }
}
if (customer.customerType == "Regular") {
    if (customer.totalPurchaseAmount >= 5000) {
        discountRate = 10;
    }
    else if (customer.totalPurchaseAmount < 5000) {
        discountRate = 5;
    }
}
const discountAmount = (customer.totalPurchaseAmount * discountRate) / 100;
const gstAmount = (customer.totalPurchaseAmount * 18) / 100;
const finalBillAmount = customer.totalPurchaseAmount - discountAmount + gstAmount;

console.log(`Customer: ${customer.customerName}, Type: ${customer.customerType}, Total Purchase Amount: ${customer.totalPurchaseAmount}, Discount Rate: ${discountRate}%, Discount Amount: ${discountAmount}, GST Amount: ${gstAmount}, Final Bill Amount: ${finalBillAmount}`);

switch (actionChoice) {
    case 1:
        console.log(`Customer : ${customer.customerName},Purchase Amount: ${customer.totalPurchaseAmount}, Discount Rate: ${discountRate}%, Discount Amount: ${discountAmount}`);
        break;
    case 2:
        console.log(`Customer : ${customer.customerName},Purchase Amount: ${customer.totalPurchaseAmount}, GST Amount: ${gstAmount}`);
        break;
    case 3:
        console.log(`Customer : ${customer.customerName},Purchase Amount: ${customer.totalPurchaseAmount}, Final Bill Amount: ${finalBillAmount}`);
        break;
    case 4:
        console.log(`Customer : ${customer.customerName},Purchase Amount: ${customer.totalPurchaseAmount}, Payment Methods Available: Credit Card, Debit Card, Net Banking`);
        break;
    default:
        console.log("Invalid Choice");
        break;
}
