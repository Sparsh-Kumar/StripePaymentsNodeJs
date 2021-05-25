

// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');


// defining the getAllCustomers controller
const getAllCustomers = async (req, res) => {

    try {

        stripe.customers.list ({ limit: 3 }).then ((customerList) => {

            return res.status (200).send ({
                status: 'success',
                customerList
            })

        }).catch ((error) => {

            return res.status (401).send ({
                status: 'failure',
                message: error.message
            })
        })

    } catch (error) {

        // catching and returning the error
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }
}

// exporting the getAllCustomers controller
module.exports = {
    getAllCustomers
}