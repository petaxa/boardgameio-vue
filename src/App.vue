<script setup lang="ts">
import { computed, inject, onBeforeMount, ref } from "vue";
import { TicTacToe } from "./game/client";
import { BoardGameIoKey } from "./symbols";

const { client, state } = inject(BoardGameIoKey);

const cells = computed(() => state.value.G.cells)

const culcCellId = (row: number, col: number) => (row - 1) * 3 + col - 1

const resultMsg = computed(() => {
  const isGameOver = state.value.ctx.gameover
  if (isGameOver) {
    return isGameOver.winner !== undefined ? `Winner: ${isGameOver.winner}` : "Draw"
  } else {
    return ""
  }
})

</script>

<template>
  <table>
    <tr v-for="row in 3" :key="row">
      <td class="cell" v-for="col in 3" :key="col" @click="client.moves.clickCell(culcCellId(row, col))">
        {{ cells[culcCellId(row, col)] ?? "null" }}
      </td>
    </tr>
  </table>
  <p>{{ resultMsg }}</p>
</template>

<style>
.cell {
  border: 1px solid #555;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
