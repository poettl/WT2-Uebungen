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
        this._telnumber=telnumber;
    }

    get email(){
        return this._email;
    }
   
    set email(email){
        this._email=email;
    }
}

export default costumer;
