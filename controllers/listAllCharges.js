
// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');

/*
    Returns a list of charges you’ve previously created.
    The charges are returned in sorted order, with the most recent charges appearing first.
*/

// defining the listAllCharges controller

const listAllCharges = async (req, res) => {
 
    try {

        stripe.charges.list ({
            limit: 10 // getting 10 charges from the top
        }).then ((charges) => {

            // returning the list of charges
            return res.status (200).send ({
                status: 'success',
                charges
            })

        }).catch ((error) => {

            // capturing and returning the error
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

// exporting the listAllCharges controller
module.exports = {
    listAllCharges
}