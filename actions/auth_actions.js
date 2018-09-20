import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

export const facebookLogin = () => async dispatch => {
    console.log('facebookLogin action');
    let token;
    
    try {
        await AsyncStorage.setItem('fb_token', 'tokenasdasdadtoken');
        token = await AsyncStorage.getItem('fb_token');
    } catch (err) {
        console.error('token error', err);
    }
    
    if (token) {
        console.log('facebookLogin', token);
        // Dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        // Start up FB Login process
        doFacebookLogin(dispatch);
    }
}

const doFacebookLogin = async dispatch => {
    try {
        console.log('doFacebookLogin');

        let { type, token } = await Facebook.logInWithReadPermissionsAsync('196207057539134', {
            permissions: ['public_profile']
        });
        console.log('type', type);
        
        if (type === 'cancel') {
            return dispatch({ type: FACEBOOK_LOGIN_FAIL });
        }
    
        await AsyncStorage.setItem('fb_token', token);
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } catch (err) {
        console.error(err);
        dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }
};
