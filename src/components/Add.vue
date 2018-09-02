<template>
  <div class = container>
    <h1>Add an Account</h1><br><br><br>

    <form @submit="addUser">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your first name.." v-model="Account.firstName">

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." v-model="Account.surname">

      <label for="accno">Account Number</label>
      <input type="text" id="accno" name="accountnumber" placeholder="Account number.." v-model="Account.accountNumber">

        <input type="submit" value="Submit"/>

    </form>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Router from 'vue-router'
  import NavigationBar from '@/components/NavigationBar'
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import axios from 'axios'
  Vue.use(BootstrapVue);

    export default {
        name: "Add",
      data(){
          return{
            Account: {firstName: '', surname: '', accountNumber: ''},
          }
      },
      components:{
          NavigationBar
      },

      methods: {
          addUser (event) {
            event.preventDefault();
            const add = {
              firstName: this.Account.firstName,
              surname: this.Account.surname,
              accountNumber: this.Account.accountNumber,

            };
            console.log(add)
           axios.post('http://localhost:8082/backend/add', add)
             .catch(error => {
               console.log(error)
             });
            console.log(this.addUser);
            this.$router.push('Display')
          }

      }
    }
</script>

<style scoped>
  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
</style>
