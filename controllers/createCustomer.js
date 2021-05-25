

// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');


/*
    Customer objects allow you to perform recurring charges, and to track multiple charges,
    that are associated with the same customer. The API allows you to create, delete, and update your customers.
    You can retrieve individual customers as well as a list of all your customers.
*/


// defining the createCustomer controller
const createCustomer = async (req, res) => {
    
    try {

        const { description } = _.pick (req.body, ['description'])
        if (!description) {
            throw new Error ('please enter the description of the customer you want to create');
        }

        // creating the customer
        stripe.customers.create ({
            description
        }).then ((createdCustomer) => {

            return res.status (200).send ({
                status: 'success',
                createdCustomer
            })

        }).catch ((error) => {
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

// exporting the createCustomer
module.exports = {
    createCustomer
}