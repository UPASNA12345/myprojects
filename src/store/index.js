import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
 state: {
   user: {
       id: 'ajaldslfalska12',
       registeredUser: ['aadsfbsd124']
   }
 },
 mutation: {
     setUser (state, payload){
         state.user = payload
     }
 },
 actions: {
     signuserup({commit}, payload){
       firebase.auth().createUserWithEmailAndPassword(payload.name, payload.email, payload.password, payload.gender)
         .then(
             user => {
               const newUser = {
                   id: user.uid,
                   registeredUser: []
               }
               commit('setUser', newUser)
             }
         )
         .catch(
            error => {
                console.log(error)
            } 
         )
     }
 },
 getters: {}
})