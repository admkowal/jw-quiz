# JW QUIZ

A quiz app for learning and entertainment with the objective to learn Bible principles.

## Tasks for 1.0.0
1. As an admin I want to be able to create a session with a name
  - FE Create admin panel with form - Create session moves to /admin/session/:id
  - BE expose api/session POST (database: sessions) (shema: {id, name})
2. As a user I want to choose a session. (If there is only one I should join automatically)
  - FE create a list of tiles with open sessions on /session route. Click moves user to /session/:id. Id is a number. (For start / route should redirect to /session)
  - FE /session/:id should connect to socket
  - BE expose api/sessions GET to fetch the sessions on /session route
3. As a user I want to choose a username to start playing
  - FE create a form to specify username for a player on first seen view on /session/:id
  - BE socket.on 'add player' - save to DB and emit 'new player'
4. As an admin I want to be able within the session view to generate new question from database (Seen least recently should be choosen)
  - FE - Generate question button on /admin/session/:id socket.emit 'generate question'
  - BE - socket.on 'generate question' (should get question from database, save it to session and then emit the question to client) and socket.emit 'new question'
5. As a user I want to choose an answer (4 possible)
  - FE - interface for question and for answers. socket.on 'new question' - display new question and answers, socket.emit 'answer' on answer
  - BE socket.on 'answer'. Should check if all players answered. If yes then socket.emit 'question end'
6. As a user and as an admin I want to see which answer was choosed by majority and if it was correct one (If not - correct one should not be highlighted)
  - FE socket.on 'question end' displayed choosed answer and higlight on red or green to indicate if the answer was correct

## Tasks for 1.5.0
1. As a user I want be able to specify my native language (PL, BG)
2. As a user I want to see which answer was choosed by others (higlight and number) 
3. As an admin I want to log in to app with my credentials
  - FE /admin route - form with login credentials
  - BE serve /admin route as index.html
  - BE expose api/login credentials

## Tasks for 2.0.0
1. As a user I want to see the 'heavens treasures' that we as a team won. (Every correct answer is worth 100 points, if there is more correct answers second one is worth 50, third 25, and forth 12).
2. As a user I want to see a rank that we as team reached and how many points we have to earn to get to another level.
- Niewierzący 0
- Zainteresowany 200 * number of players
- Głosiciel 400 * number of players
- Ochrzczony 600 * number of players
- Pionier pomocniczy 800 * number of players
- Pionier stały 1200 * number of players
- Pionier specjalny 1400 * number of players
- Misjonarz 1600 * number of players
- Betelczyk 1800 * number of players
- Nadzorca obwodu 2000 * number of players
- Członek komitetu oddziału 2200 * number of players
- Pomazaniec 2400 * number of players
- Członek ciała kierowniczego 2600 * number of players
- Aniołowie 2800 * number of players
- Cherubowie 3000 * number of players
- Serafowie 3200 * number of players
3. As a team after all answers being wrong we want to drop a level

## Tasks for 2.5.0
1. As a user I want to be able to choose the bonus question. (The bonus should be visible only after correct answer as a team)
2. As a user I should have indication how many points will I learn if I choose to answer a bonus question (First 200 * number of players, Second... 100 * number of players)
3. As an admin I would like to see which players want to answer the bonus question
4. As an admin I would like to generate the player to answer the bonus question (The player which will earn most points should be choosen | Haven't answering bonus question yet | Have least correct answers | Random)

## Tasks for 3.0.0
1. As a user I want to see animations and hear sounds while playing 
2. As an admin I would like to have option to save a session for future
3. As a user I want to be able to choose a nickname from previous saved session

## License
[MIT](https://choosealicense.com/licenses/mit/)