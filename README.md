## Express-blog

Hello! :smile: 

This is my own MEVN (MongoDB, Express, Vue.js, Node.js) site similar to reddit.com or pikabu.ru (mostly copies many pikabu features) with many different and awesome features, open Swagger API documentation (as the result of using Design First approach). Main reason of making this site is fun and learning new things while making it.


### Backend Features:
- Posts:
	- **Creating posts**. Users can create posts and it will get a slug based on its title
	- **Uploading pictures**. All posts can have attachments, isn't that nice!
	- Being able to **update posts within certain time**. Users can update their posts but it's only availabe within *10* min.
	- Being able to **delete posts within certain time**. Users can delete their posts but it's only available within *10* min.
	- **Getting all posts**, pagination included, filter by **author**
	- **Getting a post by its slug**. Instead of `id` I use `slug` for getting a single post.
- Users: 
	- **Registration**. Does what it says
	- **Sessions**. As I didn't work with JWT much yet I decided to stick with my nice old friend - sessions, also they are kinda more safe than JWT
	- **Auth**. Does what it says
	- **Saving draft**. Users are able to save attachments, title and body of the post without posting it, also it was a necessary step to solve file upload dilemma
- Comments:
	- **Hierarchical comment tree to each post**. Nowadays almost any site does this.
	- **Creating comments**
- Full Swagger documentation to existing end-points (available with path `/api-docs/`)

### Backend Plans:

- Posts:
	- **Rating**
	- **Tags**
	- **Sockets**
- Users:
	- **Sum rating for all posts**
	- **Adding posts to the list favorite**
	- **Settings (?)**
	- **Bio**. Users should be able to add small description about themselves 
	- **Changing password**
	- **Mail (?)**. Mail box, working with emails
	- **Mentions**. Usual @ mentions
	- **Roles**(regular, moderator, admin)
- Comments:
	- **Updating comments**
	- **Deleting comments**
	- **Comment rating** Which will raise user's rating by half of what posts increase when someone rate it