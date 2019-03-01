## Show or hide

There are two classes to show `hp-sm-visible` or hide `hp-sm-hidden` elements only in *small* breakpoint to mobile devices.

> The `hp-sm-visible` class is using `display: flex;` to show the element again.

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row">
        <div class="col-12 [ hp-background-color-green-1 hp-sm-visible ]">
            <p class="[ hp-bold hp-text-uppercase ]">Visible in mobile 😀</p>
        </div>
        <div class="col-12 [ hp-background-color-green-2 hp-sm-hidden ]">
            <p class="[ hp-bold hp-text-uppercase ]">Hidden in mobile 😔</p>
        </div>
    </div>
</div>

```html
<div class="row">
    <div class="col-12 hp-sm-visible">
        <p>Visible in mobile 😀</p>
    </div>
    <div class="col-12 hp-sm-hidden">
        <p>Hidden in mobile 😔</p>
    </div>
</div>
```