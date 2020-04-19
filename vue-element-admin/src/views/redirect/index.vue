<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
    console.log('---redirect1 path', path, query)
  },
  render: function(h) {
    console.log('---redirect2 render h()')
    return h() // avoid warning message
  }
}
</script>
