import { createReduxActionTypes } from '../../utils/action-factory';

export const SET_PLAYER = 'SET_PLAYER';
export const PLAYER_ADDED = 'PLAYER_ADDED';
export const SET_SESSION = 'SET_SESSION';
export const SET_QUESTION = 'SET_QUESTION';
export const SET_MY_ANSWER = 'SET_MY_ANSWER';
export const SET_PLAYER_ANSWER = 'SET_PLAYER_ANSWER';

export const actions = createReduxActionTypes('SESSION_DETAILS', [
  SET_PLAYER,
  PLAYER_ADDED,
  SET_SESSION,
  SET_QUESTION,
  SET_MY_ANSWER,
  SET_PLAYER_ANSWER
]);

export const setPlayer = player => ({ type: actions[SET_PLAYER], player });
export const setAddPlayer = player => ({ type: actions[PLAYER_ADDED], player });
export const setSession = session => ({ type: actions[SET_SESSION], session });
export const setQuestion = question => ({ type: actions[SET_QUESTION], question });
export const setMyAnswer = (questionId, answerId) => ({ type: actions[SET_MY_ANSWER], questionId, answerId });
export const setPlayerAnswer = ({questionId, answerId}) => ({ type: actions[SET_PLAYER_ANSWER], questionId, answerId });

export default function session(state = {
  player: {},
  players: [],
  questions: []
}, action) {
  switch (action.type) {
    case actions[SET_PLAYER]:
      return {
        ...state,
        player: action.player
      }

    case actions[PLAYER_ADDED]:
      return {
        ...state,
        players: [action.player, ...state.players]
      }

    case actions[SET_QUESTION]:
      return {
        ...state,
        questions: [action.question, ...state.questions]
      }

    case actions[SET_PLAYER_ANSWER]:
      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id === action.questionId) {
            return {
              ...question,
              answers: question.answers.map(answer => {
                if (answer.id === action.answerId) {
                  return {
                    ...answer,
                    voteCount: answer.voteCount + 1
                  };
                }
                return answer;
              })
            }
          }
          return question;
        })
      }

    case actions[SET_MY_ANSWER]:
      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id === action.questionId) {
            return {
              ...question,
              answers: question.answers.map(answer => {
                if (answer.id === action.answerId) {
                  return {
                    ...answer,
                    isVoted: true
                  };
                }
                return {
                  ...answer,
                  isVoted: false
                };
              })
            }
          }
          return question;
        })
      }
    
    case actions[SET_SESSION]:
      return {
        ...state,
        ...action.session
      }

    default:
      return state;
  }
}