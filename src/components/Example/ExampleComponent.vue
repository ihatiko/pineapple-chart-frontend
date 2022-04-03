<template>
  <el-row class="mb-4">
    <el-button class="test" type="success" @click="increment" >
      Нажми на меня
    </el-button>
  </el-row>
  <p>{{count}}</p>
</template>
<script setup>
import {ref} from 'vue'
const count = ref(0)
const increment = () => {
  count.value +=1
}
</script>
<style scoped>
.test {
  font-size: 14px;
}
</style>
