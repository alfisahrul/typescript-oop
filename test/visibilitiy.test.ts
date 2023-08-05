describe('visibility',()=>{
    class Counter {
        public counter:number = 0;

        public increment():void{
            this.counter++;
        }

        public getCounter():number{
            return this.counter;
        }
    }
        class DoubleCounter extends Counter{
            public increment() {
                this.counter += 2;
            }
        }

    it('should support privete', () => {
        const counter = new DoubleCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.log(counter.getCounter());

    });
})