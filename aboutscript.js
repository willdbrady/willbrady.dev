(function () {
  const safeToAnimate = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches;

  if (!safeToAnimate) return;

  let xPosition;
  let yPosition;

  let storedXPosition;
  let storedYPosition;

  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }

  // update the CSS vars within request animation frame
  function movePointer() {
    window.requestAnimationFrame(movePointer);

    // important, only recalculating if the value changes
    if (storedXPosition === xPosition && storedYPosition === yPosition) return;

    // shift the range from 0 to 100 to -50 to 50 to keep the movement centralised
    x = percentage(xPosition, windowWidth) - 50;
    y = percentage(yPosition, windowHeight) - 50;

    // log the values out to the screen

    // update the css vars
    document.documentElement.style.setProperty("--mouse-x", `${x}%`);
    document.documentElement.style.setProperty("--mouse-y", `${y}%`);

    // update the stored positions with the current positions
    storedXPosition = xPosition;
    storedYPosition = yPosition;
  }
  window.requestAnimationFrame(movePointer);

  // updating the mouse coordinates
  function updateMouseCoords(event) {
    xPosition = event.clientX;
    yPosition = event.clientY;
  }
  window.addEventListener("mousemove", updateMouseCoords);

  // update if browser resizes
  function updateWindowSize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  }
  window.addEventListener("resize", updateWindowSize);
})();
