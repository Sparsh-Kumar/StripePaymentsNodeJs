

// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');

/*
    To charge a credit card or other payment source, you create a Charge object. If your API key is in test mode, the supplied payment source (e.g., card) won’t actually be charged, 
    although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).
*/

const createCharge = async (req, res) => {

    try {
        
        const { amount, currency, source, description } = _.pick (req.body, ['amount', 'currency', 'source', 'description']);
        if (!amount || !currency || !source || !description) {
            throw new Error ('please enter all required fields');
        }

        // if all fields are there then creating a charge
        stripe.charges.create ({
            
            amount,
            currency,
            source, // please create the source using source endpoint before creating the charge as (source or token required to create a charge)
            description

        }).then ((charge) => {

            return res.status (200).send ({
                status: 'success',
                charge
            })

        }).catch ((error) => {

            // catching and returning the error
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

// exporting the createCharege controller
module.exports = {
    createCharge
}