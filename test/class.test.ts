describe('Class',()=>{
    class Customer{
        readonly id:number;
        name:string;
        age?:number;
        constructor(id:number,name:string) {
            this.id = id;
            this.name = name;
        }
    }

    class  Order{

    }

    it('should',()=>{


        const customer = new Customer();

        const order = new Order();

    })

    it('should ', () => {
        new Customer();
        new Customer();
    });
})