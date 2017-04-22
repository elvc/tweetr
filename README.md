# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Project Description
### Goal
- A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and CSS3 (and Sass)

- The server is built with Node, Express and Mongo and allows users to request and submit tweets via a JSON end-point. 

- User can submit new tweets and like posts.

### Getting Started

- Install dependencies using the `npm install` command.
- Start the web server using the `npm run local` command. The app will be served at `http://localhost:8080/`.
- Go to `http://localhost:8080/` in your browser.

### Dependencies

- Express
- Node 5.10.x or above

### Potential Improvements
- Currently, you can like a post again after page refresh. 
    - This is expected because the app have not implemented the account management system, hence the inability to record click history by each users. 
    - However, the basic functionality works and the total likes for each tweet is being recorded on MongoDB.
