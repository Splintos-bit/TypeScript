"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var menu = [
    { id: 1, name: "marghareta1", price: 18 },
    { id: 2, name: "marghareta2", price: 28 },
    { id: 3, name: "marghareta3", price: 38 },
    { id: 4, name: "marghareta4", price: 48 },
    { id: 5, name: "marghareta5", price: 58 },
];
var cashRegister = 100;
var orderQueue = [];
// Adds a pizza to the menu with an auto-generated ID
function addPizzaToMenu(newPizza) {
    var newId = getNextId();
    var pizzaWithId = __assign({ id: newId }, newPizza); // Add the auto-generated ID
    menu = __spreadArray(__spreadArray([], menu, true), [pizzaWithId], false);
    console.log("Updated Menu !: ", menu);
}
// Places an order and adds it to the queue
function placeOrder(pizzaIds) {
    var orderedPizzas = [];
    var _loop_1 = function (id) {
        var pizza = menu.find(function (p) { return p.id === id; });
        if (pizza)
            orderedPizzas.push(pizza);
    };
    for (var _i = 0, pizzaIds_1 = pizzaIds; _i < pizzaIds_1.length; _i++) {
        var id = pizzaIds_1[_i];
        _loop_1(id);
    }
    if (orderedPizzas.length === 0) {
        console.log("No valid pizzas in order.");
        return;
    }
    var newOrder = {
        pizza: orderedPizzas,
        status: "Ordered",
    };
    orderQueue.push(newOrder);
    console.log("Order placed:", newOrder);
}
// Processes the next order in the queue
function completeOrder() {
    var order = orderQueue.find(function (o) { return o.status === "Ordered"; });
    if (!order) {
        console.log("No orders to process.");
        return;
    }
    order.status = "Complete";
    var total = order.pizza.reduce(function (sum, p) { return sum + p.price; }, 0);
    cashRegister += total;
    console.log("Order completed. Total: $".concat(total, ". Cash register: $").concat(cashRegister));
}
// Generates the next unique ID for a pizza
function getNextId() {
    return menu.length > 0 ? Math.max.apply(Math, menu.map(function (p) { return p.id; })) + 1 : 1;
}
// Example Usage:
addPizzaToMenu({ name: "marghareta6", price: 68 }); // ID auto-assigned
addPizzaToMenu({ name: "marghareta7", price: 78 }); // ID auto-assigned
placeOrder([6, 7]); // Place order for pizzas with IDs 6 and 7
completeOrder(); // Process the order, updating cash register
