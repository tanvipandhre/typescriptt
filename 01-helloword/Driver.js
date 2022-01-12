"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
;
var customer5 = new Customer_1.Customer("Tanvi", "Pandhre");
customer5.firstName = "Tanvi"; //automatically set is called
customer5.lastName = "Pandhre";
console.log(customer5.firstName + customer5.lastName);
