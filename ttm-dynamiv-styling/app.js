const app = Vue.createApp({
  data() {
    return {
      bgColor: '#8ddba4',
      className: '',
      isParagraphVisible: true,
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.className === 'user1',
        user2: this.className === 'user2',
        hidden: !this.isParagraphVisible ,
        visible: this.isParagraphVisible,
      };
    }
  },
  methods: {
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    }
  }
});

app.mount('#assignment');
