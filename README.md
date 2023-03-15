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

##### Web

![](./screenshots/sc1.png)
![](./screenshots/sc2.png)

#### Mobile

![](./screenshots/sc3.png)
![](./screenshots/sc4.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/responsive-interactive-rating-component-biIPul6ROp)
- Live Site URL: [Vercel](https://fm-interactive-rating-dun.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Development Environment
- [Tailwind](https://tailwindcss.com/) - CSS Framework

### What I learned

Learned about this library that allows me to dynamically set the custom css classes without having to use ternary operators everywhere

```js
import CN from 'classnames'
<h1 className={CN(".classes .that .don't .change", {".dynamic-classes-such-as .selected": isSelected})}>Hey, I'm using dynamic classes! </h1>
}
```

### Useful resources

- [Tailwind Documentation](https://tailwindcss.com/docs) - Tailwind as always has a very rich documentation with a lot of examples on all the classes.
- [Classnames Library](https://github.com/JedWatson/classnames) - Library to import classes dynamically into the HTML5 element

## Author

- Frontend Mentor - [@DevMaktubi](https://www.frontendmentor.io/profile/DevMaktubi)
- LinkedIn - [Breno Luiz](https://www.linkedin.com/in/breno-luiz)
