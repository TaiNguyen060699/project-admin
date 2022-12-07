import Utils from '@/helpers/utils';
import { doLogin, getAuth } from '@/repositories/index';
import {
    LOGIN_ACCOUNT,
} from '@/store/actions.type'
import {
    SET_ACCOUNT,
} from '@/store/mutations.type'

import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {},
        username: null,
        password: null,
        token: '',
        errorMsg: ''
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async [LOGIN_ACCOUNT]({ commit }, params) {
            Utils.setLoading(true);
            try {
                const { user } = await doLogin(params)
                Utils.setLoading(false);

                localStorage.setItem('userLogin', JSON.stringify(user));
                Utils.setCookie('access_token', user.token);
                return true;
            } catch (error) {

            }
        }
    },
    modules: {
    }
})
