export default {
  methods: {
    getFormattedNumber(number) {
      return number < 10 ? `0${number}` : number;
    },
  },
};
