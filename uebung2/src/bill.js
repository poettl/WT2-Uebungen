class bill{
  constructor(date_of_issue, bill_number, costumername, taxnumber){
      this._date_of_issue = date_of_issue;
      this._bill_number = billnumber;
      this._costumername = costumername;
      this._taxnumber = taxnumber;
  }

  get date_of_issue(){
      return this._date_of_issue;
  }
  set date_of_issue(date_of_issue){
      if(date_of_issue != "" && date_of_issue!= null){
          this._date_of_issue = date_of_issue;
      }
  }

  get bill_number(){
      return this._billnumber;
  }
  set bill_number(bill_number){
      if(billnumber != "" && billnumber != null){
          this._billnumber = billnumber;
      }
  }

  get costumername(){
      return this._costumername;
  }
  set costumername(costumername){
      if(costumername != "" && costumername != null){
          this._costumername = costumername;
      }
  }

  get taxnumber(){
      return this._taxnumber;
  }
  set email(email){
      if(email != "" && email != null){
          this._taxnumber = taxnumber;
      }
  }

  var billSchema = {
    "type": "object",
    "properties": {
      "first_name": { "type": "string" },
      "last_name": { "type": "string" },
      "birthday": { "type": "string", "format": "date" },
  }
}

export default bill;