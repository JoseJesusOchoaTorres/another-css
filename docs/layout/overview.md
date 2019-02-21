## Responsive breakpoints

I'm using four break points; with the first one *(max-width: 768pm)* I'll cover from 0px to 768px and with the last media query *(min-width: 1200px)* I'll start covering from 1200px and up.

```css

/**
* Small devices (landscape phones, 768px and down)
*/

@media (max-width: 768px) { ... }


/**
* Medium devices (tablets, 768px and up)
*/

@media (min-width: 768px) { ... }


/**
* Large devices (desktops, 992px and up)
*/

@media (min-width: 992px) { ... }


/**
* Extra large devices (large desktops, 1200px and up)
*/

@media (min-width: 1200px) { ... }

```




## Container

The `.container` class is not really necessary; it's an optional class to add **2rem** in the padding *(top, right, bottom and left)*. The padding size will be updated in the small breakpoint from **2rem** to **1rem**.

> You can use this class in any element just to add padding but it is usually used in bands *(sections)*

#### Adding space in a band

<div class="doc-example">
    <section class="introduction-section  container">
        <div class="row">
            <div class="col-12">
                <h1 class="hp-h1">Introduction title</h1>
                <p>Sed sodales bibendum mi, eget vestibulum nulla dignissim sed. Sed vel lacinia nisi. Praesent velit ex, pretium sed lacinia eget, convallis sed ex. Pellentesque consectetur sollicitudin faucibus. Vestibulum consequat turpis in odio tincidunt porttitor. Mauris malesuada lobortis lectus sit amet porttitor. Sed non dui nisi.</p>
            </div>
        </div>
    </section>
</div>

```html
<section class="introduction-section  container">
    <div class="row">
        <div class="col-12">
            <h1 class="hp-h1">Introduction title</h1>
            <p>Sed sodales bibendum mi, eget vestibulum nulla dignissim sed. Sed vel lacinia nisi. Praesent velit ex, pretium sed lacinia eget, convallis sed ex. Pellentesque consectetur sollicitudin faucibus. Vestibulum consequat turpis in odio tincidunt porttitor. Mauris malesuada lobortis lectus sit amet porttitor. Sed non dui nisi.</p>
        </div>
    </div>
</section>
```




## Rows

Rows are the most basic layout element and are required when using our grid system *(column classes)*. There are two kinds of rows:

#### Row

This first one row will be truncated `max-width: 1400px`.

```html
<div class="row">
    <div class="col-12">...</div>
</div>
```

#### Row full with

In another hand, this second row will take **100% of the viewport width**.

```html
<div class="row-fullwith">
    <div class="col-12">...</div>
</div>
```