function animation() {
    var tl = gsap.timeline();

    tl.to("#yellow", {
        top: "-100%",
        duration: 1.3,
        delay: 0.4,
        ease: "expo.out",
    })
    tl.from("#black2", {
        top: "100%",
        delay: 0.6,
        duration: 1,
        ease: "expo.out",
    }, "anim")
    tl.to("#loader h1", {
        delay: 0.6,
        duration: 0.7,
        // color: "red"
    }, "anim")
    tl.to("#loader", {
        display: "none"
    })
    tl.to("#loader", {
        opacity: 0
    })
}

animation()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele) {
    ele.addEventListener("mouseenter", function() {
        var bgimg = ele.getAttribute("data-vid")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})