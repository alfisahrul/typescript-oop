describe('parameter properties',()=>{
    class Person{
        constructor(public name:string) {

        }
    }


    it('should ', () => {
        const person = new Person("ALFI");
        console.log(person.name);

        person.name = "budi"
        console.log(person.name)
    });
})
