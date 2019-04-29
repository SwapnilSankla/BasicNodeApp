This repository is sandbox to understand basics of node.js 

1. Use `npm init` to create new node project.
2. Use `npm install -D <dependency>` to add dev dependency.
3. Using `Babel` to transpile ES6 code to native javascript.
    1. Make sure the babel dependencies added in `package.json` are added correctly.
    2. Make sure you create `.babelrc` file to specify presets
4. Using `Express` framework for building API server.
5. Instead of using `npm init` rather `express <project_name> --no-view` is used to generate 
   this project.
6. Express come with many middleware like
    1. `morgan`
    2. `debug`
    3. `cookie-parser`
7. With express following project structure is followed
    1. `app.js`: Entry point of the application. Defines mapping of url to route.
    2. `routes`: Defines mapping of url to REST controller endpoint.
    3. `controller`: Defines actual endpoint.
8. On premise `Mongo` is used to store basic books and author data. Using `Mongoose` to connect
   to DB. 
9. Use command `babel-node populatedb.js mongodb://localhost:27017/local_library` to add dummy data.   
10. `Chai` along `Mocha` is used for testing. `Mocha` is a testing framework, `Chai` is an assertion library
11. `nyc` is used for generating test reports.    
