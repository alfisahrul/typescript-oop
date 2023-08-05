describe('super constructor',()=>{
    class Person{
        name:string;

        constructor(name:string) {
            this.name = name;
        }


    }

    class Employee extends Person{
        departement:string;

        constructor(name:string, departement:string) {

            super(name);
            this.departement = departement;
        }

    }

    it('should ', () => {
        const employee = new Employee("ALFI","TECH");
        console.log(employee.name);
        console.log(employee.departement);
    });
})