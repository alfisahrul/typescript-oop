
describe('interface',()=>{
        interface Hasname{
            name:string;

        }
        interface CanSayHello{
            sayHello(name:string):void;
        }

        class Person implements Hasname,CanSayHello{
            name:string;


            constructor(name:string) {
                this.name = name;
            }

            sayHello(name:string):void{
                console.log(`hello${name}, my name is ${this.name}`);

            }
        }


    it('should interface', () => {

        const person = new Person("Alfi");
        person.sayHello("budi");
    });
})