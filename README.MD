# GitHub Follower Tree

This Node/Express app contains an API endpoint that accepts a GitHub ID (username) and returns the following data in JSON format:
- the ID's of up to 5 of their followers; and
- for each follower, the ID's of their followers; and
- for each follower's follower, the the ID's of their followers. 


## Demo
https://github-endpoints.herokuapp.com

- To check server status: https://github-endpoints.herokuapp.com/ping
- To get basic followers info: https://github-endpoints.herokuapp.com/api/followers/USERNAME
- To get full followers info: https://github-endpoints.herokuapp.com/api/followers/USERNAME?full=true

## Run the app locally
- Run `npm install`
- Run `npm start` to start the server
- Run `npm test` to execute tests
