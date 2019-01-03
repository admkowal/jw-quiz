import React from 'react';
import { connect } from 'react-redux';

import ChooseName from './components/choose-name';
import GenerateQuestion from './components/generate-question';
import Question from './components/question';
import Players from './components/players';
import { requestGetSession } from './actions/get-session';
import { isDefined } from '../utils/is-defined';

class Session extends React.Component {
  componentDidMount() {
    const { requestGetSession, match, session } = this.props;

    if (!isDefined(session.id)) {
      requestGetSession(match.params.id);
    }
  }
  render() {
    const { match, session } = this.props;
    const sessionId = match.params.id;

    return (
      <main className="session">
        <h2>{`Session ${session.name}`}</h2>
        <ChooseName sessionId={sessionId}/>
        <GenerateQuestion/>
        <Question/>
        <Players/>
      </main>
    );
  }
}

export default connect(({session}) => ({
  session
}), {
  requestGetSession
})(Session)