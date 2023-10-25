<template>
    <v-container class="fill-height">
      <v-responsive >
        <v-row justify="space-around">
          <v-col cols="8" lg="8" md="12" sm="12" xs>
            <v-card color="#212121">
              <v-row class="mb-4" align="center">
                <v-col cols="12" md="6" sm="12">
                  <v-card-text class="text-h6">Bem vindo!</v-card-text>
                  <v-card-title class="text-h3 mb-4">
                    Desenvolvedor Web
                  </v-card-title>
                  <v-card-text>
                    Sou um desenvolvedor PHP com experiência em criação de sistemas web, gerenciamento de dados, análise de requisitos e manutenção de sistemas legados.
                  </v-card-text>
                  <v-card-actions class="ma-2">
                    <v-btn icon variant="outlined" outlined @click="navegarPara(2)">
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                    <v-btn icon variant="outlined" @click="navegarPara(3)">
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn icon variant="outlined" @click="navegarPara(4)">
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-col>
                <v-col cols="12"  md="6" sm="12">
                  <img src="@/assets/academic.png">
                </v-col>
              </v-row>

              <v-row class="ma-2" align="center">
                <v-col cols="12"  md="6" sm="12">
                  <img src="@/assets/perfil.png">
                </v-col>
                <v-col cols="12" md="6" sm="12">
                  <v-card-title class="text-h4 mb-4">
                    Olá, sou Renan Anchieta
                  </v-card-title>
                  <v-card-text>
                    Estou Cursando o quarto período de Análise e Desenvolvimento de Sistemas na Universidade da Amazônia (UNAMA), e atualmente trabalho como estagiário na Polícia Civil do Estado do Pará no setor de Desenvolvimento onde realizo manutenção de diversos sistemas administrativos, gerenciamento de banco de dados além de desenvolver novos sistemas.
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="4" lg="4" md="12" sm="12" xs>
            <v-card
             class="mx-auto mb-4"
             max-width="600"
             color="#212121"
            >
              <v-img
               src="@/assets/docker-laravel.jpg.jpg"
               height="200px"
               cover
              ></v-img>
              <v-card-title>
                Docker e Laravel
              </v-card-title>
              <v-card-text class="mb-2">
                Ambientes preparados com Docker para o controle da versão de PHP em projetos Laravel.
              </v-card-text>
            </v-card>

            <v-card
             class="mx-auto mb-4"
             max-width="600"
             color="#212121"
            >
              <v-img
               src="@/assets/nvm-node.webp"
               height="200px"
               cover
              ></v-img>
              <v-card-title>
                NVM Node.js
              </v-card-title>
              <v-card-text class="mb-2">
                Utilização de NVM para controle de versão de Node.js
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  /**
   * Data
   */
  const messages = ref([
    {
      from: 'You',
      message: `Sure, I'll see you later.`,
      time: '10:42am',
      color: 'deep-purple-lighten-1',
    },
    {
      from: 'John Doe',
      message: 'Yeah, sure. Does 1:00pm work?',
      time: '10:37am',
      color: 'green',
    },
    {
      from: 'You',
      message: 'Did you still want to grab lunch today?',
      time: '9:47am',
      color: 'deep-purple-lighten-1',
    },

  ])

  /**
   * Methods
   */
  const navegarPara = (v: number) => {
    if(v == 2) window.open('https://github.com/renananchieta');
    if(v == 3) window.open('https://www.instagram.com/renananchieta/?hl=pt-br');
    if(v == 4) window.open('https://www.linkedin.com/in/renananchietadev/');
  }
</script>
