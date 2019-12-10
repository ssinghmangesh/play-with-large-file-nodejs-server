# play-with-large-file-nodejs-server


To import the files in the system: 
1. Go to postman.
2. Create a post request with url as localhost:3000/import
3. In request body select form-data
4. In form-data add a key with name file of type file and then select your test file.
5. Hit send button and wait for response.
6. You will get JSON response which has a message key with value `File uploaded successfully…` on every successful upload
