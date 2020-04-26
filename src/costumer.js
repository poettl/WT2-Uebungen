class costumer{
    constructor(name, adress, telnumber, email){
        this._name = name;
        this._adress = adress;
        this._telnumber = telnumber;
        this._email = email;
    }

    get name(){
        return this._name;
    }
    set name(name){
        if(name != "" && name != null){
            this._name=name;
        }
    }

    get adress(){
        return this._adress;
    }
    set adress(adress){
        if(adress != "" && adress != null){
            this._adress=adress;
        }
    }

    get telnumber(){
        return this._telnumber;
    }
    set telnumber(telnumber){
        if(telnumber != "" && telnumber != null){
            this._telnumber=telnumber;
        }
    }

    get email(){
        return this._email;
    }
    set email(email){
        if(email != "" && email != null){
            this._email=email;
        }
    }
}

export default costumer;
