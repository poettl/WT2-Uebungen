class product{
    constructor(name, price, massDiscount, tax){
        this._name = name;
        this._price = price;
        this._pricePerDay = this.calcPricePerDay();
        this._pricePerWeek = this.calcPricePerWeek();
        this._massDiscount = massDiscount
        this._tax = tax;
    }

    get name(){
        return this._name;
    }

    set name(name){
        if(name != null && name != ""){
            this._name = name;
        }
    }

    get price(){
        return this._price;
    }

    set price(price){
        if(price != null && price != 0){
            this._price = price;
        } 
    }

    get pricePerDay(){
        return this._pricePerDay;
    }

    get pricePerWeek(){
        return this._pricePerWeek;
    }

    calcPricePerDay(){
        return this._price * 24 * (1-this._massDiscount) * (1 + this._tax); //applies the mass discount, if it's booked for a day, including taxes
    }

    calcPricePerWeek(){
        return this._price * 24 * 7 * (1-this._massDiscount*2) * (1 + this._tax) //doubles the mass discount for the week, including taxes
    }

    calcTaxAmount(){
        return this._price * this._tax; //returns the amout of taxes that are put on top of the prices
    }
}

export default product;