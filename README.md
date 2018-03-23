
# Doctor Call
#### By Jasun Feddema

## Description
Doctor Call: An app utilizing the BetterDoctor API to help users find doctors in their area who can treat their illnesses

## Specifications
* Take input from the user in the form of a string (their ailment), use the string as a search query in the BetterDoctor API, and return a list of doctors who can treat that ailment:
  - example input: cold
  - example output:
      - Melanie Plaut MD
      - Brian Greenburg MD

* Take input from the user in the form of a string (doctors name), use the string as a search query in the BetterDoctor API, and return a list of doctors who have that name:
  - example input: Melanie
  - example output:
      - Melanie Plaut MD

* When outputting a list of doctors, the following details will be displayed: full name, address, phone number, website, and availability (for new patients) :
  - example input: Melanie
  - example output:
      - doctors image (url = image website)
      - Melanie Plaut MD
      - 3550 N Interstate Ave
      - Portlad, OR 97227
      - 5033316142
      - true;

* If an error occurs, the user will be notified with a message:
  - example output: "An error has occured with your query. Error Message: "..." "

* If no results are found for that ailment or doctor name, an error message will display:
  - example input: "kitten pox"
  - example input: "JohnJacobJingleHeimerSchmidt"
  - example output: "no results found. Error Message: "..." "

## Setup/Installation Requirements

* Make sure node.js is installed on your computer. Follow instructions here: "https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js"
* Clone the git repository from 'https://github.com/jaybojaybojaybo/DoctorCall-Epicodus.git'.
* Run the 'npm install' command from the terminal.
* Create a .env file in the root folder and save your BetterDoctor.com API key using "exports.apiKey" as the variable name as follows:
  example: exports.apiKey = yourAPIKey
  further help: https://www.learnhowtoprogram.com/javascript/asynchrony-and-apis-in-javascript/managing-api-keys-8240339c-83fa-4858-9b04-7c95413055cf
* While in the root folder, run 'npm run start' from the terminal.

## Support and contact details

* contact the author at jasun.feddema@gmail.com

## Technologies Used

* Javascript
* Node.js
* Webpack
* BetterDoctor.com API

### License

Copyright (c) 2018 Jasun Feddema

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
