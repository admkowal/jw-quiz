import { 
  newPlayerListener,
  playerAddedListener
} from '../session/socket/add-player';

export default function setSocketListeners() {
  newPlayerListener();
  playerAddedListener();
}