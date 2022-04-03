<template>
  <el-row class="mb-4">
    <el-button class="test" type="success" @click="increment" >
      Нажми на меня
    </el-button>
  </el-row>
  <h1 v-if="countState"></h1>
  <p>{{count}}</p>
</template>
<script setup>
import {ref, computed} from 'vue'
const count = ref(0)
const countState = computed(() => {
  return count.value%2;
})
const increment = () => {
  count.value +=1
}
</script>
<style scoped>
.test {
  font-size: 14px;
}
</style>
