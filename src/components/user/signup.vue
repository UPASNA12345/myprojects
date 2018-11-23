<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark class="red darken-2" dense>
                <v-toolbar-title>Registration form</v-toolbar-title>
                <v-spacer></v-spacer>
                             </v-toolbar>
              <v-card-text>
                <v-form  @submit.prevent="onSignup">
                <v-text-field prepend-icon="person"
        v-validate="'required|max:10'"
        v-model="name"
        name="name"
        :counter="10"
        :error-messages="errors.collect('name')"
        label="Name"
        data-vv-name="name"
        required
      ></v-text-field>
      <v-text-field prepend-icon="email"
        v-validate="'required|email'"
        v-model="email"
        name="email"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      ></v-text-field>
        <v-text-field id="password" prepend-icon="lock" 
        
        v-model="password"
       
        name="password" 
        label="Password" 
        required
        type="password"
      ></v-text-field>
       <v-radio-group v-model="gender" :mandatory="false" label="Gender" name="gender" row>
        <v-radio color="red darken-3" label="Male" value="male"></v-radio>
        <v-radio color="red darken-3" label="Female" value="female"></v-radio>
      </v-radio-group>
             <v-select prepend-icon="location_city"
        v-validate="'required'"
        :items="items"
        v-model="select"
        :error-messages="errors.collect('select')"
        label="Country"
        name="country"
        data-vv-name="select"
        required
      ></v-select>
      <v-text-field type="file"
           name="imageUrl"
           id="image-url"
           required
      ></v-text-field>         
              </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark class="red darken-2" type="submit" @click="submit">submit</v-btn>
                
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    $_veeValidate: {
    validator: 'new'
  },

    data: () => ({
    name: '',
    email: '',
    password: '',
    gender: 'male',
    select: null,
    items: [
      'India',
      'China',
      'America',
      'Japan'
    ],
      dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 10 characters'
          // custom messages
        },
        
        select: {
          required: 'Select field is required'
        }
      }
    }
  }),
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll()
        },
       onSignup () {
         //vuex
         console.log({name: this.name, email: this.email, password: this.password, gender: this.gender})
       } 
     }
  }
</script>