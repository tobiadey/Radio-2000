# Implementation
**Q) What libraries did you add to the application? What are they used for?.**
Firebase - For connecting with a remote DB. Express for creating REST endpoints.


.**Q) What's the command to start the application locally?.**
A) npm run start | node index.js


# General
.**Q) If you had more time, what further improvements or new features would you add?.**
A)
- Unit testing application
- Implement migration tool for managing the database schema firestore
- Improve search experience. Currently, search data has to match exactly what is in the database.e.g kiss-fm == kiss-fm. But an improvement will be to allow kiss fam match with kiss-fm|kiss fm| kiss_fm. Or just change the search criteria to id rather than a string.


.**Q) Which parts are you most proud of? And why?.**
A) Deploying it on Vercel, as it's one of the first times I've made something like this publicly available. It took a while re-arrange the directory structure and set up environment variables for the application.


.**Q) Which parts did you spend the most time with? What did you find most difficult?.**
A) Setting up firebase without having to use firebase admin. I usually use both relational and local databases (Postgres). AND Deploying the application to Vercel.


.**Q) How did you find the test overall? Did you have any issues or difficulties completing it? If you have any suggestions on how we can improve the test, we'd love to hear them..**
A) It was straightforward and explained well. I had difficulties as this is my first time building an application with Firebase and express and then deploying it on Vercel so it took a lot of learning the syntax of how to do things. It was a nice experience implementing it all.