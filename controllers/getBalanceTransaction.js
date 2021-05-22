

// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);

/*
    Balance transactions represent funds moving through your Stripe account.
    They're created for every type of transaction that comes into or flows out of your Stripe account balance.
*/


// defining the controller
const getBalanceTransaction = async (req, res) => {

    try {

        if (!req.params.transactionID) {
            throw new Error ('please provide a transaction ID in the request parameters');
        }

        stripe.balanceTransaction.retrieve (req.params.transactionID).then ((balanceTransaction) => {

            // returning the transaction if no error
            return res.status (200).send ({
                status: 'success',
                balanceTransaction
            })

        }).catch ((error) => {

            // catching and returning the error
            return res.status (401).send ({
                status: 'failure',
                message: error.message
            })
        })

    } catch (error) {

        // catching the error and returning to the user
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })

    }
}

// exporting the controller

module.exports = {
    getBalanceTransaction
}