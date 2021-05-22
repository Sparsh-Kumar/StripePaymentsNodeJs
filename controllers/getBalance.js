

// importing all the dependencies
const path = require ('path');
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);

/*
    Retrieves the current account balance, based on the authentication that was used to make the request.
*/

// defining the getBalance controller
const getBalance = async (req, res) => {

    try {
        
        // getting the balance
        stripe.balance.retrieve ().then ((balanceInfo) => {

            return res.status (200).send ({
                status: 'success',
                balanceInfo
            })

        }).catch ((error) => {

            // catching and showing the error
            return res.status (401).send ({
                status: 'failure',
                message: error.message
            })
        })

    } catch (error) {

        // catching and showing the error
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }
}

// exporting the getBalance controller

module.exports = {
    getBalance
}