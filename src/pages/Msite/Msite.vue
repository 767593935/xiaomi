<template>
  <div>
    <TempHeader />
    <TopHeader />
    <Content />
    <TempFooter />
  </div>
</template>

<script>
import TopHeader from './TopHeader'
import Content from './Content'
/* import f from "./Content" */
export default {
  name: 'Msite',
  components: {
    TopHeader,
    Content
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped></style>