<template>
  <div class = container>
  <h1>Accounts</h1><br><br><br>
    <table class="=table table-striped table-borderes" id="user">
    <thead>
      <tr>
        <th>ID</th>
        <th>First name</th>
        <th>Surname</th>
        <th>Account Number</th>
        <th>Options</th>
      </tr>
    </thead>
      <tbody>

      <tr v-for="Display_alias in Display">
        <td class="text-left">{{Display_alias.id}}</td>
        <td class="text-left">{{Display_alias.firstName}}</td>
        <td class="text-left">{{Display_alias.surname}}</td>
        <td class="text-left">{{Display_alias.accountNumber }}</td>


          <b-button :variant="'primary'" :to="'/edit/' + Display_alias.id">Edit</b-button>
        <b-button :variant="'danger'" @click="deleteAccount(Display_alias.id)">Delete</b-button>
      </tr>
      </tbody>
    </table>
    <router-link to="/Add">
      <input type="submit" value="Add User"/>
    </router-link>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
        name: "Display",
        data() {
            return{
                Display:[],


            }
        },


    methods:{
      deleteAccount(id) {
        axios.delete("http://localhost:8082/backend/delete/" + id).then(response => {
          this.Display = response.data;
          this.Display.forEach((Account, index) => {
            if (Account.id === response.data.id) {
              this.Display.splice(index, index)
            }
          })
        }).catch(e => 1);
        location.reload();
      },
      getUsers() {
        axios.get('http://localhost:8082/backend/all')
          .then((response) => {
            console.log(response.data);
            this.Display = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    mounted() {
      this.getUsers()
    }


  }
</script>

<style scoped>
  #user {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }


  #user tr:nth-child(even){background-color: antiquewhite;}

  #user tr:hover {background-color: lightgoldenrodyellow;}

  #user td, #user th {
    border: 1px solid #ddd;
    padding: 8px;
  }


  #user th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: cornflowerblue;
    color: white;
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
  button{
    margin: 5px;
  }

</style>
