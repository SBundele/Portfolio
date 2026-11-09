var typedFirst = new Typed("#typed-first", {
  strings: ["Hi, I'm"],
  typeSpeed: 80,
  showCursor: false,
  onComplete: function () {
    var typedLast = new Typed("#typed-last", {
      strings: ["Sourabh Bundele."],
      typeSpeed: 80,
      showCursor: false,
      onComplete: function () {
        new Typed("#typed-role", {
          strings: ["Building backend systems and AI Applications"],
          typeSpeed: 60,
          showCursor: false,
        });
      },
    });
  },
});
