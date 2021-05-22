

// importing all the dependencies
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);

/*
    Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth).
    The transactions are returned in sorted order, with the most recent transactions appearing first.
*/

const listAllBalanceTransactions = async (req, res) => {

    try {

        stripe.balanceTransactions.list ({
            limit: 4
        }).then ((transactions) => {

            // if no error, then returning the transactions
            return res.status (200).send ({
                status: 'success',
                transactions
            })

        }).catch ((error) => {

            // catching and returning the error
            return res.status (401).send ({
                status: 'failure',
                message: error.message
            })
        })

    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }

}

// exporting the controller
module.exports = {
    listAllBalanceTransactions
}