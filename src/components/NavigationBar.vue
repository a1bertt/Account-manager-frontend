<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/Display" exact>Accounts</router-link></li>
      <li><router-link to="/Add" exact>Add Account</router-link></li>
    </ul>
  </nav>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: "NavigationBar"
    }
</script>

<style scoped>
 ul{
   list-style-type: none;
   text-align: center;
   margin: 0;
 }
 li{
   display: inline-block;
   margin: 0 10px;
 }
  a {
    color: white;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: #eee;
    color:#444;
  }
</style>
