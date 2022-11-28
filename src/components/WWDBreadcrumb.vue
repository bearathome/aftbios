<template lang="pug">
.breadcrumb.flex.row.align-center
  .parent What we do
  .arrow
  .child {{ page }}
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  font-size: 16px;
  margin-left: 84px;
  gap: 10px;
  .arrow {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    flex: 0 0 10px;
    height: 10px;
  }
  .child {
    color: #8B8B8B;
  }
}
</style>
