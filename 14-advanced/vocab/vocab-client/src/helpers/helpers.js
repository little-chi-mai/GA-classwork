import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 3000,
        pauseOnInteract: true
    }
})

const vueInstance = new Vue();

const baseURL = 'http://localhost:3030/words/'; //ngrok
// const baseURL = 'http://921f6638c369.ngrok.io/words/'; // Joel's server

// High order function to handle errors in just one way.
const handleError = (fn) => (...params) => 
    fn(...params).catch((error) => {
        console.error(error);
        vueInstance.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
    });

export const api = {
    getWord: handleError(async(id) => {
        const res = await axios.get(baseURL + id); // 
        return res.data;
    }),
    getWords: handleError(async() => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    deleteWord: handleError(async(id) => {
        const res = await axios.delete(baseURL + id);
        return res.data;
    }),
    createWord: handleError(async(payload) => {
        const res = await axios.post(baseURL, payload);
        return res.data;
    }),
    updateWord: handleError(async(payload) => {
        const res = await axios.put(baseURL + payload._id, payload);
        return res.data;
    })
};