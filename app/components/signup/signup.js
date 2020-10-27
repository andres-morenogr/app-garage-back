global.fetch = require('node-fetch');
global.navigator = () => null;

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const poolData = {
  UserPoolId: "us-east-2_vU6xbdk67",
  ClientId: "5rh37pqcqaqpqgv8ieoplfvv5c"
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const register = (body, callback) => {
  let name = body.name;
  let email = body.email;
  let password = body.password;
  let attributeList = [];

  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));
  userPool.signUp(name, password, attributeList, null, (err, result) => {
    if (err) {
      callback(err);
    }
    let cognitoUser = result.user;
    callback(null, cognitoUser);
  })
}

module.exports = register;