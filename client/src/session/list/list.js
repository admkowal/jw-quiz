import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import NavBtn from '../../common/buttons/nav-btn';
import { getSessionUrl } from '../../utils/navigation-service';

import { requestCreateSession } from './actions';

class SessionList extends React.Component {
  componentDidMount() {
    this.props.requestCreateSession();
  }
  render() {
    const { list } = this.props;
    return (
      <main className="session-list">
        {list.map(session => (
          <Card key={session.id}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {session.name}
              </Typography>
            </CardContent>
            <CardActions>
              <NavBtn label="Join" to={`${getSessionUrl(session.id)}`}/>
            </CardActions>
          </Card>
        ))}
      </main>
    );
  }
}

export default connect(({sessions}) => ({
  list: sessions.list
}), {requestCreateSession})(SessionList);