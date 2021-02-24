import utils from '@/utils';

export default {
  methods: {
    getFormattedDate(date) {
      return this.$moment(date).format(utils.COMMON.DATE_FORMAT);
    },
  },
};
