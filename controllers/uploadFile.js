



// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);
const _ = require ('lodash');


/*
    This is an object representing a file hosted on Stripe's servers.
    The file may have been uploaded by yourself using the create file request (for example, when uploading dispute evidence)
    or it may have been created by Stripe (for example, the results of a Sigma scheduled query).
*/

// defining the uploadFile controller

const uploadFile = async (req, res) => {

    try {


    } catch (error) {

        // catching and returning the error
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }
}

// exporting the uploadFile controller
module.exports = {
    uploadFile
}