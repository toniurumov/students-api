const mongoose = require ('mongoose');


const PostSchema = mongoose.Schema({
   studentName: {
      type: String,
      required: true
   },
   studentSpecialty: {
     type: String,
     required: true
  },
   date: {
     type: Date,
     default: Date.now
   }
});


module.exports = mongoose.model('Posts' , PostSchema);
