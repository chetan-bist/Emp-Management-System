var timel =gsap.timeline();
timel.from("h2",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});
timel.from("label",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

timel.from("h4",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger:0.3
});
timel.from("h1",{
    y:20,
    opacity: 0,
    duration:0.5,
    scale:"0.5",
})
// timel.to("#box",{
//     x:450,
//     // rotate:360,
//     duration:1.5,
//     delay:1
// })
timel.from("#Search",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger:0.3
});