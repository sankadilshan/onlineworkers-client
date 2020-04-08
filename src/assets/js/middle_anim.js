function animMiddle() {
    var t1 = new TimelineMax({ onUpdate: updatePercentage });
    const controller = new ScrollMagic.Controller();

    t1.from("#anim", 0.5, { y: -200, opacity: 0 });
    t1.from(".a", 0.5, { x: 400, opacity: 0 }, "=-.1");
    t1.from(".b", 0.5, { x: 200, opacity: 0 }, "=-.3");
    t1.from(".c", 0.5, { x: 100, opacity: 0 }, "=-.4");


    const scene = new ScrollMagic.Scene({
        triggerElement: ".body",
        triggerHook: "onLeave",
        duration: "100%",

    })
        .setPin(".body")
        .setTween(t1)
        .addTo(controller);

    function updatePercentage() {
        t1.progress()

    }
}