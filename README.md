# petdetailsApi

For the back-end role, you have to build an API that takes an excel file as input, parses it and stores the data in the database.

## Features

- A POST route “/api/pet” to add pets from an excel file
- A GET route “/api/pet” to get all the pets in the database
- A GET route “/api/pet/<petId>” to get a specific pet (petId will be a dynamic value eg. /api/pet/abc123)
- A PATCH route “/api/pet/<petId>” to update the details of a specific pet
- A DELETE route “/api/pet/<petId>” to delete a specific pet

## Columns in the excel file

1. Name
2. Type
3. Breed
4. Age

## Tech stack to be used

Node.js, Express and MongoDB using mongoose

## Code & deployment

- Push the code to a public GitHub repository
- Explain your implementation and tools/libraries used in README.md file in the repository
- Document the steps to get your code up and running on localhost
- If possible, deploy your solution to a service like heroku, aws, etc and use MongoDB Atlas (This step is optional, but will give you brownie points)