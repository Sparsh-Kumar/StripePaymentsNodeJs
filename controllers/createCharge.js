

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

    } catch (error) {
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