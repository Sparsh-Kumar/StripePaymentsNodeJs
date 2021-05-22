
// defining the apiRoutes

const path = require ('path');
const apiRoutes = require ('express').Router ();
const { getBalance } = require (path.resolve (__dirname, '..', 'controllers', 'getBalance'));
const { getBalanceTransaction } = require (path.resolve (__dirname, '..', 'controllers', 'getBalanceTransaction'));
const { listAllBalanceTransactions } = require (path.resolve (__dirname, '..', 'controllers', 'listAllBalanceTransactions'));
const { createCharge } = require (path.resolve (__dirname, '..', 'controllers', 'createCharge'));

// getting the balance
apiRoutes.get ('/getbalance', getBalance);

// getting the balance transaction
apiRoutes.get ('/getbalanceTransaction/:transactionID', getBalanceTransaction);

// list all balance transactions
apiRoutes.get ('/listAllBalanceTransactions', listAllBalanceTransactions);

// create a charge
apiRoutes.post ('/createCharge', createCharge);

// exporting the apiRoutes
module.exports = {
    apiRoutes
}
