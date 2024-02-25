/* eslint-disable func-names */
/* eslint-disable no-param-reassign */

function isPromise(p) {
  if (typeof p === 'object' && typeof p.then === 'function') {
    return true;
  }

  if (p.constructor.name === 'AsyncFunction') {
    return true;
  }

  return false;
}

export default {
  install(Vue) {
    Vue.prototype.$isPromise = isPromise;
    Vue.prototype.$waitMs = async function (ms) {
      return new Promise((r) => {
        setTimeout(() => {
          r();
        }, ms);
      });
    };
    Vue.prototype.$goLink = function (url) {
      if (url) {
        window.open(url, '_blank');
      }
    };

    Vue.prototype.$copy = function (text, notify) {
      const input = document.createElement('input');
      input.value = text;
      const body = document.querySelector('body');
      body.append(input);

      input.select();
      document.execCommand('copy');
      input.remove();

      if (notify) {
        this.$showSuccess(`已經成功複製 ${text}`);
      }
    };
    Vue.prototype.$scrollToTop = function () {
      window.scrollTo(0, 0);
    };
  },
};
