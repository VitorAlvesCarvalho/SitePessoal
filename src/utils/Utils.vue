<script>
export default {
  name: "Utils",

  data() {
    return {
      size: window.innerWidth,
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  methods: {
    onResize() {
      this.size = window.innerWidth;
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
