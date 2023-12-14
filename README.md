# bouncing-ballz
## Overview


The project is a simple gravity simulation that displays multiple falling circles. Each circle's position is updated using a loop that calculates the new position based on the circle's current position, velocity, and acceleration.


To achieve smooth animations, the `requestAnimationFrame` function is used instead of `setTimeout` or `setInterval`. The `requestAnimationFrame` function is specifically designed for running animations and provides better performance by taking advantage of hardware acceleration.


In addition to using `requestAnimationFrame`, the project also implements delta time calculations. Delta time represents the time elapsed since the last frame. By taking delta time into account, the project ensures that the animations are consistent regardless of the system's performance.


## Usage


To run the project, simply open the `index.html` file in a web browser. The page will display  after clicking multiple falling circles that follow the physics of gravity.
