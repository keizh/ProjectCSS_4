let touchStartX = 0;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

document
  .querySelector("#marquee1")
  .addEventListener("touchmove", function (event) {
    const touchCurrentX = event.touches[0].clientX;
    const touchDeltaX = touchCurrentX - touchStartX;

    // Disable horizontal touch scrolling on the marquee
    if (Math.abs(touchDeltaX) > 5) {
      event.preventDefault();
    }
  });

var myDiv = document.querySelectorAll("#marquee1");

myDiv.forEach(function (element) {
  element.addEventListener("touchstart", handleTouchStart, { passive: false });
  element.addEventListener("touchmove", handleTouchMove, { passive: false });
});

function handleTouchStart(event) {
  // Prevent default behavior
  event.preventDefault();
}

function handleTouchMove(event) {
  // Prevent default behavior
  event.preventDefault();
}
