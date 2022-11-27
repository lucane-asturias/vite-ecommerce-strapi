<template>

  <v-toolbar class="ui menu" color="#16202b">
    <v-container fluid class="ui container">

      <div class="left-menu d-flex mr-auto">
        <router-link class="item" to="/">
          <v-app-bar-nav-icon>
            <img class="image"
              src="../assets/logo.png" 
              alt="Ecommerce" 
            />
          </v-app-bar-nav-icon>
          <p>Categorias....</p>
        </router-link>

        <router-link to="/login" class="right-menu item d-flex ml-auto">
          Iniciar sessão
        </router-link>
      </div>


    </v-container>
  </v-toolbar>

  <!-- <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img class="ui small image"
            src="../assets/logo.png" 
            alt="Ecommerce" 
          />
        </router-link>
      </div>
    </div>
  </div> -->
</template>

<script>
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

    .logout,
    .cart {
      &:hover {
        cursor: pointer
      }
    }
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
