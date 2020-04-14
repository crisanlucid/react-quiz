# Quiz App React
## Description and architecture used

Quiz App - multi step form based on configuration JSON where can be
create/add/delete Answers with different type of answers; text, radio

#### Architecture && Tools

* create-react-app + Node-SaSS + Eslint + Visual Studio Code
* This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

#### Implementation

1. Create a dynamic form (based on config file; as many quizzes you like over
   page)
2. Create template for multi-steps Form
   - firstForm (first Panel)
   - form (Panel order 2-N )
   - confirm (preview all the data Form , quiz -answer)
   - success (show success page)
3. Use Local Storage in case the page is closed the Data will remain, In case
   you are in Success Page , all the data collection form are clear
4. Create minimalist CSS, SCSS files
5. Create UI components Input, Button, InputField

## How to run it

From Terminal at the root of the project

### `npm i`

Install all the dependencies

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in
the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

## Config Form Dynamic

To create a Panel Template Form      
typePanel: (HTML-> title Form , buttons -> Back, NEXT/FINISH) 
* formFirst -> first step in form
* form -> step (2..n) in form
* confirm -> preview all the Q/A from all the pages
* success -> success page when all the data can be send by POST


To Create a quiz
Populate 'values' attr :
```
 'key' => quiz_1  //suppose to be unique
 'label' => Type the Question
 'elementType'  => 'input'  // fill the answer in input box
                => 'radio' //TO DO
                => 'checkbox' //TO DO
 'elementConfig'=> type: 'text', //input type="text"
                => placeholder: 'Full Name'
 'value' => '' //current value     
 'validation' => //TO DO validation
 'valid' => //TO DO validation
 'touched' => //TO DO validation
```

Example full configuration with multistep form (2 steps, Confirm, Success)
```
 values: {
        quiz_1: {
          label: 'Question: How is your name?',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Full Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
```

```code
  quizForm: [
    {
      key: '1',
      typePanel: 'formFirst',
      values: {
        quiz_1: {
          label: 'Question: How is your name?',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Full Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        quiz_2: {
          label: 'Question: How old are you?',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Age'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        quiz_3: {
          label: 'Question: Where do you live, what city?',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'City'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      }
    },
    {
      key: '2',
      typePanel: 'form',
      values: {
        quiz_3: {
          label: 'Quiz_3',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Street'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        quiz_4: {
          label: 'Quiz_4',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Street'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      }
    },
    {
      key: '3',
      typePanel: 'confirm',
      values: {}
    },
    {
      key: '4',
      typePanel: 'success',
      values: {}
    }
  ]
```  
