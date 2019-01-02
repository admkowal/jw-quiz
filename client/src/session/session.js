import React from 'react';

import ChooseName from './choose-name/choose-name';

export default function Session({match}) {
  const sessionId = match.params.id;
  return (
    <main className="session">
      <h2>{`Session ${sessionId}`}</h2>
      <ChooseName sessionId={sessionId}/>
    </main>
  );
}