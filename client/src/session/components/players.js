import React from 'react';
import { connect } from 'react-redux';

function Players({players}) {
  return (
    <section className="s-players">
      Players in game are:
      <span>
        {players.map(player => player.name).join(' ,')}
      </span>
    </section>
  );
}

export default connect(({session}) => ({
  players: session.players
}))(Players);