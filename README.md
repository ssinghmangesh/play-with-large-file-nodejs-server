# play-with-large-file-nodejs-server

No npm package is used
run by write cammand 
####node ./server.js


### To import the files in the system: 
1. Open Postman.
2. Create a post request with url as http://localhost:3000/import
3. In request body select form-data
4. In form-data add a key with name file of type file and then select your test file.
5. Hit send button and wait for response.
6. You will get JSON response which has a message key with value `File uploaded successfully…` on every successful upload.

*I have test it with large file from 10 to 25 gb, It will work for 100GB as well.*


### To export  a file from system :

Note: Postman has a limitation of 10mb for data as using Google Chorme, or any Browser for best experience.
It is a get request so easy to fire from browser.

Use endpoint : localhost:3000/export

This is a GET request
http://localhost:3000/export
This will download the complete data as a log file.

Download file with  Filter


1. startDate
	localhost:3000/export?startDate=12/12/2018
	This will filter the logs whose date is equal to, or is more the startdate


2. endDate 
	localhost:3000/export?endDate=12/12/2018
	This will filter the logs whose date is equal to, or is less the endDate


3. With startdate and endnote
	localhost:3000/export?startDate=12/12/2018&endDate=12/12/2018
	This will filter the logs whose’s date is equal to, or is more the startdate
	And whose’s date is equal to, or is less the endDate


Note: The date which you are entering should be as per UTC time.
You can use any format 
