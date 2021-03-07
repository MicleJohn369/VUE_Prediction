export default {
  methods: {
    getCellColor(a, b, c) {
      let res = '';
      if (a === b) {
        if (b === c) {
          if (c > 0) {
            res = 'warning';
          }
        } else if (b > c) {
          res = 'warning';
        } else {
          res = 'error';
        }
      } else if (a > b) {
        if (b > c) {
          res = 'success';
        } else if (b === c) {
          res = 'success';
        } else if (a > c) {
          res = 'success';
        } else if (a === c) {
          res = 'warning';
        } else if (a < c) {
          res = 'error';
        }
      } else if (a < b) {
        if (b > c) {
          if (a > c) {
            res = 'error';
          } else if (a === c) {
            if (a > 0) {
              res = 'warning';
            }
          } else if (a > 0) {
            res = 'error';
          }
        } else if (b === c) {
          res = 'error';
        } else if (a > c) {
          res = 'error';
        } else if (a === c) {
          res = 'warning';
        } else if (a < c) {
          if (a > 0) {
            res = 'error';
          }
        }
      }

      return res;
    },
  },
};
