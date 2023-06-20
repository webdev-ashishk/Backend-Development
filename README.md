# Backend-Development



![How to use nodemon](https://github.com/webdev-ashishk/Backend-Development/assets/127021921/7e99522c-a259-4212-af4e-7c3bd022005d)

---
# To use Nodemon with Express, you can follow these steps:

Install Nodemon: Ensure you have Nodemon installed globally on your system. You can install it using npm (Node Package Manager) 
by running the following command in your terminal:


Copy code
```
npm install -D nodemon
```



```
npm install -g nodemon
```

Set up your Express application: Create a new Express application or open your existing Express project.

Configure Nodemon: Open your project's root directory and create a new file called nodemon.json. In this file, 
add the following configuration:

json
Copy code
```
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json"
}
```
This configuration specifies that Nodemon should restart the server when it detects changes in files with the .js or 
.json extensions. It also sets the NODE_ENV environment variable to "development" so that your application behaves accordingly.

Modify your package.json file: Open your package.json file and modify the "scripts" section to include a new script for starting 
the server with Nodemon. For example:

json
Copy code
```
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```
Start the server with Nodemon: In your terminal, navigate to your project's root directory and run the following command:

arduino
Copy code
npm run dev
This command will start your Express server using Nodemon, which will monitor your files for changes. Whenever you make changes 
to your server-side code, Nodemon will automatically restart the server, saving you the effort of manually stopping and starting the server.

That's it! You should now have Nodemon set up with your Express application, allowing you to develop more efficiently by automatically 
restarting the server whenever you make changes to your code.
