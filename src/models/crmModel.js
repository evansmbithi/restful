import mongoose from "mongoose";

/** define the schema
 * The Schema is what dictates what types 
 * of data and the structure of your data your 
 * database takes. 
 * if you define the first name key to take only strings as data the 
 * database will not accept anything else. 
 * Therefore the Schema defines the rules related to 
 * what your database can accept. 
 */

const Schema = mongoose.Schema; // schema object leveraging the schema from mongoose to create a new schema

export const ContactSchema = new Schema({
    // schema types
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    // if no type then default to current date
    // have a date when this data has been created
    created_date: {
        type: Date,
        default: Date.now
    }
})