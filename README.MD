# Github API example

This Node/Express app features an API endpoint that accepts a Github ID (username/login) and returns Follower GitHub ID's (ip to 5 Followers total) associated with the passed in GitHub ID. It retreives data up to 3 levels deep, repeating the process of retrieving Followers (up to 5 Followers total) for each Followers found. The returned data is in JSON format.

## Live URL
https://github-endpoints.herokuapp.com

To check server status: https://github-endpoints.herokuapp.com/ping
To get followers: https://github-endpoints.herokuapp.com/api/followers/hustlelikeaboss

## Run the app locally
- Open up your favorite command tool
- `cd` to the directory that you would like to store the code
- Run `git clone` to copy the code to the directory
- `cd` inside the newly generated directory
- Run `npm install`
- Run `npm test` to execute tests
- Run `npm start` and go to 'localhost:4000/' in a brower of choice