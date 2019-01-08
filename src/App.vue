<template>
  <!-- Vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>




