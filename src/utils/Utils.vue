<script>
export default {
  name: "Utils",

  data() {
    return {
      size: window.screen.width,
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  methods: {
    onResize() {
      this.size = window.screen.width;
    },
  },

  computed: {
    isMobile() {
      return this.size < 450;
    },

    tabletAndDown() {
    return this.size < 700;
    },

    smallDesktopAndDown() {
      return this.size < 900;
    },
  },
};
</script>
