var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
class Deliverynote {
  constructor(id, customer, price, count, paid, date, product) {
    this.id = id;
    this.customer = customer;
    this.price = price;
    this.product = product;
    this.count = count;
    this.paid = paid;
    this.date = date;
  }
}
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Deliverynote {
    customer: Int,
    price: Float,
    count: Int,
    paid: Boolean,
    date: String
  },
  type Query {
    deliverynote(id:Int!): Deliverynote,
    deliverynotes: [Deliverynote]
  }
`);
var myobj = [
  new Deliverynote(1, 1, 10.0, 15, false, new Date().toDateString(), 1),
  new Deliverynote(2, 2, 50.0, 15, false, new Date().toDateString(), 2),
  new Deliverynote(3, 3, 11.0, 5, true, new Date().toDateString(), 3),
  new Deliverynote(4, 4, 15.0, 1, false, new Date().toDateString(), 4),
  new Deliverynote(5, 5, 11.0, 7, true, new Date().toDateString(), 5),
];

// The root provides a resolver function for each API endpoint
var root = {
  deliverynotes: () => {
    return myobj;
  },
  deliverynote: ({ id }) => {
    return myobj.find((x) => x.id === id);
  },
};

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
