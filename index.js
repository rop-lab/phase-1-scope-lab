var customerName = "bob"; // Declare customerName in global scope using var

function upperCaseCustomerName() {
    customerName.toUpperCase(); // Accesses and uppercases the global customerName variable
}

var customerName = "bob"; // Declare customerName in global scope using var

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Accesses and uppercases the global customerName variable
}

function setBestCustomer() {
    bestCustomer = "not bob"; // Declares bestCustomer in global scope from inside a function
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Changes the bestCustomer variable in global scope
}

const leastFavoriteCustomer = "someone"; // Declare leastFavoriteCustomer as a constant in global scope

function changeLeastFavoriteCustomer() {
    // Attempting to change a constant (will result in an error)
    leastFavoriteCustomer = "someone else"; // This line will throw an error
}
