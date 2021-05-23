

// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);

/*
    Retrieves the details of a charge that has previously been created.
    Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information.
    The same information is returned when creating or refunding the charge.
*/


const retrieveCharge = async (req, res) => {

    try {

        if (!req.params.chargeID) {
            throw new Error ('you have not passed chargeID with the request');
        }

        // retrieving the charge and return to the user
        const charge = stripe.charges.retrieve ().then ((charge) => {
            return res.status (200).send ({
                status: 'success',
                charge
            })

        }).catch ((error) => {

            // catching and returning the error to the user
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

// exporting the retrieveCharge controller
module.exports = {
    retrieveCharge
}