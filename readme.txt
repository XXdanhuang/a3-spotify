--Readme document for Group 46 Ida Li, tianyl33@uci.edu and Yan Jin, yjin23@uci.edu--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Communicating with the webserver
- 1/1 Populating information about the user
- 3/3 Populating the search component
- 3/3 Artist page
- 1.5/1.5 Album page
- 0.5/0.5 Track page

We believe we completed all the required components of the assignment. Our application successfully communicates with the Express webserver and retrieves Spotify data. We implemented the user profile section, search functionality for artists, albums, and tracks, and all three detail pages.

The Artist page displays artist information, popularity, albums, and top tracks. The Album page displays album information, artists, popularity, and its track list. The Track page displays song information, album and artist links, duration, and popularity.

We also tested the application using the provided dummy webserver and verified that the Angular project builds successfully.
2. How long, in hours, did it take you to complete this assignment?
Ida: 15 hrs
Yan: 13 hrs
Total hours: 28 hrs

3. What online resources did you consult when completing this assignment? (list specific URLs)
Angular Documentation: https://angular.dev/

TypeScript Documentation: https://www.typescriptlang.org/docs/

Bootstrap Documentation: https://getbootstrap.com/docs/5.3/

ChatGPT: https://chatgpt.com/

We used these resources as references for Angular components, TypeScript syntax, template bindings, styling, debugging, and troubleshooting during development.


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
We worked together throughout the assignment, discussing the implementation of the Home/Search components, Spotify API integration, and the structure of the application. We also collaborated on resolving GitHub merge conflicts and integrating our code into the master branch.

After merging our work, we tested the Artist, Album, and Track detail pages, including navigation links and popularity indicators. We also used ChatGPT for debugging, understanding Angular concepts, and troubleshooting technical issues.


5. Did you add a bonus feature to your submission? If so, what is it and how should we see it?
We implemented several additional usability improvements, including loading states, error handling, and input validation.

The Search button is disabled when the input is empty or while a search request is being processed. During a search, the button displays "Searching..." to provide feedback to the user. If a request fails, an error message is displayed.

We also added error handling to the user profile and detail pages. These improvements can be observed when using the search interface or when an API request fails.

6. Is there anything special we need to know in order to run your code?
Our application uses Angular for the frontend and Express for the backend.

To run the application:

Start the provided dummy webserver on port 8888.

Open the client directory.

Install dependencies with npm install if necessary.

Start the Angular frontend using ng serve.

Open http://localhost:4200 in a web browser.

The frontend communicates with the backend at http://127.0.0.1:8888.

Both servers must be running for the application to retrieve and display Spotify data.

We tested the application using the provided dummy webserver and confirmed that the frontend builds successfully using npm run build.
