<template>
  <v-navigation-drawer color="#212121">
    <v-sheet 
      class="pa-4 centralizado"
      position="relative"
      color="#212121"
    > 
      <v-avatar
        color="grey"
      >
        <v-img src="@/assets/perfil.png" />
      </v-avatar>
      <v-card-title class="text-subtitle-1">Renan Anchieta</v-card-title>
      <v-card-subtitle class="text-subtitle-2">renangap18@gmail.com</v-card-subtitle>
    </v-sheet>
    <v-divider/>
    <Menu :menus="listaMenu" />
  </v-navigation-drawer>
  <v-app-bar :elevation="2" color="#212121" >
    <v-toolbar-title>Bem vindo ao meu site</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
import {MenuInterface} from "@/interfaces/MenuInterface";

const listaMenu: MenuInterface[] = [
  {
    "title": "Home",
    "icon": "mdi-home",
    "to": "/",
    "children": [],
  },
  {
    "title": "Portifólio",
    "icon": "mdi mdi-account-heart-outline",
    "to": "/portifolio",
    "children": [],
  },
  {
    "title": "Produtos",
    "icon": "mdi mdi-glasses",
    "to": "/judiciaria",
    "children": [
        {
            "title": "Óculos padrão",
            "to": "",
        },
        {
            "title": "Óculos escuros",
            "to": "",
        },
        {
            "title": "Óculos infantil",
            "to": "",
        },
    ],
  },

  {
    "title": "Vendas",
    "icon": "mdi mdi-cash-fast",
    "to": "",
    "children": [],
  },
  {
    "title": "Relatórios",
    "icon": "mdi mdi-wallet-plus",
    "to": "",
    "children": [],
  },
];
</script>

<style scoped>
.centralizado{
  text-align: center;
}

</style>
