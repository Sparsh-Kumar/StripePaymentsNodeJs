
// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');


// defining the getSource controller
const getSource = async (req, res) => {

    try {

        // checking for sourceID
        if (!req.params.sourceID) {
            throw new Error ('please pass the source ID along with the request');
        }

        const sourceID = req.params.sourceID;
        stripe.sources.retrieve (
            sourceID
        ).then ((source) => {

            // returning the source
            return res.status (200).send ({
                status: 'success',
                source
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

// exporting the getSource controller
module.exports = {
    getSource
}