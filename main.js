//taske 1 + 2 + 3 + 4 
class Car{
    make;
    model;
    constructor (make,model){
       this.make=make;
       this.model=model;
    }
    start(){
        console.log("the car has started");
       }
};
let cars = new Car('BMW','2024');
console.log(cars.make,cars.model);
cars.start()


class ElectricCar extends Car{
    battery_size;
};
let elect = new ElectricCar('TOYOTA','2018');
console.log(elect.make,elect.model);

//taske 5 
class Account {
#balance;
 depost(amount){
this.#balance+=amount;
}
withdrow(amount){

    if(amount>this.#balance){
        console.log('is not allowed');
    }
    else{
        this.#balance-=amount;;
    }
}
sitbalance(balance){
    this.#balance=balance
}
getbalance(){
    return this.#balance
}

}
let account1 =new Account();

account1.sitbalance(100);

console.log(account1.getbalance())

account1.withdrow(10);
console.log(account1.withdrow())