const clientId = 'hkijppeag6gwuykcpbkhuyj2dtga1ckb';
const clientSecret = '2fCkF7Yq6Gg8QB5QSiqBV9yLPDX8H6l8'; // You should never expose the client secret on the client-side. Use a server-side application to keep it secure.
const redirectUri = 'https://dev.morganserver.com';
const authorization_Code = 'DX1585fdRnCGaoZkKUOR5bXAtnJuoFBm';

// Token endpoint URL
const tokenUrl = 'https://api.box.com/oauth2/token';

// Prepare the data for the token request
const formData = new FormData();
formData.append('grant_type', 'authorization_code');
formData.append('code', authorization_Code);
formData.append('client_id', clientId);
formData.append('client_secret', clientSecret);
formData.append('redirect_uri', redirectUri);

// Make the POST request to exchange the code for an access token
fetch(tokenUrl, {
  method: 'POST',
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    // Here, you will have the access token in the "data.access_token" field.
    console.log('Access Token:', data.access_token);
  })
  .catch((error) => {
    console.error('Error exchanging code for access token:', error);
  });