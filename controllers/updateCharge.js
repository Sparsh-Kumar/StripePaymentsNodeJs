

// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');

/*
    Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
*/

// defining the updateCharge controller

const updateCharge = async (req, res) => {

    try {

        if (!req.params.chargeID) {
            throw new Error ('mandatory to specify the chargeID');
        }

        const chargeID = req.params.chargeID;
        const { metadata } = _.pick (req.body, ['metadata']);
        stripe.charges.update (chargeID, metadata).then ((updatedCharge) => {

            // returning the updatedCharge
            return res.status (200).send ({
                status: 'success',
                updatedCharge
            })

        }).catch ((error) => {

            // capturing and returning the error
            return res.status (401).send ({
                status: 'failure',
                message: error.message
            })
        })

    } catch (error) {

        // capturing and returning the error
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }
}

// exporting the updateCharge controller
module.exports = {
    updateCharge
}