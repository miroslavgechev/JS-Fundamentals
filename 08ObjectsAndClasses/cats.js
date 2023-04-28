function cats(input){

    class Cat{
        constructor(name, age){
            this.name = name,
            this.age = age
        };

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        };
    };

    for(let element of input){
        let currentCatData = element.split(' ');
        let currentCatName = currentCatData[0];
        let currentCatAge = currentCatData[1];
        let currentCat = new Cat(currentCatName, currentCatAge);
        currentCat.meow();
    }

}

cats(['Mellow 2', 'Tom 5'])