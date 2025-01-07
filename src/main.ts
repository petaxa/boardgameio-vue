
import { createApp } from "vue";
import App from "./App.vue";
import { boardgameIo } from "./plugin/boardgame";
import { TicTacToe } from "./game/client";

const app = createApp(App);
app.use(boardgameIo(TicTacToe))
app.mount("#app");
