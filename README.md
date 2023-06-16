# KEK (Kreative Einfacher Kasten)

**KEK** Is a CSS Framework inspired and based on tailwindCSS But reduced and with **presets!**

# Features

```html
<p class="box blue_box centre font_sans mv-10 mh-40">KEKCSS Example</p>
<p class="centre"><a href="" class="roundbtn font_system mv-10 font-b" style="background: var(--BlueBoxFore); color: white">This is a button</a></p>
</body>
```
**EQUALS**
```css
.roundbtn {
    text-decoration: none;
    border: none;
    border-radius: var(--borderRound);
    padding: 10px 25px;

    /* element.style */

    background: var(--BlueBoxFore); 
    color: white;

    /* KEKUI */
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    margin: 10px 0px;
}
```