
// defining the apiRoutes

const path = require ('path');
const apiRoutes = require ('express').Router ();
const { getBalance } = require (path.resolve (__dirname, '..', 'controllers', 'getBalance'));
const { getBalanceTransaction } = require (path.resolve (__dirname, '..', 'controllers', 'getBalanceTransaction'));
const { listAllBalanceTransactions } = require (path.resolve (__dirname, '..', 'controllers', 'listAllBalanceTransactions'));
const { createCharge } = require (path.resolve (__dirname, '..', 'controllers', 'createCharge'));
const { retrieveCharge } = require (path.resolve (__dirname, '..', 'controllers', 'retrieveCharge'));
const { listAllCharges } = require (path.resolve (__dirname, '..',  'controllers', 'listAllCharges'));
const { createSource } = require (path.resolve (__dirname,  '..', 'controllers', 'createSource'));
const { getSource } = require (path.resolve (__dirname, '..', 'controllers', 'getSource'));
const { updateSource } = require (path.resolve (__dirname, '..', 'controllers', 'updateSource'));

// getting the balance
apiRoutes.get ('/getbalance', getBalance);

// getting the balance transaction
apiRoutes.get ('/getbalanceTransaction/:transactionID', getBalanceTransaction);

// list all balance transactions
apiRoutes.get ('/listAllBalanceTransactions', listAllBalanceTransactions);

// create a charge
apiRoutes.post ('/createCharge', createCharge);

// retrieving a charge
apiRoutes.get ('/retrieveCharge/:chargeID', retrieveCharge);

// list all charges
apiRoutes.get ('/listAllCharges', listAllCharges);

// creating a source
apiRoutes.post ('/createSource', createSource);

// getting a source from sourceID
apiRoutes.get ('/getSource/:sourceID', getSource);

// update a source
apiRoutes.patch ('/updateSource/:sourceID', updateSource);

// exporting the apiRoutes
module.exports = {
    apiRoutes
}
