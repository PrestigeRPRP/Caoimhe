/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective: 600 });
TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

var total = 50;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

// Array of image sources
var images = [
    "img/candy.svg", // Replace with your first image path
    "img/petal.png", // Replace with your second image path
];

for (var i = 0; i < total; i++) {
    var Div = document.createElement("div");
    var img = document.createElement("img");

    // Alternate between the two images
    img.src = images[i % 2];

    // Set the image size directly
    gsap.set(img, {
        width: 30, // Adjust the width in pixels
        height: 30, // Adjust the height in pixels
    });

    // Add the image to the div
    Div.appendChild(img);

    // Set initial position and attributes for the div
    TweenLite.set(Div, {
        attr: { class: "dot" },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
    });

    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
    });
    TweenMax.to(elm, R(4, 8), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
    });
    TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
    });
}

function R(min, max) {
    return min + Math.random() * (max - min);
}


var typed = new Typed('#text', {
    strings: ['Youre always welcome lagi dito sa hood namin hanapin mo lang ako. Puppuntahan agad kita! Gusto ko lang din mag pasalamat na nagkausap at nagkita ulit tayo. Pwede ka dito anytime sa hood namin pag wala kamang matambayan or wala kang mapuntahan. Sa ngayon wala pa akong lakas ng loob na puntahan ka sa simbahan ng TWAK kasi medyo nahihiya pa ko kapag madaming tao. Gusto ko lowkey muna kasi hindi ako sanay Sana maintindihan mo. Lagi kang mag iingat at kung may problem ka or kailangan, alam mo namang nandito lang ako para sayo'],
    startDelay: 3000,
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});


window.addEventListener('load', () => {
    const audio = document.getElementById('audio');

    // Set the initial volume to 0.2 (20% of max volume)
    audio.volume = 0.1;

    // Play the audio muted on page load
    audio.play()
      .then(() => {
        console.log("Audio is playing (muted) at volume 0.2!");

        // Set a 2-second timer for autoplay if no user click happens
        let timer = setTimeout(() => {
          // If no click happens, unmute and play the audio after 2 seconds
          audio.muted = false;
          console.log("Audio unmuted and playing after 2 seconds!");
        }, 400); // 2 seconds timer

        // If the user clicks, clear the timer and unmute the audio
        window.addEventListener('click', () => {
          clearTimeout(timer);  // Clear the 2-second timer
          audio.muted = false;  // Unmute the audio
          console.log("Audio unmuted and playing after user click!");
        });
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  });
