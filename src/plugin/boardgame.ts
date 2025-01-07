import { BoardGameIoKey } from "@/symbols";
import type { Game } from "boardgame.io";
import { Client } from "boardgame.io/client";
import type { App } from "vue";
import { ref } from "vue";

export function boardgameIo(game: Game) {
  const client = Client({ game });
  const state = ref(client.getState());

  return {
    install(app: App) {
      client.start();
      client.subscribe((s) => (state.value = s));

      app.provide(BoardGameIoKey, { client, state });
    },
  };
}
