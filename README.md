# Portfolio

## A technical concept I gained mastery over

I understand a lot more clearly now how **flexbox** works, and how to avoid things like **overflow** while working with it. I think of flexbox now as a way to organize elements in a single dimension, whether it be a row or a column. One thing that can lead to overflow inside your flexbox, sometimes doesn't have to do with the flexbox itself, but rather its parent container. If the parent container of a flexbox has a fixed height or width, the flexbox container itself won't be able to grow past it to accommodate for any elements that might need to take more space, that is why ensuring that not just the flexbox, but its parent container as well is not of fixed size can help prevent overflow.

## A challenging project requirement

So I designed my **navigation bar** to be horizontal on the left side of the screen for desktop rather than on top. And I was using the `position:fixed` property in css to achieve that. But using this property removes the **element** from the normal document flow, which means that other elements will be positioned as if it didn't exist. It took me a while to fix this, but while inspecting other websites that use the same technique I realized that they all add a `margin` to the rest of the document that is just as big as the element that we are making using `position:fixed` on, this makes it seem as if the elements were being separated by their borders.

## AI usage

I mostly used AI on this project to help me debug and ask questions when I wanted to add features that I didn't know how to implement. I used it to make my **navigation bar** not transparent, so elements wouldn't be seen through it. I also asked about aria-label and what is used for. And how the `position` property in **CSS** works.

This project provided me an opportunity to build something with AI assistance. Check out my [AI Usage Document](https://docs.google.com/document/d/193TO4ID_QPyYfV976KzLtT-9G4QKu9pideeeUrOTW6Q/edit?usp=sharing) to see how I used AI on this project.
