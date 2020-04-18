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
