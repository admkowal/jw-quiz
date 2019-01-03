import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import { isDefined } from '../../utils/is-defined';

function Question({question}) {
  if (!isDefined(question)) {
    return null;
  }

  return (
    <section className="s-question">
      <h1>{question.question}</h1>
      {question.answers.map(answer => (
        <Card key={answer.id}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h2">
                {answer.answer}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </section>
  );
}

export default connect(({session}) => ({
  question: session.questions[0]
}))(Question);