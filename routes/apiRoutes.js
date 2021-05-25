
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
const { createCustomer } = require (path.resolve (__dirname, '..', 'controllers', 'createCustomer'));
const { retrieveCustomer } = require (path.resolve (__dirname, '..', 'controllers', 'retrieveCustomer'));
const { updateCustomer } = require (path.resolve (__dirname, '..', 'controllers', 'updateCustomer'));
const { getAllCustomers } = require (path.resolve (__dirname, '..', 'controllers', 'getAllCustomers'));
const { uploadFile } = require (path.resolve (__dirname, '..', 'controllers', 'uploadFile'));
const { retrieveHostedFile } = require (path.resolve (__dirname, '..', 'controllers', 'retrieveHostedFile'));
const { listAllFiles } = require (path.resolve (__dirname, '..', 'controllers', 'listAllFiles'));

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

// creating a customer
apiRoutes.post ('/createCustomer', createCustomer);

// retrieve a customer
apiRoutes.get ('/retrieveCustomer/:customerID', retrieveCustomer);

// update a customer
apiRoutes.patch ('/updateCustomer/:customerID', updateCustomer);

// get list of all customers
apiRoutes.get ('/getallCustomers', getAllCustomers);

// upload a file to stripe
apiRoutes.post ('/uploadFile', uploadFile);

// retrieving the hosted file on stripe
apiRoutes.get ('/retrieveHostedFile/:fileID', retrieveHostedFile);

// list all files
apiRoutes.get ('/listAllFiles', listAllFiles);

// exporting the apiRoutes
module.exports = {
    apiRoutes
}
