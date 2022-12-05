
# Radio-2000

[Live application on vercel](link.com)
I would usually perform this task of creating rest apis with Python, Flask & Postgress. This time I wanted to try something different and new therfore I used Nodejs, Express & Firestore.


- API endpoint for obtaining a list of radio stations ✅ **(/stations)**
- API endpoint for obtaining the details for a singular radio station ✅ **(/station/<stationName>)**
- Create an API endpoint for obtaining details about a user ✅ **(/user/<name>)**
- Support the API with a database ✅ **(firstore db)**
- Implement the endpoints as either a REST API or a GraphQL API ✅ **(REST APIs)**
- Mechanism/tool for adding data into the database ✅ **(functions in src/dbHandler.js)**
- Introduce a migration tool for managing the database schema ❌
- Ensure the steps are outlined for how to run the application ✅ 

## How to run application:
- Apllication deployed on [vercel](link.com)
- Use any of the following endpoints(API Documentation):
    - **/stations** - Returns a list of all stations
    - **/users** - Returns a list of all users
    - **/station/name** - Returns a list of all stations where name == name
    - **/user/name** - Returns a list of all users where name == name



## Steps taken to build application:
- Setup a cloud db using firebase(firestore)
- Add mechanism for adding new stations and users
- Load the db with data on radio stations
    - Schema:
        - Station
            - id
            - Radio station name 
            - host
        - Account
            - id
            - name 
            - age
            - username
            - email
- Create endpoints 
    - /stations - all stations
    - /users - all users 
    - /station/name - query station by name
    - /user/name - query user by name




## Future Implemntations will inlcude:
- Unit testing application
- Implement migration tool for managing the database schema firestore
- Imporve search experience. Currently while searching data the search promt has to match exactly what is in the database.e.g kiss-fm == kiss-fm. But an improvemnt will be to allow kissfm match with kiss-fm|kiss fm| kiss_fm. Or just change search criteria to id(int) rather than name(string).


