import {
    SEND_CHAT_MESSAGE_SUCCESS,
    SEND_CHAT_MESSAGE_FAIL,
    READ_CHAT_MESSAGE_SUCCESS,
    READ_CHAT_MESSAGE_FAIL,
    GET_REALTIME_USER_SUCCESS,
    GET_REALTIME_USER_FAIL,
    GET_REALTIME_SETTING_SUCCESS,
    GET_REALTIME_SETTING_FAIL,
    GET_REALTIME_MESSAGE_SUCCESS,
    GET_REALTIME_MESSAGE_FAIL,
    CLEAR_CHAT_SUCCESS,
    CLEAR_CHAT_FAIL
} from '../actions/chat/types'

const initialState = {
    messages: null,
    otherUser: null,
    setting: null
};

const chatMessageReducer = (state= initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case SEND_CHAT_MESSAGE_SUCCESS:
            return {
                ...state
            }
        case SEND_CHAT_MESSAGE_FAIL:
            return {
                ...state
            }
        case READ_CHAT_MESSAGE_SUCCESS:
            return {
                ...state
            }
        case READ_CHAT_MESSAGE_FAIL:
            return {
                ...state
            }
        case GET_REALTIME_USER_SUCCESS:
            return {
                ...state,
                otherUser: payload
            }
        case GET_REALTIME_USER_FAIL:
            return {
                ...state,
                otherUser: null
            }
        case GET_REALTIME_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: payload
            }
        case GET_REALTIME_MESSAGE_FAIL:
            return {
                ...state,
                messages: null
            }
        case GET_REALTIME_SETTING_SUCCESS:
            return {
                ...state,
                setting: payload
            }
        case GET_REALTIME_SETTING_FAIL:
            return {
                ...state,
                setting: null
            }
        case CLEAR_CHAT_SUCCESS:
            return {
                ...state,
                initialState
            }
        case CLEAR_CHAT_FAIL:
            return {
                ...state
            }
        default:
            return state;
    };
}

export default chatMessageReducer;