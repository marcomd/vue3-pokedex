<template>
  <div id="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Press Start 2P', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background-color: black;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #container {
    background: linear-gradient( rgba(5, 11, 31, .8), rgba(5, 11, 31, .8) ), url('assets/pikachu.jpg');
    background-position: center top;
    width: 100%;
    height: 100vh;
  }
</style>
