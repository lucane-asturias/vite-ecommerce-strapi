<template>

  <v-toolbar class="ui menu" color="#16202b">
    <v-container fluid class="ui container">
      <nav class="left-menu d-flex mr-auto">

        <router-link class="item" to="/">
          <v-app-bar-nav-icon>
            <img class="image"
              src="../assets/logo.png" 
              alt="Ecommerce" 
            />
          </v-app-bar-nav-icon>
          <p>Categorias....</p>
        </router-link>

        <router-link v-if="!token" 
          class="right-menu item d-flex ml-auto"
          to="/auth"
        >Iniciar sessão</router-link>

        <template v-else>
          <router-link to=""
            class="right-menu item d-flex ml-auto"
          >Orders</router-link>
          <span class="item cart pointer">
            <v-icon icon="mdi-cart-variant" size="22" />
          </span>
          <span class="item logout pointer" @click="onLogout">
            <v-icon icon="mdi-logout-variant" size="22" />
          </span>
        </template>

      </nav>
    </v-container>
  </v-toolbar>
</template>

<script setup>
  import { getTokenApi, deleteTokenApi } from '@/apis/strapi'

  const token = getTokenApi()

  const onLogout = () => {
    deleteTokenApi()
    location.replace('/')
  }
</script>

<style lang="scss" scoped>
.ui.menu {
  // background-color: #16202b;
  border-radius: 0;

  .ui.container {
    width: 1200px !important;
  }

  .item {
    color: #fff;
    &:hover {
      color: #1fa1f1;
    }
  }

  .left-menu {
    width: 95%;
    .image {
      width: 40px;
      height: auto;
    }
  }

  .right-menu {
    width: 45%;
    justify-content: flex-end;
  }

}

/*

.ui.secondary.menu {
  background: none;
  margin-left: -0.35714286em;
  margin-right: -0.35714286em;
  border-radius: 0em;
  border: none;
  box-shadow: none;
}

left menu
  display: flex;
  margin-right: auto !important;

.left.menu .item .dropdown.icon {
  width: auto;
  float: left;
  margin: 0em 0em 0em 0em;
}
*/
</style>
