import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import { isDefined } from '../../utils/is-defined';

import { emitAnswer } from '../socket/answers';
import { setMyAnswer } from '../reducers';

function Question({sessionId, question, setMyAnswer, player, players}) {
  if (!isDefined(question) || !isDefined(player.id)) {
    return null;
  }
  const haveVoted = question.answers.map(answer => answer.isVoted).includes(true);
  const playersCount = players.length;
  const playersVoted = question.answers.map(answer => answer.voteNumber).reduce((sum, val) => sum + val, 0);
  const shouldShowAnswer = playersCount === playersVoted;

  return (
    <section className="s-question">
      <h1>{question.question}</h1>
      {question.answers.map(answer => (
        <Card key={answer.id} className={`${answer.isVoted ? 'voted' : ''} ${shouldShowAnswer && answer.isCorrect ? 'answer' : ''}`}>
          <CardActionArea onClick={() => {
            if (!haveVoted) {
              emitAnswer({sessionId, questionId: question.id, answerId: answer.id});
              setMyAnswer(question.id, answer.id)
            }}}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {answer.answer}
              </Typography>
              <Typography>
                {answer.voteNumber}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </section>
  );
}

export default connect(({session}) => ({
  players: session.players,
  player: session.player,
  sessionId: session.id,
  question: session.questions[0]
}), {
  setMyAnswer
})(Question);