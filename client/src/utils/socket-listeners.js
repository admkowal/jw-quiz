import { 
  newPlayerListener,
  playerAddedListener
} from '../session/socket/add-player';
import { newQuestionListener } from '../session/socket/generate-question';

export default function setSocketListeners() {
  newPlayerListener();
  playerAddedListener();
  newQuestionListener();
}