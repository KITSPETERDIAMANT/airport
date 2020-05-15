const mongoose = require('mongoose')
const Schema = mongoose.Schema
let Flights = new Schema({
  scheduled: {
    type: String
  },
  flight: {
    type: String
  },
  arriving_from: {
    type: String
  },
  airport: {
    type: String
  },
  status: {
    type: String
  },
  terminal: {
    type: String
  }
})
module.exports = mongoose.model('Flights', Flights)
