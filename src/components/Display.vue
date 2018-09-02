<template>
  <div class = container>
  <h1>Existing Accounts</h1><br><br><br>
    <table class="=table table-striped table-borderes" id="user">
    <thead>
      <tr>
        <th>ID</th>
        <th>First name</th>
        <th>Surname</th>
        <th>Account Number</th>
      </tr>
    </thead>
      <tbody>

      <tr v-for="Display_alias in Display">
        <td class="text-left">{{Display_alias.id}}</td>
        <td class="text-left">{{Display_alias.firstName}}</td>
        <td class="text-left">{{Display_alias.surname}}</td>
        <td class="text-left">{{Display_alias.accountNumber }}</td>
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


        mounted() {
              axios.get('http://localhost:8082/backend/all')
                .then((response) => {
                      console.log(response.data);
                      this.Display = response.data;
                })
                .catch((error) =>{
                  console.log(error);
                });
        }
  }
</script>

<style scoped>
  #user {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }


  #user tr:nth-child(even){background-color: #f2f2f2;}

  #user tr:hover {background-color: darkcyan;}

  #user td, #user th {
    border: 1px solid #ddd;
    padding: 8px;
  }


  #user th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: slategrey;
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
</style>
