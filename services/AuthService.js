global.fetch = require('node-fetch');
global.navigator = () => null;
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const poolData = {
   UserPoolId: "us-east-2_vU6xbdk67",
   ClientId: "5rh37pqcqaqpqgv8ieoplfvv5c"
};
const pool_region = "us-east-2";
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
exports.Register = function (body, callback) {
   var name = body.name;
   var email = body.email;
   var password = body.password;
   var attributeList = [];
   
   attributeList.push(new    AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));
   userPool.signUp(name, password, attributeList, null, function (err, result) {
     if (err)
         callback(err);
     var cognitoUser = result.user;
     callback(null, cognitoUser);
   })
}   