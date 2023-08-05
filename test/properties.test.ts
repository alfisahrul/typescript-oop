describe('properties',()=>{
        class Customer{
            readonly id:number;
            name:string;
            age?:number;

            sayHello(name:string):void{
                console.log(`Hello ${name}, my name is ${this.name}`);
            }
            constructor(id:number,name:string) {
                this.id = id;
                this.name = name;
            }
        }
    it('should ', () => {

        const customer = new Customer(1,"alfi")
        customer.age = 20;

        console.log(customer.id);
        console.log(customer.name);
        console.log(customer.age);
        console.log(customer);
    });

    it('should ', () => {
        const customer = new Customer(1,"budi");
        customer.sayHello("alfi");
    });


})