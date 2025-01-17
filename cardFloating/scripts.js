const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#bodyPage",
        start: "50% 50%",
        end: "40% 10%",
        duration: 8,
        delay: 0.4,
        scrub: true,
        pin: true,
    }
});

tl1.to("#card1",{
    top: "-35%"
},"same");

tl1.to("#card2",{
    top: "-40%"
},"same")

tl1.to("#card4",{
    top: "-56%"
},"same")

tl1.to("#card5",{
    top: "-20%"
},"same")


const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#legPage",
        start: "0% 50%",
        end: "20% 50%",
        duration: 0.5,
        // markers: true,
        scrub: true,
    }
});

tl2.to("#card3",{
    top: "76%"
},"same2")

tl2.to("#card6",{
    top: "78%"
},"same2")


const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#legPage",
        start: "15% 40%",
        end: "40% 40%",
        duration: 1,
        // markers: true,
        scrub: true
    }
});

tl3.from("#skill-container #one",{
    opacity: 0,
    y: -200,
    delay: 0.2,
    ease: Power2
},"btn")
.from("#skill-container #two",{
    opacity: 0,
    y: -250,
    delay: 0.2,
    ease: Power2
},"btn")
.from("#skill-container #three",{
    opacity: 0,
    y: -300,
    delay: 0.1,
    ease: Power2
},"btn")
.from("#skill-container #four",{
    opacity: 0,
    y: -350,
    delay: 0.2,
    ease: Power2
},"btn")
.from("#skill-container #five",{
    opacity: 0,
    y: -360,
    delay: 0.1,
    ease: Power2
},"btn")
.from("#skill-container #six",{
    opacity: 0,
    y: -370,
    delay: 0.2,
    ease: Power2
},"btn")
.from("#skill-container #seven",{
    opacity: 0,
    y: -395,
    delay: 0.3,
    ease: Power2
},"btn")
.from("#skill-container #eight",{
    opacity: 0,
    y: -380,
    delay: 0.1,
    ease: Power2
},"btn")
.from("#skill-container #nine",{
    opacity: 0,
    y: -400,
    delay: 0.2,
    ease: Power2
},"btn")