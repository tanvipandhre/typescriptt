"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    // private firstname:string;
    // private lastname:string;
    //  constructor(fn:string,ln:string){
    //      this.firstname=fn;
    //      this.lastname=ln;
    //  }
    function Customer(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    Object.defineProperty(Customer.prototype, "firstName", {
        // public getFirstName(): string{
        //     return this.firstname;
        // }
        // public setFirstName(fn:string): void{
        //     this.firstname=fn;
        // }
        // public getLastName(): string{
        //     return this.lastname;
        // }
        // public setLastName(ln:string): void{
        //     this.lastname=ln;
        // }
        get: function () {
            return this.firstname;
        },
        set: function (fn) {
            this.firstname = fn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this.lastname;
        },
        set: function (ln) {
            this.lastname = ln;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
// let customer1 =  new Customer();
// customer1.firstname = "Tanvi";
// customer1.lastname = "Pandhre";
// console.log(`Hi ${customer1.firstname} ${customer1.lastname}`);
//let customer2 = new Customer("Khushi");
//console.log("%c Happy birthday "+customer2.firstname,'font-size: 36px; font-weight: bold');
// let customer3 = new Customer("Khushi");
// customer3.setFirstName("Anjani");
// customer3.setLastName("Sagare");
//console.log(customer3.getFirstName());
//console.log(customer3.getLastName());
//console.log(`Hi ${customer3.getFirstName()} ${customer3.getLastName()}`);
//console.log("%c Big message", "font-size: 100px; font-weight: bold");
var customer4 = new Customer("Khushi", "Sagare");
customer4.firstName = "Anjani"; //automatically set is called
customer4.lastName = "Sagare";
console.log(customer4.firstName + customer4.lastName); //automatically get is called
