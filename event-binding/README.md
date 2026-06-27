# Event Binding

We can achieve event binding by binding the html element with a controlling function inside component .ts file.

Example : 

Inside app.html : 

```html
<button (click) = "takeAction()">Click Me</button>
```
Over here the button is binded to the (click) action which will be performed by user and ultimately the takeAction() function inside app.ts file will be invoked as below.

```ts
export class App{

    takeAction(){
        alert("Hello click event is binded successfully!");
    }
}
```

In this way we can achieve event binding in angular.


## Some of the events are:

- change
- input
- click
- blur
- focus
- mouseenter
- mouseleave
- keydown
