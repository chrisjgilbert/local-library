var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true},
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true, min:3, max: 100},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true}
  }
);

// Virtual for bookinstance's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
