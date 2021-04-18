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
  html {
    background-color: black;
  }

  #app {
    font-family: 'Press Start 2P', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #aaa66d;
  }

  #nav a.router-link-exact-active {
    color: #ffe555;
  }

  #container {
    background: linear-gradient( rgba(5, 11, 31, .8), rgba(5, 11, 31, .8) ), url('assets/pikachu.jpg');
    background-position: center top;
    width: 100%;
    height: 100vh;
  }

  h1 {
    color: goldenrod;
  }
  h2, h3 {
    color: gold;
  }
</style>
