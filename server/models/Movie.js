var mongoose = require('mongoose');

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  plot_summary: {
    type: String,
    required: true
  },
  main_actors: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  critic: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  },
});

// Export the model schema.
module.exports = MovieSchema;


