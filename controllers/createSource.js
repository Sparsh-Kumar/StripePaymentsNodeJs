
// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');


// defining the create source controller
const createSource = async (req, res) => {

    try {

        // checking for all required fields 
        const { type, currency, owner } = _.pick (req.body, ['type', 'currency', 'owner']);
        if (!type || !currency || !owner) {
            throw new Error ('please enter all the required fields');
        }

        // creating the source
        stripe.sources.create (
            {
                type,
                currency,
                owner
            }
        ).then ((createdSource) => {

            return res.status (200).send ({
                status: 'success',
                createdSource
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

// exporting the create source controller
module.exports = {
    createSource
}