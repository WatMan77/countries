# A simple React application that uses the REST countries API to show basic data of countries
API used: https://restcountries.com/#rest-countries

Choosing a country from a dropdown menu the page shows the following information: 

Flag 

Capital 

Population 

Currencies

# How to run?
## Using Docker
### First build the image
`sudo docker build . -t countries-app`

### Then run it
`sudo docker run countries-app`

## Directly from CMD 
Install dependencies first 

`npm install` 

### Development mode
`npm run dev`

### Running a build
First build the app with:

`npm run build`

Then run the build with:

`npm run preview`