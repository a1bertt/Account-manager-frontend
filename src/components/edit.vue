<template>
  <div class = container>
    <h1>Edit an Account</h1><br><br><br>

    <form @submit="editUser">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your first name.." v-model="Account.firstName">

      <label for="lname">Surname</label>
      <input type="text" id="lname" name="surname" placeholder="Your surname.." v-model="Account.surname">

      <label for="accno">Account Number</label>
      <input type="text" id="accno" name="accountnumber" placeholder="Account number.." v-model="Account.accountNumber">

      <router-link to="/Display">
      <input type="submit" value="Submit"/>
      </router-link>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

    export default {
        name: "edit",
      data(){
          return {
            Account: {firstName: '', surname: '', accountNumber: ''}
          }
      },

      methods: {
        editUser (event) {
          event.preventDefault();
          const add = {
            firstName: this.Account.firstName,
            surname: this.Account.surname,
            accountNumber: this.Account.accountNumber,

          };
          console.log(add)
          axios.post('http://localhost:8082/backend/update/' + this.$route.params.id, add)
            .catch(error => {
              console.log(error)
            });
          console.log(this.editUser);
          this.$router.push('Display')
        },


        loadInputs(id){
          axios.get('http://localhost:8082/backend/all/' + id)
            .then((response) => {
              this.Account.firstName = response.data.firstName;
              this.Account.surname = response.data.surname;
              this.Account.accountNumber = response.data.accountNumber;
            })
            .catch((error) => {
              console.log(error);
            });
        }


      },


      mounted(){
          this.loadInputs(this.$route.params.id);
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
