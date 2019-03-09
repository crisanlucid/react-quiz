export default {
  quizForm: [
    {
      key: '1',
      typePanel: 'formFirst',
      values: {
        quiz_1: {
          label: 'What type of company is it?',
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
        quiz_2: {
          label: 'Does the company use React technology?',
          elementType: 'input',
          elementConfig: {
            type: 'radio',
            name: 'form[tech]',
            options: [
              { label: 'yes', value: '1' },
              { label: 'no', value: '0' }
            ],
            default: '0'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        quiz_3: {
          label: 'How many developers are in the IT department?',
          elementType: 'input',
          elementConfig: {
            type: 'radio',
            name: 'form[it]',
            options: [
              { label: '< 10 devs', value: '1' },
              { label: '> 15 devs', value: '2' },
              { label: ' ~ 5 devs', value: '0' }
            ],
            default: '0'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        quiz_4: {
          label: 'Does the company had profit over last years?',
          elementType: 'input',
          elementConfig: {
            type: 'radio',
            name: 'form[profit]',
            options: [
              { label: '<1mil euro', value: '0' },
              { label: '<5mil euro', value: '1' },
              { label: '>5mil euro', value: '2' }
            ],
            default: '0'
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
        quiz_5: {
          label: 'How often need to work overtime?',
          elementType: 'input',
          elementConfig: {
            type: 'radio',
            name: 'form[work]',
            options: [
              { label: 'not at all', value: '2' },
              { label: 'sometimes', value: '1' },
              { label: 'often', value: '0' },
              { label: 'based on Deadline', value: '-1' }
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
        quiz_6: {
          label:
            'What is your maximum budget to hire a developer with my experience?',
          elementType: 'input',
          elementConfig: {
            type: 'radio',
            name: 'form[budget]',
            options: [
              { label: '60k euro', value: '-1' },
              { label: '65k euro', value: '0' },
              { label: '70k euro', value: '1' },
              { label: '+75k euro', value: '2' }
            ],
            default: '-1'
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
