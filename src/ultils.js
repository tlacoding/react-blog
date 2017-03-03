import NProgress from 'nprogress';

export function formatPostDate(date) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let newDate = new Date(date);
  return days[newDate.getDay()] + ', ' + newDate.getDate() + ' ' + newDate.getFullYear();
}

export const PageProgress = {
  start() {
    NProgress.configure({
      minimum: 0.1,
      showSpinner: false,
      trickleSpeed: 100,
    });

    NProgress.start();
  },

  done() {
    NProgress.done();
    NProgress.remove();
  }
};