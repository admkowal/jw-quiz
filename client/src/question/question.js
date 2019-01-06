import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import { Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import { FieldArray } from 'react-final-form-arrays';
import TextField from '../common/forms/mui/text-field';
import Checkbox from '../common/forms/mui/checkbox';

import { isDefined } from '../utils/is-defined';

import { requestAddQuestion } from './actions/add-question';
import { requestEditQuestion } from './actions/edit-question';
import { requestGetQuestion } from './actions/get-question';

class Question extends React.Component {
  componentDidMount() {
    const { requestGetQuestion, match } = this.props;
    const questionId = match.params.id;

    if (isDefined(questionId)) {
      requestGetQuestion(questionId);
    }
  }
  render() {
    const { 
      match,
      requestAddQuestion,
      requestEditQuestion,
      question
    } = this.props;
    const questionId = match.params.id;
    const saveText = isDefined(questionId) ? 'Save question' : 'Add Question';
    const action = isDefined(questionId) ? requestEditQuestion : requestAddQuestion;
  
    return (
      <main className="question">
        <Form
          onSubmit={action}
          initialValues={question}
          render={({handleSubmit, pristine, invalid}) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="question"
                label="Question"
                component={TextField}/>
              <FieldArray name="answers">
                {({fields}) => fields.map(name => (
                  <div className="q-answer-box" key={name}>
                    <Field
                      name={`${name}.answer`}
                      label="Answer"
                      component={TextField} />
                    <Field
                      name={`${name}.isCorrect`}
                      type="checkbox"
                      label="Correct answer"
                      component={Checkbox} />
                  </div>
                ))}
              </FieldArray>       
              <Field
                name="source"
                label="Source"
                component={TextField}/>
              <Button type="submit" disabled={pristine} color="primary">
                {saveText}
              </Button>
            </form>
          )}>
        </Form>
      </main>
    );
  }
}

export default connect(({question}) => ({
  question
}), {
  requestAddQuestion,
  requestEditQuestion,
  requestGetQuestion
})(Question);