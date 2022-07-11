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
  
  EXPLANATION:- 

step 1:- First i created schema of pets in the Models folder.Basically schema tells about how my code is going to look  
         inside our database. I provided the data with their data types in the schema.

step 2:-
     Then i wrote my controllers logic here. I created total five api's here. In the first Api i learned about how to take input from excel file and all,this was somehow very new concept for me so i took a help from internet and i also struggled alot in writing my first api. finally i learnt and stored my all pet details in my mongodb database.

     Then in my 2nd api i had to fetch the all the pet details, so for this , first i checked whether pets are available or not ,if not then send the mssg and if everything is fine then showing the all the pets details in the response.

     In my 3rd api i had to get the specific details of my pet.So in this api i am just taking my input from params i.e , a user will provide their specific pet id whichever pet's details he/she wanna get.Rest of the codes will remain same as my 2nd api.

     Then in my 4th api , i wrote the code which will update my pet's details using patch method,so here first user will write the pet id in the params and then he will write the specific fields that he wanna update in the body.And then simply hit the api and it will update those fields in the response.

     At last and 5th api , i had to delete the specific pet details so here also a user can delete that pet details with the help of pet id and here i am checking is my pet is already deleted or not and if it is already deleted then user will get diferent mssg and if not then it will remove the details from database successfully.

  
step 3 :- 
        i created my route file ,there i require my express package and defined all routes with the help of http methods like post,get,patch and delete. at last i    wrote my server file to run my code.

  
list of libraries i used in this project:-

 1) node-xlsx 2) express 3)mongoose 4) node-modules 5)xlsx


 How to run the code:-

 first swith to the branch lovepets and then copy the reposistory link and clone it on your vscode, fetch the entire code here and now open your terminal install all the required dependencies. Move to the src folder by the "cd" command and now type "node index.js". and there you go you will see express is connected and mongodb is connected in your terminal ,this means you have done everything correctly and your code ran successfully.Now open your postman create a collection there then add some requests,select the appropriate http method(like post,patch,delete,get) and write your route i.e:-
 http:localhost:3000/"your route endpoint path here".Now hit this api and here you go you can see your output in the response.Thank you


