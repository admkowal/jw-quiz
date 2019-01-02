import React from 'react';

export default function Session({match}) {
  return (
    <main className="session">
      Session
      <span>{match.params.id}</span>
    </main>
  );
}