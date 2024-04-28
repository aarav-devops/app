// Example model schema
const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  // Define schema fields
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Example', exampleSchema);
