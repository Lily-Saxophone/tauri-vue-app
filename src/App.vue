<script setup lang="ts">
// import Greet from "./components/Greet.vue";
import { appWindow } from "@tauri-apps/api/window";
import { onBeforeMount, ref } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit';
import { getText } from './scripts/novel.js';

const content = ref(getText());

const editor = useEditor({
  content: content,
  extensions: [
    StarterKit,
  ],
});

onBeforeMount(async () => {
  await appWindow.center();
  await appWindow.setFocus();
  // await appWindow.maximize();
})
</script>

<template>
  <!-- <div class="container">
    <h1>Welcome to Tauri!</h1>

    <div class="row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank">Tauri</a>
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank">rust-analyzer</a>
    </p>

    <Greet />
  </div> -->
  <v-app>
    <v-main>
      <tiptap />
      <v-container>
        <!-- <Editor v-model="content" /> -->
        <div class="vertical-text" contenteditable="true">
          <!-- <editor-content :editor="editor" /> -->
          <p>{{ content }}</p>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
/* .logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
} */



.vertical-text {
  height: 100%;
  width: 100%;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  font-size: 20px;
  font-family: "Noto Serif JP", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
  color: #2c3e50;
  line-height: 2em;
  text-indent: 1em;
  vertical-align: "baseline";
  outline: none;
  overflow-x: scroll;
  /* text-combine-upright: all; */
}

.container {
  height: 100vh;
  width: 100vw;
  /* background: url(./assets/paper.jpg) repeat;
  background-blend-mode: lighten; */
}

.box::-webkit-scrollbar {
  display: none;
}
</style>
