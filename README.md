# domweaver

use bp as the generic Element object blueprint

```js
import bp from './element-blueprint';
```

call bp with element type and class name as arguemnts

```js
const newDiv = bp('div', 'first-div');
```

Call additional methods on the object:

Add more attributes

```js
newDiv.addAttributes({
  id: 'main-div',
  value: '23',
});
```

Append event listener

```js
newDiv.addEventListener('Click', (e) => function());
```

Add child div with the new element as an argument

```js
newDiv.addChild(
  bp('img', 'hero-img').addAttributes({
    src: 'img url here',
    alt: 'The Main Thing',
  })
);
```

Add Text to the element

```js
newDiv.addText('Main Text Content');
```

And finally, call the recursive build function on the tail end to build all elements and their children

```js
newDiv
  .addChild(bp('div', 'first-child').addChild(bp('div', 'grand-child')))
  .build();
```
