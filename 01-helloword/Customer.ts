export class Customer{
    // private firstname:string;
    // private lastname:string;
    //  constructor(fn:string,ln:string){
    //      this.firstname=fn;
    //      this.lastname=ln;
    //  }
    constructor(private firstname:string,private lastname:string){
        
    }
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
    get firstName(): string{
        return this.firstname;
    }
    set firstName(fn:string){
        this.firstname=fn;
    }
    get lastName(): string{
        return this.lastname;
    }
    set lastName(ln:string){
        this.lastname=ln;
    }
}
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
let customer4 = new Customer("Khushi","Sagare");
customer4.firstName="Anjani"; //automatically set is called
customer4.lastName="Sagare";
console.log(customer4.firstName + customer4.lastName); //automatically get is called
