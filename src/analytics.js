function createAnalytics() {
  let clicksCounter = 0;
  let analyticsIsDestroyed = false;

  function clickHandler() {
    clicksCounter++;
  }

  document.addEventListener("click", clickHandler);

  return {
    destroy: function () {
      clicksCounter = 0;
      analyticsIsDestroyed = true;
    },

    getClicks: function () {
      if (analyticsIsDestroyed) {
        return "Analytics is destroyed!";
      } else {
        return clicksCounter;
      }
    },
  };
}

window.analytics = createAnalytics();
