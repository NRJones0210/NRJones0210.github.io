var mainWrapper = document.getElementsByTagName('main')[0],
    njLogo = document.getElementById('logo_block'),
    
    // set the duration in pixels
    duration = "90%",
    
    // define the main controller for ScrollMagic
    // (we can have multiple controllers if needed)
    controller = new ScrollMagic.Controller({
      globalSceneOptions: {
           // set trigger hook to top of viewport
           triggerHook: 0
      }
    });

// set the height of the container for the
// duration of the animation
mainWrapper.style.height = duration;

// start a new ScrollMagic scene by calling the
// provided method from the ScrollMagic Class
new ScrollMagic.Scene({
    triggerElement: mainWrapper,
    duration: "90%"
})

// start our tween/animation
.setTween(new TimelineMax().add([

    // hero block animations
    // TweenMax.to(njLogo, 1, {width:100, height:100}),
    TweenMax.to(njLogo, 1, {scale: 0.3}),
    // TweenMax.to(njLogo, 1, {scaleX: -0.1}),
    
    // sub block animations
    // TweenMax.staggerTo('.sub-block', 1, {y: 0}, 0.15),
    // TweenMax.staggerTo('.sub-block', 1, {opacity: 1, ease: Back.easeOut}, 0.15)
]))

// set hero block fixed for duration of wrapper
// .setPin(njLogo)

// add helpful indicators to help with setting up animations right
// 
// get indicator cdn
// .addIndicators()

// finally, we add the animation to the
// main controller we defined in the beginning
.addTo(controller);