describe('polymorphism',()=>{
    class Employee {
        constructor(public name:string) {

        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Employee{

    }

    function sayHello(employee:Employee):void{
        if(employee instanceof VicePresident){
            const vp = employee as VicePresident;
            console.log(`Hello Vp ${vp.name}`)
        }else if(employee instanceof Manager){
            const manager = employee as Manager;
            console.log(`Hello manager ${manager.name}`);
        }else{
            console.log(`hello employee ${employee.name}`);
        }
    }

    it('should ', () => {
        let employee:Employee = new Employee("Alfi");
        console.log(employee);

        employee = new Manager("Sahrul");
        console.log(employee);

        employee = new VicePresident("shobirin");
        console.log(employee);

    });
    it('should ', () => {
        sayHello(new Employee("Alfi"))
        sayHello(new Manager("eko"))
        sayHello(new VicePresident("budi"))
    });


})