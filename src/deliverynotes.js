// id:1,
// kundenId:1,
// price: 100,
// dauer: 1000,
// bezahlt: true,
// date: new Date()
class deliverynotes {
  constructor(id, customer, price, count, paid, date) {
    this.id = id;
    this.customer = customer;
    this.price = price;
    this.count = count;
    this.paid = paid;
    this.date = date;
  }

  hasPaid() {
    return this.paid;
  }

  totalPrice() {
    return this.price * this.count;
  }
}

export default deliverynotes;
