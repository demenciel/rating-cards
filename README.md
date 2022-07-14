# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](images/Screen%20Shot%202022-07-14%20at%205.00.13%20PM.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

The overrall design was pretty simple to execute. Since there was two cards and they needed to take turn I decided to hide the second card at first and make it appear when the submit button was clicked,, hiding the first card.
```js
function hide() {
    card1.style.display = 'none';
}

function show() {
    card2.style.display = "flex";
}
```

I struggled with the part of displaying the rating chosen by the user, on the first card, on the second card. At first I saw the cards as two different pages insted of 1 page with two elements which confused with me with getting the value of the onclick and applying that value to the second card, as if those were two seperate actions when in fact they are one.
But then I simple changed the innerHTML of the second card right when the chosen number was clicked.
```js
function storeValue(clicked_id) {
    var number = clicked_id;
    numberChange.innerHTML = number;
}
```

### Continued development

I still have to refine my skills with the DOM(Document Object Manipulation). 

## Author

- Website - [Alexandre Couture](https://www.demenciel.github.io/portfolio)


