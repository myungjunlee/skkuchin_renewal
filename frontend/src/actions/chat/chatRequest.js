import Cookies from 'js-cookie';
import { AUTHENTICATED_FAIL } from '../auth/types';
import { request_refresh } from '../auth/auth';
import {
    GET_REALTIME_REQUEST_SUCCESS
}
    from './types';

export const get_realtime_chat_request = (username, stompClient) => async dispatch => {
    await dispatch(request_refresh());
    const access = Cookies.get('access') ?? null;

    if (access === null) {
        console.log('access 토큰이 존재하지 않습니다')
        return dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
    const subscription = stompClient.subscribe(`/exchange/chat.exchange/alarm.${username}`,(content) => {
        const data = JSON.parse(content.body);
        
        dispatch({
            type: GET_REALTIME_REQUEST_SUCCESS,
            payload: data
        })

    },{
        pushToken : access
    });
    stompClient.publish({
        destination: '/app/chat.alarm'
    });
    return subscription;
};