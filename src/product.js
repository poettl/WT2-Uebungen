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

    get pricePerDay(){
        return this._price * 24 * (1-_massDiscount); //applies the mass discount, if it's booked for a day
    }

    get pricePerWeek(){
        return this._price * 24 * 7 * (1-_massDiscount*2) //doubles the mass discount for the week
    }
}

export default product;