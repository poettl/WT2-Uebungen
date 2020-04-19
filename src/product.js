class product{
    constructor(name, price, massDiscount){
        this._name = name;
        this._price = price;
        this._massDiscount = massDiscount
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get price(){
        return this._price;
    }

    set price(price){
        this._price = price;
    }

    get pricePerWeek(){
        return this._price * 7 * (1-_massDiscount); //applies the mass discount 
    }

    get pricePerMonth(){
        return this._price * 30 * (1-_massDiscount*2) //doubles the mass discount for the month
    }
}

export default product;