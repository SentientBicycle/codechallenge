# Student Comparator application

Install node modules either through `npm install` or `yarn install`

To Start app run `npm start` or `yarn start`


This site uses the module/component folder structure.


### To create a new route
* Add module to `/src/modules` with camel case naming scheme
* Add import to `/src/modules/App/App.js` and add `<Route exact path='/PATH_NAME' component={ComponentName}/>`

### Course Addition

Course data can be found in `/src/modules/Courses/resources/Courses.json`

To add a course, add to the json file in the structure of
`{  
    "Class Name":{  
            "id":[unique id number]
         }
},` within a category array.

To add a category, add to the json file in the structure of `"New Subject Category":[]`

### Student Addition

Student data can be found in `/src/modules/Courses/resources/Students.json`

To add a student, add to the json file in the structure of  

`{"id":[unique id],"first_name":"first name","last_name":"last name","email":"example@example.com","gender":"maleorfemale","Classes":[{"score":[score between 0 and 100],"id":[class id found in Courses.json]}`

To add a class to a student, find the student in the Students.json file and add the class id and score to the "Classes" array.


### Testing with Jest / Enzyme

In order to run tests run `yarn test`

To add test add file of `TESTNAME.test.js` where TESTNAME is the name of the component or module you are testing.  Add the file to the directory where the component or module you are testing is located.

Add the following to every component test file:

`import {shallow, configure} from 'enzyme';`
`import Adapter from 'enzyme-adapter-react-16';`

`configure({ adapter: new Adapter() });`



## Other tools used
[Create React App](https://github.com/facebook/create-react-app).


## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
