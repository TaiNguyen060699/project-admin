import * as Cookies from 'es-cookie';
import router from '@/router';
import store from '@/store';
import * as $ from 'jquery';

export default {
    async setLoading(loading, delay = 300) {
        !loading && (await this.sleep(delay));
        store.dispatch('root/setIsLoading', loading, { root: true });
    },

    goToTop() {
        $('html, body').animate(
            {
                scrollTop: 0
            },
            300
        );
    },

    goToDiv($el) {
        if (!$el) return;

        const elementOffset = $el.offset().top;

        $('html, body').animate(
            {
                scrollTop: elementOffset
            },
            500
        );
    },

    isIos() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod',
            'Mac68K',
            'MacPPC',
            'MacIntel'
        ].includes(navigator.platform);
    },

    setCookie(name, data, option = {}) {
        Cookies.set(name, data, option);
    },

    getCookie(name) {
        return Cookies.get(name);
    },

    removeCookie(name) {
        Cookies.remove(name);
    },

    sleep(t) {
        return new Promise(r => setTimeout(r, t));
    },

    goToPage(route = '/', params = {}) {
        this.sleep(500);
        router.push({ path: route, params: params }).catch(() => { });
    },

    formatParamsUrl(obj) {
        return Object.keys(obj).reduce((prev, curr) => {
            if (obj[curr] !== "") {
                return (prev += `${curr}=${obj[curr]}&`);
            }
            return prev;
        }, "");
    }
};