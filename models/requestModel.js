import mongoose from 'mongoose'
//const mongoose= require('mongoose')

const Schema = mongoose.Schema




const requestsSchema =  mongoose.Schema({
   


       requestObject:{type: mongoose.Schema.Types.Mixed ,required:false },
        
        is_deleted:{type:Boolean ,required:false },

        last_updated_by:{type:mongoose.Schema.Types.ObjectId,required:false},
        form_id:{type:mongoose.Schema.Types.ObjectId,required:false},
        retailer_id:{type:mongoose.Schema.Types.ObjectId,required:false},
       retailer_farmer_id:{type:mongoose.Schema.Types.ObjectId,required:false},
      
        totalAmount:{type:String,required:false},
        status:{type:String,required:false},
       invoice:{type:String,required:false},
       name:{type:String,required:false},
      paymentTerms:{type:String,required:false},
      farmerName:{type:String,required:false},
      maturityDate : { type : Date, default: Date.now },
      paymentDueDate : { type : Date, default: Date.now },
      approvedDate : { type : Date, default: Date.now },
      farmerId: {type: Number ,required:false},
      products: { type: [String], required: false },



        
        
        
},{timestamps:true,strict:false /*you want a createdAt? you add timestamps:true*/})


const Requests = mongoose.model('Requests',requestsSchema)

/*the this Requests you export, you set a new instance
 of it anytime you want to save it to database
 N.B MongoDB uses mongoose ORM/ODM unlinke SQL databases cuz
 sql databases come with a structure that you put in through a GUI
 
 coming back a year later.. this statement is not exactly true
 
 SQL HAS ITS OWN ORM
 
 */

//exports.Requests = Requests
export default Requests