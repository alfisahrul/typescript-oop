describe('inheritance',()=>{
    class Employee{
        name:string;
        constructor(name:string) {
            this.name = name;
        }
    }

    class Manager extends Employee{

    }

    class Director extends Employee{

    }


    it('should ', () => {

        const employee = new Employee("Alfi");

        console.log(employee.name);


        const manager = new Manager("sahrul");
        console.log(manager.name);

        const director = new Director("budi");
        console.log(director.name);




    });
})
