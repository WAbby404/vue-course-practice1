const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      age: 20,
    };
  },
  methods: {
    increment() {
      console.log("age updated");
      this.age++;
    },
    handleChange(message, event) {
      event.preventDefault();
      //   console.log(message);
      this.lastName = event.target.value;
    },
    handleMiddleChange(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("Fullname computed property called.");
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    // when age is changed, run this fn
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Bob";
// }, 2000);
