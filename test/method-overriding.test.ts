describe('Method overiding',()=>{
    class Employee{
        name:string;

        constructor(name:string)
        {
            this.name = name;
        }
        sayHello(name:string):void{
            console.log(`Hello ${name}, my name is ${this.name}`);

        }
    }

    class Manager extends Employee {

        sayHello(name:string):void{
            super.sayHello(name);
            console.log(`and , i am your manager`);
        }


    }

    it('should ', () => {
        const employee = new Employee("Alfi");
        employee.sayHello("Budi");

        const manager = new Manager("ALFI");
        manager.sayHello("Budi");
    });
})
