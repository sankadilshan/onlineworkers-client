function animationScroll() {
  var t1 = new TimelineMax({ onUpdate: updatePercentage });
  var t2 = new TimelineMax();
  var t3 = new TimelineMax();
  const controller = new ScrollMagic.Controller();

  t1.from("#b1", 1, { x: 600, opacity: 0 });
  t1.from("span", 1.3, { width: 0 }, "=-.5");
  t1.from("#office", 1, { x: -200, opacity: 0 }, "=-.1");
  t1.from("#building", 1, { y: -200, opacity: 0 }, "=-.7");
  t1.from("#b2", .5, { x: -200, opacity: 0 });


  t2.from("#box", 1, { opacity: 0, scale: 0 });
  t2.to("#box", .5, {
    left: "20%",
    scale: 1.3,
    borderColor: 'teal',
    borderWidth: 12,
    boxShadow: '1px 1px 0px 0px rgba(0,0,0,.09)'
  });

  t3.from("#img", 1, { x: 200, opacity: 0, scale: 0 });
  t3.to("#img", .5, {
    left: "20%",
    scale: 1.3
  })


  const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin(".sticky")
    .setTween(t1)
    .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
  })
    .setTween(t2)
    .addTo(controller)

  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#box"
  })
    .setTween(t3)
    .addTo(controller)

  function updatePercentage() {
    t1.progress();
    console.log(t1.progress())
  }
}