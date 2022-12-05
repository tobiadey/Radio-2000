
# Radio-2000

[Live application on vercel 1](radio-2000.vercel.app)
[Live application on vercel 2](radio-2000-tobiadey.vercel.app)
[Live application on vercel 3](radio-2000-git-main-tobiadey.vercel.app)



I would usually perform this task of creating rest APIs with Python, Flask & Postgress. This time I wanted to try something different and new therefore I used Nodejs, Express & Firestore.


- API endpoint for obtaining a list of radio stations ✅ **(/stations)**
- API endpoint for obtaining the details for a singular radio station ✅ **(/station/<stationName>)**
- Create an API endpoint for obtaining details about a user ✅ **(/user/<name>)**
- Support the API with a database ✅ **(Firestore DB)**
- Implement the endpoints as either a REST API or a GraphQL API ✅ **(REST APIs)**
- Mechanism/tool for adding data into the database ✅ **(functions in src/dbHandler.js)**
- Introduce a migration tool for managing the database schema ❌
- Ensure the steps are outlined for how to run the application ✅ 

## How to run the application:
- Application deployed on [vercel](radio-2000.vercel.app)
- Use any of the following endpoints(API Documentation):
    - **/stations** - Returns a list of all stations
    - **/users** - Returns a list of all users
    - **/station/name** - Returns a list of all stations where name == name
    - **/user/name** - Returns a list of all users where name == name



## Steps taken to build the application:
- Setup a cloud DB using firebase(Firestore)
- Add a mechanism for adding new stations and users
- Load the DB with data on radio stations
    - Schema:
        - Station
            - Radio station name 
            - host
        - Account
            - name 
            - age
            - email
- Create endpoints 
    - /stations - all stations
    - /users - all users 
    - /station/name - query station by name
    - /user/name - query user by name




## Future Implementations will include:
- Unit testing application
- Implement migration tool for managing the database schema firestore
- Improve search experience. Currently while searching data the search prompt has to match exactly what is in the database.e.g kiss-fm == kiss-fm. But an improvement will be to allow kissfm to match with kiss-fm|kiss fm| kiss_fm. Or just change the search criteria to id(int) rather than name(string).
- Improve the DB schema to include ids and more fields.


