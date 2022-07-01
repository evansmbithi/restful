// multiline import
import { addNewContact,
        getContacts,
        getContactsWithID,
        updateContact,
        deleteContact
} from '../controllers/crmController.js';

 /*
	* routes to call URL and get sth back
	* use routes to define endpoints

	* middleware functions that have access to the request and response objects
 
	* call another function in the stack using next
	* the next argument passed in get() allows us to call in to another function once we executed the first one.
	* next function from the express library to use middleware in the middle of the get request

	* we're basically giving information about what is this request from and 
	* what is this request method and then we're using next to pass to the next function 
	* where we do the response directly to the front end.
	* 
	*/
const routes = (app) => {
    app.route('/contact')
			/*
				.get((req, res, next) => {
						// middleware
						//  print out information about the request from the front end or postman. 
						console.log(`Request from: ${req.originalUrl}`);
						// print the method of that request
						console.log(`Request type: ${req.method}`);
						next();
				}, (req, res, next) => {
						res.send('GET request successful')
				})

				.post((req, res) => 
						res.send('POST request successful'));
			*/

        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`); // request from the front end or postman. 
            console.log(`Request type: ${req.method}`); // the method of that request
            next();
        }, getContacts)        

        .post(addNewContact); // post endpoint


// routes for specific endpoints
    app.route('/contact/:contactID')
		/**
		 * .put((req, res) => 
            res.send('PUT request successful'))

				.delete((req, res) => 
            res.send('DELETE request successful'));
		 */
				
        .get(getContactsWithID) // GET specific contact
    
        .put(updateContact) // update a specific contact

        .delete(deleteContact); // delete a specific contact
}

export default routes;