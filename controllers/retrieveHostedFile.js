
// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');

// defining the retrieveHostedFile controller

const retrieveHostedFile = async (req, res) => {

    try {

        const fileID = req.params.fileID;
        stripe.files.retrieve (
            fileID
        ).then ((file) => {

            return res.status (200).send ({
                status: 'success',
                file
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

// exporting the retrieveHostedFile controller
module.exports = {
    retrieveHostedFile
}