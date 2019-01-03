import { newPlayerListener, playerAddedListener } from '../session/socket/add-player';
import { newQuestionListener } from '../session/socket/generate-question';
import { playerAnsweredListener } from '../session/socket/answers';

export default function setSocketListeners() {
  newPlayerListener();
  playerAddedListener();
  newQuestionListener();
  playerAnsweredListener();
}