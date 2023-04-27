export  function animateScrollTo(targetPosition: number, duration: number): void {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
  
    function ease(t: number): number {
      // Easing function, e.g. easeInOutCubic
      return t < 0.5
        ? 4 * t * t * t
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  
    function step(currentTime: number): void {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = ease(progress);
      const newPosition = startPosition + distance * easedProgress;
      window.scrollTo(0, newPosition);
      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }