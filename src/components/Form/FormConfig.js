export default {
  quizForm: [
    {
      key: '1',
      typePanel: 'success', //formFirst
      values: {
        quiz_1: {
          label: 'Quiz_1',
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
        quiz_2: {
          label: 'Quiz_2',
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
      typePanel: 'success'
    }
  ],
  step: 0
};
