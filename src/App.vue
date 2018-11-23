<template>
  <v-app>
     <v-toolbar dark class="red darken-2" dense>
       <v-toolbar-title>
          <router-link to="/" tag="span"  style="cursor: pointer"> Assignment Task </router-link>
       </v-toolbar-title>
       <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
          <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only">
         <v-btn flat v-for="item in menuItems" :key="item.title"
         router
         :to="item.link">
         <v-icon>{{item.icon}}</v-icon>
          {{ item.title }}</v-btn>
       </v-toolbar-items>
     </v-toolbar>
     <router-view></router-view>
      
   </v-app>
</template>

<script>
export default {
  data () {
    return {
       sideNav:false,
        menuItems: [
         {icon: 'face', title: 'Sign up', link: '/signup'},
         {icon: 'lock_open', title: 'Sign in', link: '/signin'}
       ]
    }
  },
  name: 'App'
}
</script>
