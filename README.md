# tech-blog

### Table of Contents
* [Goals](#goals)
* [Implementation](#implementation)
* [Credits](#credits)
* [Usage](#usage)
* [License](#licene)

## Goals
The CMS-style blog site aims to provide a seamless user experience for both first-time and returning visitors. The following are the key goals of the site:

- Upon visiting the site for the first time, the homepage will be presented, which includes existing blog posts if any have been posted, navigation links for the homepage and the dashboard, and the option to log in.

- Navigation links for the homepage and dashboard are provided for easy access. Clicking on any other links in the navigation will prompt the user to sign up or sign in.

- If the user chooses to sign up, they will be prompted to create a username and password. Upon clicking the sign-up button, the user's credentials will be saved and they will be logged into the site.

- Returning users can sign in to the site by entering their username and password. Upon signing in, the user will see navigation links for the homepage, the dashboard, and the option to log out.

- The homepage displays existing blog posts, including the post title and date created. When a blog post is clicked, the post title, contents, post creator's username, and date created will be presented, along with the option to leave a comment.

- While signed in, users can leave comments on existing blog posts and have their comment, username, and date created saved and displayed on the post.

- The dashboard provides an overview of the user's existing blog posts and the option to add a new blog post. When creating a new blog post, the user will be prompted to enter both a title and contents. The title and contents of the post will be saved and the user will be taken back to an updated dashboard with the new blog post.

- In the dashboard, users can delete or update their existing blog posts and be taken back to an updated dashboard after making changes.

- The logout option in the navigation allows the user to sign out of the site.

- To maintain site security, the user will be automatically signed out after being idle on the page for more than a set time.


## Implementation

To build this site, I implemented the MVC stragegy. The technolgies used were:
- bcrypt
- bulma
- connect-session-sequelize
- dotenv
- express
- express-handlebars
- express-session
- mysql2

Using sequelize, I built out the models with standard tables and auto incremented IDs.
For the controller, I utilized express.js to build out CRUD routes to intereact with the database. 
This data was then passed to Handlebars and rendered to the page. 

You can visit the deployed link [here](https://young-harbor-87164.herokuapp.com/)

## Credits
N/A

## Usage
N/A

## License
MIT