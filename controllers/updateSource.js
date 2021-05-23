
// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');


// defining the updateSource controller
const updateSource = async (req, res) => {

    try {

        // checking for sourceID
        if (!req.params.sourceID) {
            throw new Error ('please pass the source ID along with this request');
        }

        let obj = {};
        const { metadata, owner } = _.pick (req.body, ['metadata', 'owner']);
        if (metadata) {
            obj.metadata = metadata;
        }
        if (owner) {
            obj.owner = owner;
        }
        const sourceID = req.params.sourceID;
        stripe.sources.update (sourceID, obj).then ((updatedSource) => {

            // returning the updatedSource
            return res.status (200).send ({
                status: 'success',
                updatedSource
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

// exporting the updateSource controller
module.exports = {
    updateSource
}