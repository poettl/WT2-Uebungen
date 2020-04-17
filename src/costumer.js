class costumer{
    constructor(name, adress, telnumber, email){
        this.name = name;
        this.adress = adress;
        this.telnumber = telnumber;
        this.email = email;
    }

    get name(){
        return this.name;
    }

    get adress(){
        return this.adress;
    }

    get telnumber(){
        return this.telnumber;
    }

    get email(){
        return this.email;
    }

    set name(name){
        this.name=name;
    }

    set adress(adress){
        this.adress=adress;
    }

    set telnumber(telnumber){
        this.telnumber=telnumber;
    }

    set email(email){
        this.email=email;
    }
}

export default costumer;
