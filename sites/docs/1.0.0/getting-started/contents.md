## Headings

The heading classes can help you to change the font size in text.

- You can use these classes in all text elements
- Remember **content and styles are two different things** so you can use a `<p>`tag with a `hp-h1` class

| HEADING      | EXAMPLE                                                                     | 
|--------------|-----------------------------------------------------------------------------|
| `hp-h1`      | <p class="hp-h1 hp-margin-top-1 hp-margin-bottom-1">H1 Heading</p>          |
| `hp-h2`      | <p class="hp-h2 hp-margin-top-1 hp-margin-bottom-1">H2 Heading</p>          |
| `hp-h3`      | <p class="hp-h3 hp-margin-top-1 hp-margin-bottom-1">H3 Heading</p>          |
| `hp-h4`      | <p class="hp-h4 hp-margin-top-1 hp-margin-bottom-1">H4 Heading</p>          |

There is an special class to use the same font size as a paragraph tag `hp-paragraph`.




## Text oversized

| SPECIAL SIZES   | EXAMPLE                                                                     | 
|-----------------|-----------------------------------------------------------------------------|
| `hp-large`      | <p class="hp-large hp-margin-top-2 hp-margin-bottom-2">H1 Heading</p>       |
| `hp-medium`     | <p class="hp-medium hp-margin-top-2 hp-margin-bottom-2">H2 Heading</p>      |
| `hp-small`      | <p class="hp-small hp-margin-top-2 hp-margin-bottom-2">H3 Heading</p>       |




## Fluid heading

The `hp-fluid-h1` will reduce or increase it's size automatically in different resolutions.

#### Example

<p class="hp-fluid-h1 hp-text-color-green-2">Fuild title</p>




## Text multiplier

The special class `hp-fontsize-x3` will multiply whatever class's size you are using by 3 or 300%.

The class cannot be applied directly to the same element you are sizing (because only 1 font size can apply per element).

> In the example you will see the `hp-fluid` class but remember, you can use the other classes too. *(hp-h1 ... hp-h4, hp-large, etc)*

#### Example

<div class="doc-example">
    <p class="hp-fluid-h1" style="line-height: 1;">
        <span class="hp-fontsize-x3 hp-text-color-green-2">Fuild title</span>
    </p>
</div>

```html
<p class="hp-fluid-h1">
    <span class="hp-fontsize-x3">Fuild title</span>
</p>
```




## Text weights

These classes can or not work, it depends of the font family that you are using in your project.

> These classes were tested using **sans-serif** and **Source Sans Pro**

| FONT WEIGHT     | EXAMPLE                           |
|-----------------|-----------------------------------|
| `hp-bold`       | <p class="hp-bold">Bold</p>       |
| `hp-regular`    | <p class="hp-regular">Regular</p>  |
| `hp-light`      | <p class="hp-light">Light</p>     |
| `hp-thin`       | <p class="hp-thin">Thin</p>      |