
// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');


// defining the listAllFiles controller
const listAllFiles = async (req, res) => {

    try {

        stripe.files.list ({ limit: 5 }).then ((files) => {

            // returning the response
            return res.status (200).send ({
                status: 'success',
                files
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

// exporting the listAllFiles controller
module.exports = {
    listAllFiles
}