describe('instance of',()=>{
    class Employee{}
        class Manager {}
        const budi = new Employee();
        const alfi = new Manager();
    it('should ', () => {
        console.log(typeof budi);
    console.log(typeof alfi);
    });

    it('should ', () => {
        expect(budi instanceof Employee).toBe(true);
        expect(budi instanceof Manager).toBe(false);


        expect(alfi instanceof Employee).toBe(false);
        expect(alfi instanceof Manager).toBe(true);

    });
})