const { createApp } = Vue;
createApp({
  created() {},
  data() {
    return {
      randomEmail: "",
      emails: [],
    };
  },

  methods: {
    generaEmail() {
      for (let i = 0; i < 11; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((res) => {
            this.randomEmail = res.data.response;
            this.emails.push(this.randomEmail);
          });
      }
    },
  },
}).mount("#app");
