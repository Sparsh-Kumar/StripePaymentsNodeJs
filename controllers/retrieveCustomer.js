
// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');

// defining the retrieve customer controller

const retrieveCustomer = async (req, res) => {
    try {

        const customerID = req.params.customerID;
        stripe.customers.retrieve (
            customerID
        ).then ((customer) => {


            // returning the customer if no error
            return res.status (200).send ({
                status: 'success',
                customer
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

// exporting the retrieveCustomer controller
module.exports = {
    retrieveCustomer
}