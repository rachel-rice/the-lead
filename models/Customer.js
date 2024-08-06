const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerNumber: {
        type: String,
        required:true
    },
    website: {
      type:String, 
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    // image: {
    //     type: String,
    //     require: true,
    //   },
    // cloudinaryId: {
    //     type: String,
    //     require: true,
    //   },
   
    description: {
        type: String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model('Post', PostSchema)