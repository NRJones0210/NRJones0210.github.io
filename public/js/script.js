var mainWrapper = document.getElementsByTagName('main')[0],
    njLogo = document.getElementById('logo_block'),
    
    duration = "90%",
    
    controller = new ScrollMagic.Controller({
      globalSceneOptions: {
           triggerHook: 0
      }
    });

mainWrapper.style.height = duration;

new ScrollMagic.Scene({
    triggerElement: mainWrapper,
    duration: duration
})

.setTween(new TimelineMax().add([
    TweenMax.to(njLogo, 1, {scale: 0.3}),
]))

// .setPin(njLogo)
// .addIndicators()

.addTo(controller);