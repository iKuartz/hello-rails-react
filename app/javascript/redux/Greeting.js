const defaultState = { message: 'It\'s a default greeting' };

export const SETMESSAGE = 'GREETINGAPP/SAYGREETING';

export default function greetingReducer(state = defaultState, action) {
  switch (action.type) {
    case SETMESSAGE: {
      return { ...state, message: action.message };
    }
    default:
      return state;
  }
}

export function setMessage(message) {
  return { type: SETMESSAGE, message };
}
