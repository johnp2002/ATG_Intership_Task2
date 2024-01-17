gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin,);

gsap.set('body', {
    backgroundColor: '#ccccce'
});
gsap.config({ trialWarn: false });

var anim = [];

var sec1an = gsap.from(".sec1mob1", { y: 200, opacity: 0, duration: 1, stagger: 0.2, paused: true });
var sec2an = gsap.timeline()
    .fromTo(".sec2mob1", { y: 400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 })
    .fromTo(".sec2mob2", { y: -400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<');
var sec3an = gsap.timeline()
    .fromTo(".sec3mob1", { y: 400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 })
    .fromTo(".sec3mob2", { y: -400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<');
var sec4an = gsap.timeline()
    .fromTo(".sec4pzz", { x: -400, opacity: 0, duration: 1 }, { x: 0, opacity: 1 })
    .fromTo(".sec4mob1", { y: 400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<')
    .fromTo(".sec4brd", { y: -400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<')
    .fromTo(".sec4mob2", { y: -400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<')
    .fromTo(".sec4brd2", { y: 400, opacity: 0, duration: 1 }, { y: -50, opacity: 1 }, '<');
var sec5an = gsap.timeline()
    .fromTo(".sec5mob1", { y: -400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 })
    .fromTo(".sec5mob2", { y: 400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<0.1')
    .fromTo(".sec5mob3", { y: -400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<0.2')
    .fromTo(".sec5mob4", { y: 400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<0.3')
    .fromTo(".sec5mob5", { x: 400, opacity: 0, duration: 1 }, { x: 0, opacity: 1 }, '<0.2');
var sec6an = gsap.fromTo('.sec6hand', { y: 400, duration: 2, paused: true }, { y: 0 });
var sec7an = gsap.timeline()
    .fromTo(".sec7mob1", { y: 400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 })
    .fromTo(".sec7mob2", { y: 400, opacity: 0, duration: 1 }, { y: 0, opacity: 1 }, '<0.1');

anim.push(sec1an)
anim.push(sec2an)
anim.push(sec3an)
anim.push(sec4an)
anim.push(sec5an)
anim.push(sec6an)
anim.push(sec7an)

var b = 0;
// Function to restart animations when scrolling back
function restartAnimations(index) {
    // gsap.to('#Transparent_Ring',{
    //     drawSVG:`${b}%`, duration:1
    // })
    // b+=16.5;
    // console.log(index)
    gsap.to('#Transparent_Ring',{
        drawSVG:`${b}%`, duration:1
    })
    b+=(100 / 6);
    console.log(index)
    anim[index].restart();
   
}

// Function to kill animations when scrolling back
function killAnimations(index) {
    anim[index].reverse();
    // gsap.to('#Transparent_Ring',{
    //     drawSVG:`${(index*17)-19}%`, duration:1
    // })
    // b = (index*16)+3;
    gsap.to('#Transparent_Ring',{
        drawSVG:`${(index) * (100 / 6) - (100 / 6)}%`, duration:1
    })
    b = (index*(100 / 6));
    // console.log(index*17 + 'killing functioin')
}



gsap.set('#Transparent_Ring',{
    drawSVG:0, 
})


//working code
document.addEventListener('DOMContentLoaded', function () {
    const boxes = gsap.utils.toArray('section');
    const sectionColors = ['#ccccce', '#1c0362', '#141748', '#000000', '#2ecede', '#c60153', '#00b769'];

    boxes.forEach((box, index) => {
        gsap.to('body', {
            backgroundColor: sectionColors[index],
            scrollTrigger: {
                trigger: box,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                scroller: '.scroll-container',
                toggleActions: 'play restart restart reverse',
                onEnter: () => restartAnimations(index),
                onLeaveBack: () => killAnimations(index),
            },
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const boxes = gsap.utils.toArray('section');
    const sectionColors = ['#5e17b0', '#4d27cd', '#0e123a', '#16263b', '#124ca1', '#012c91', '#00834c'];

    boxes.forEach((box, index) => {
        gsap.to('.prog', {
            backgroundColor: sectionColors[index],
            scrollTrigger: {
                trigger: box,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                scroller: '.scroll-container',
                toggleActions: 'play restart restart restart',
            },
        });
    });
});

// gsap.from('#Transparent_Ring',{
//     drawSVG:0, duration:3
// })


//working proprotions of
// gsap.set('#Transparent_Ring',{
//     drawSVG:0, 
// })

// var b = 16
// setInterval(() => {
    // gsap.to('#Transparent_Ring',{
    //     drawSVG:`${b}%`, duration:3
    // })
    // b+=17;
    
// }, 3000);

// const dotsTimelines = [];

// document.addEventListener('DOMContentLoaded', function () {
//     const boxes = gsap.utils.toArray('section');
//     const sectionColors = ['#ccccce', '#1c0362', '#141748', '#000000', '#2ecede', '#c60153', '#00b769'];

//     // DrawSVG animation for the ring
//     gsap.from('#Transparent_Ring', {
//         drawSVG: 0,
//         duration: 3,
//     });

//     // Loop through each section
//     boxes.forEach((box, index) => {
//         const dotTimeline = gsap.timeline({
//             scrollTrigger: {
//                 trigger: box,
//                 start: 'top center',
//                 end: 'bottom center',
//                 scrub: true,
//                 scroller: '.scroll-container',
//                 toggleActions: 'play none none reverse',
//             },
//         });

//         // Dot animations for each section
//         dotTimeline.fromTo(
//             `#Dots${index + 1} path`,
//             { opacity: 0, scale: 0 },
//             { opacity: 1, scale: 1, duration: 0.5 }
//         );

//         dotsTimelines.push(dotTimeline);

//         gsap.to('body', {
//             backgroundColor: sectionColors[index],
//             scrollTrigger: {
//                 trigger: box,
//                 start: 'top center',
//                 end: 'bottom center',
//                 scrub: true,
//                 scroller: '.scroll-container',
//                 toggleActions: 'play none none reverse',
//                 onEnter: () => restartAnimations(index),
//                 onLeaveBack: () => killAnimations(index),
//             },
//         });
//     });
// });

// // Function to restart animations when scrolling back
// function restartAnimations(index) {
//     dotsTimelines[index].restart();
//     // animations[index].restart();
// }

// // Function to kill animations when scrolling back
// function killAnimations(index) {
//     dotsTimelines[index].kill();
//     // animations[index].kill();
// }


// svg draw scrptss



// partially working 
// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

// const totalSections = 7;

// const animations = [];

// function drawSVGLineOnScroll(svgId, sectionIndex) {
//     const svgSelector = `#${svgId}`;
//     const svgElement = document.querySelector(svgSelector);

//     if (!svgElement) {
//         console.error(`SVG element with ID '${svgId}' not found.`);
//         return;
//     }

//     const totalLength = svgElement.getTotalLength();
//     const drawPercentage = (sectionIndex + 1) * (100 / totalSections);

//     const timeline = gsap.timeline({
//         scrollTrigger: {
//             trigger: `section:nth-child(${sectionIndex + 1})`,
//             start: 'top top',
//             end: `+=100%`,
//             scrub: true,
//             markers: true, // Set to true for debug markers
//             onUpdate: self => {
//                 const progress = self.progress;
//                 const currentDrawLength = progress * drawPercentage;
//                 gsap.set(svgSelector, { drawSVG: `0% ${currentDrawLength}%` });
//             },
//         },
//     });

//     timeline.to(svgSelector, { drawSVG: `0% ${drawPercentage}%`, duration: 1, ease: 'power1.inOut' });

//     animations.push(timeline);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     for (let i = 0; i < totalSections; i++) {
//         drawSVGLineOnScroll('Transparent_Ring', i);
//     }
// });

// // Function to restart animations when scrolling back
// function restartAnimations(index) {
//     animations[index].restart();
// }

// // Function to kill animations when scrolling back
// function killAnimations(index) {
//     animations[index].kill();
// }

// v2 script




// var tl = gsap.timeline();

// // Set initial state
// tl.set("#ring path", { drawSVG: "0%" });

// // Add animations to the timeline
// tl.to("#path1", { duration: 1, drawSVG: "100%" });
// tl.to("#path2", { duration: 1, drawSVG: "100%" }, "-=0.9");
// tl.to("#path3", { duration: 1, drawSVG: "100%" }, "-=0.9");
// tl.to("#path4", { duration: 1, drawSVG: "100%" }, "-=0.9");
// tl.to("#path5", { duration: 1, drawSVG: "100%" }, "-=0.9");
// tl.to("#path6", { duration: 1, drawSVG: "100%" }, "-=0.9");

// // Play the timeline
// tl.play();




//dots animations



document.addEventListener('DOMContentLoaded', function () {
    const boxes = gsap.utils.toArray('section');
    const dotsGroups = gsap.utils.toArray('[id^="Dots"]'); // Select all groups with IDs starting with 'Dots'

    // Set initial scale of all dots groups to 0
    gsap.set(dotsGroups, { scale: 0 });

    boxes.forEach((box, index) => {
        gsap.to(dotsGroups[index], {
            scale: 1.1,
            // transformOrigin: 'center center', // Set the transform origin to the center
            scrollTrigger: {
                trigger: box,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                scroller: '.scroll-container',
                toggleActions: 'play none none reverse',
                onEnter: () => restartAnimation(index),
                onLeaveBack: () => killAnimation(index),
            },
        });
    });
});

function restartAnimation(index) {
    // You can add additional animations or actions when the section comes into view
    console.log(`Section ${index + 1} entered`);
}

function killAnimation(index) {
    // You can add additional animations or actions when the section goes out of view
    console.log(`Section ${index + 1} left`);
}



//text animations

document.addEventListener('DOMContentLoaded', function () {
    const boxes = gsap.utils.toArray('section');
    const sectionColors = ['#ccccce', '#1c0362', '#141748', '#000000', '#2ecede', '#c60153', '#00b769'];

    let currentSection = null; // To store the index of the currently animated section

    function restartAnimations(index) {
        if (currentSection !== null) {
            gsap.to(`#sec${currentSection + 1}tit`, { opacity: 0 });
        }

        switch (index) {
            case 0:
                gsap.timeline().add(sec1Animations);
                break;
            case 1:
                gsap.timeline().add(sec2Animations);
                break;
            case 2:
                gsap.timeline().add(sec3Animations);
                break;
            case 3:
                gsap.timeline().add(sec4Animations);
                break;
            case 4:
                gsap.timeline().add(sec5Animations);
                break;
            case 5:
                gsap.timeline().add(sec6Animations);
                break;
            // Add more cases if you have additional sections
        }

        currentSection = index;
    }

    function killAnimations(index) {
        // Set opacity to 0 for the current element
        gsap.to(`#sec${index + 1}tit`, { opacity: 0 });

        // Set opacity to 0 for elements below the current element
        for (let i = index + 1; i < boxes.length; i++) {
            gsap.to(`#sec${i + 1}tit`, { opacity: 0 });
        }
    }

    const sec1Animations = [
        gsap.from("#sec1tit h1", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec1tit p", { opacity: 0, y: 50, duration: 1 })
    ];

    const sec2Animations = [
        gsap.from("#sec2tit p", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec2tit h1", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec2tit .fs-6", { opacity: 0, y: 50, duration: 1 })
    ];

    const sec3Animations = [
        gsap.from("#sec3tit p", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec3tit h1", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec3tit .fs-6", { opacity: 0, y: 50, duration: 1 })
    ];

    const sec4Animations = [
        gsap.from("#sec4tit p", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec4tit h1", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec4tit .fs-6", { opacity: 0, y: 50, duration: 1 })
    ];

    const sec5Animations = [
        gsap.from("#sec5tit p", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec5tit h1", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec5tit .fs-6", { opacity: 0, y: 50, duration: 1 })
    ];

    const sec6Animations = [
        gsap.from("#sec6tit p", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec6tit h1", { opacity: 0, y: 50, duration: 1 }),
        gsap.from("#sec6tit .fs-6", { opacity: 0, y: 50, duration: 1 })
    ];

    boxes.forEach((box, index) => {
        gsap.fromTo(`#sec${index + 1}tit`, { opacity: 0 }, {
            opacity: 1,
            scrollTrigger: {
                trigger: box,
                start: 'top center',
                end: (index === boxes.length - 1) ? 'bottom bottom' : 'bottom center',
                scrub: true,
                scroller: '.scroll-container',
                toggleActions: 'play restart restart reverse',
                onEnter: () => restartAnimations(index),
                onLeaveBack: () => killAnimations(index),
            },
        });
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const boxes = gsap.utils.toArray('section');
//     const sectionColors = ['#ccccce', '#1c0362', '#141748', '#000000', '#2ecede', '#c60153', '#00b769'];

//     function restartAnimations(index) {
//         switch (index) {
//             case 0:
//                 gsap.timeline().add(sec1Animations);
//                 break;
//             case 1:
//                 gsap.timeline().add(sec2Animations);
//                 break;
//             case 2:
//                 gsap.timeline().add(sec3Animations);
//                 break;
//             case 3:
//                 gsap.timeline().add(sec4Animations);
//                 break;
//             case 4:
//                 gsap.timeline().add(sec5Animations);
//                 break;
//             case 5:
//                 gsap.timeline().add(sec6Animations);
//                 break;
//             // Add more cases if you have additional sections
//         }
//     }

//     function killAnimations(index) {
//         gsap.to(`#sec${index + 1}tit`, { clearProps: 'all' });
//     }

//     const sec1Animations = [
//         gsap.from("#sec1tit h1", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec1tit p", { opacity: 0, y: 50, duration: 1 })
//     ];

//     const sec2Animations = [
//         gsap.from("#sec2tit p", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec2tit h1", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec2tit .fs-6", { opacity: 0, y: 50, duration: 1 })
//     ];

//     const sec3Animations = [
//         gsap.from("#sec3tit p", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec3tit h1", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec3tit .fs-6", { opacity: 0, y: 50, duration: 1 })
//     ];

//     const sec4Animations = [
//         gsap.from("#sec4tit p", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec4tit h1", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec4tit .fs-6", { opacity: 0, y: 50, duration: 1 })
//     ];

//     const sec5Animations = [
//         gsap.from("#sec5tit p", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec5tit h1", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec5tit .fs-6", { opacity: 0, y: 50, duration: 1 })
//     ];

//     const sec6Animations = [
//         gsap.from("#sec6tit p", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec6tit h1", { opacity: 0, y: 50, duration: 1 }),
//         gsap.from("#sec6tit .fs-6", { opacity: 0, y: 50, duration: 1 })
//     ];

//     boxes.forEach((box, index) => {
//         gsap.fromTo(`#sec${index + 1}tit`,{opacity:0}, {
//             opacity:1,
//             scrollTrigger: {
//                 trigger: box,
//                 start: 'top center',
//                 end: 'bottom center',
//                 scrub: true,
//                 scroller: '.scroll-container',
//                 toggleActions: 'play restart restart reverse',
//                 onEnter: () => restartAnimations(index),
//                 onLeaveBack: () => killAnimations(index),
//             },
//         });
//     });
// });