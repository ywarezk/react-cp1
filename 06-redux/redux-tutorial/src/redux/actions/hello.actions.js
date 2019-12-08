/**
 * action - triggers a state change
 * action describes what happened in our app
 * every action has a unique name
 * {type: 'SET_MESSAGE', payload? : extra data that we need to change the state}
 * we wrap the action with action creator
 */

export const SET_MESSAGE = '[hello] Set Message';

export function setMessage(newMessage) {
    return {
        type: SET_MESSAGE,
        payload: newMessage
    }
}


