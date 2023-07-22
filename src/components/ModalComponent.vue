<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content modal-content--transparent">
      <div class="modal-header modal-header--transparent">
        <h2>{{ title }}</h2>
        <span class="close" @click="$emit('close')">&times;</span>
      </div>
      <div class="modal-body">
        <slot name="body"></slot> 
      </div>
      <div class="modal-footer modal-footer--transparent">
        <slot name="footer"></slot> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./../assets/styles/modal.scss";
</style>