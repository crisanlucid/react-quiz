export default {
  quizForm: [
    {
      key: '1',
      typePanel: 'formFirst',
      values: {
        quiz_1: {
          label: 'Question: How many developers has the department IT?',
          elementType: 'input',
          elementConfig: {
            type: 'radio',
            name: 'form[it]',
            options: [
              { label: '< 10 devs', value: '0' },
              { label: '> 15 devs', value: '1' },
              { label: ' ~ 5 devs', value: '-1' }
            ],
            default: '-1'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        quiz_2: {
          label: 'Question: What type of company is it?',
          elementType: 'input',
          elementConfig: {
            type: 'radio',
            name: 'form[company]',
            options: [
              { label: 'start-up', value: '0' },
              { label: 'corporate', value: '2' },
              { label: 'spin-off', value: '1' }
            ],
            default: '1'
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
