

// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');


// defining the updateCustomer controller
const updateCustomer = async (req, res) => {

    try {

        const customerID = req.params.customerID;
        const updatedBody = req.body;
        stripe.customers.update (
        
            customerID,
            updatedBody
        
        ).then ((updatedCustomer) => {

            return res.status (200).send ({
                status: 'success',
                updatedCustomer
            })

        }).catch ((error) => {
            
            // catching and returning the error
            return res.status (401).send ({
                status: 'failure',
                message: error.message
            })
        })

    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }
}


// exporting the updateCustomer controller
module.exports = {
    updateCustomer
}