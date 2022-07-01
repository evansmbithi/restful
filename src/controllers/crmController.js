import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel.js";

/*
  * post endpoints (add new items to the db)
  * On the Contact constructor with mongoose, execute the model function 
  * and pass the Contact as the main object to create new contacts in the database;
  * leveraging the contacts schema as the model for our new contacts. 
  */
const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    
    let newContact = new Contact(req.body); // create new contact

    // if no error, save the new contact to the db
    newContact.save((err, contact) => {
        if (err){
            res.send(err);
        }
        res.json(contact);
    });
}

// endpoint to GET contacts
export const getContacts = (req, res) => {

    // if no error, save the new contact to the db
    Contact.find({}, (err, contact) => {
        if (err){
            res.send(err);
        }
        res.json(contact);
    });
}

// GET specific contact - specific id endpoint
export const getContactsWithID = (req, res) => {

    Contact.findById(req.params.contactID, (err, contact) => {
        if (err){
            res.send(err);
        }
        res.json(contact);
    });
}

// PUT endpoint
export const updateContact = (req, res) => {

    // new: true returns the updated value changing to false would return an old value
    // useFindAndModify:false ensures you don't get errors on deprecated values
    Contact.findOneAndUpdate({_id: req.params.contactID}, req.body, { new: true, useFindAndModify:false }, (err, contact) => {
        if (err){
            res.send(err);
        }
        res.json(contact);
    });
}

// DELETE endpoint
export const deleteContact = (req, res) => {
    Contact.remove({_id: req.params.contactID}, (err, contact) => {
        if (err){
            res.send(err);
        }
        // if delete was successful, respond with a message
        res.json({ message: 'successfully deleted contact' });
    });
}