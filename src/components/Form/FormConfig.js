export default {
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
  ],
  step: 0
};
