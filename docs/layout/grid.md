## How it works

Our grid system uses a series of **rows** *(.row)*, and **columns** *(.col-x)* to layout and align content. It’s built with flexbox and is fully responsive. 

#### Example #1

<div class="doc-example">
    <div class="row hp-text-center">
        <div class="col-4 hp-background-color-green-1 hp-text-color-white-1">
            <p>Column 1</p>
        </div>
        <div class="col-4 hp-background-color-green-2 hp-text-color-white-1">
            <p>Column 2</p>
        </div>
        <div class="col-4 hp-background-color-green-3 hp-text-color-white-1">
            <p>Column 3</p>
        </div>
    </div>
</div>

```html
<div class="row">
    <div class="col-4">
        <p>Column 1</p>
    </div>
    <div class="col-4">
        <p>Column 2</p>
    </div>
    <div class="col-4">
        <p>Column 3</p>
    </div>
</div>
```


#### Example #2

<div class="doc-example">
    <div class="row hp-text-center">
        <div class="col-1 hp-background-color-green-1 hp-text-color-white-1">
            <p>1</p>
        </div>
        <div class="col-2 hp-background-color-green-2 hp-text-color-white-1">
            <p>2</p>
        </div>
        <div class="col-3 hp-background-color-green-3 hp-text-color-white-1">
            <p>3</p>
        </div>
        <div class="col-4 hp-background-color-green-1 hp-text-color-white-1">
            <p>4</p>
        </div>
        <div class="col-5 hp-background-color-green-2 hp-text-color-white-1">
            <p>5</p>
        </div>
        <div class="col-6 hp-background-color-green-3 hp-text-color-white-1">
            <p>6</p>
        </div>
        <div class="col-7 hp-background-color-green-1 hp-text-color-white-1">
            <p>7</p>
        </div>
        <div class="col-8 hp-background-color-green-2 hp-text-color-white-1">
            <p>8</p>
        </div>
        <div class="col-9 hp-background-color-green-3 hp-text-color-white-1">
            <p>9</p>
        </div>
        <div class="col-10 hp-background-color-green-1 hp-text-color-white-1">
            <p>10</p>
        </div>
        <div class="col-11 hp-background-color-green-2 hp-text-color-white-1">
            <p>11</p>
        </div>
        <div class="col-12 hp-background-color-green-3 hp-text-color-white-1">
            <p>12</p>
        </div>
    </div>
</div>

<details class="[ hp-padding-top-r1 hp-padding-bottom-r1 ]">
<summary class="[ hp-text-color-gray-5 hp-bold ]">See the complete code</summary>
<p>

```html
<div class="row">
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-2">
        <p>2</p>
    </div>
    <div class="col-3">
        <p>3</p>
    </div>
    <div class="col-4">
        <p>4</p>
    </div>
    <div class="col-5">
        <p>5</p>
    </div>
    <div class="col-6">
        <p>6</p>
    </div>
    <div class="col-7">
        <p>7</p>
    </div>
    <div class="col-8">
        <p>8</p>
    </div>
    <div class="col-9">
        <p>9</p>
    </div>
    <div class="col-10">
        <p>10</p>
    </div>
    <div class="col-11">
        <p>11</p>
    </div>
    <div class="col-12">
        <p>12</p>
    </div>
</div>
```

</p>
</details>


#### Example #3

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row">
        <div class="col-1 hp-background-color-green-1">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-2">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-3">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-1">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-2">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-3">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-1">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-2">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-3">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-1">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-2">
            <p>1</p>
        </div>
        <div class="col-1 hp-background-color-green-3">
            <p>1</p>
        </div>
    </div>
    <div class="row">
        <div class="col-2 hp-background-color-green-1">
            <p>2</p>
        </div>
        <div class="col-2 hp-background-color-green-2">
            <p>2</p>
        </div>
        <div class="col-2 hp-background-color-green-3">
            <p>2</p>
        </div>
        <div class="col-2 hp-background-color-green-1">
            <p>2</p>
        </div>
        <div class="col-2 hp-background-color-green-2">
            <p>2</p>
        </div>
        <div class="col-2 hp-background-color-green-3">
            <p>2</p>
        </div>
    </div>
    <div class="row">
        <div class="col-3 hp-background-color-green-1">
            <p>3</p>
        </div>
        <div class="col-3 hp-background-color-green-2">
            <p>3</p>
        </div>
        <div class="col-3 hp-background-color-green-3">
            <p>3</p>
        </div>
        <div class="col-3 hp-background-color-green-1">
            <p>3</p>
        </div>
    </div>
    <div class="row">
        <div class="col-4 hp-background-color-green-1">
            <p>4</p>
        </div>
        <div class="col-4 hp-background-color-green-2">
            <p>4</p>
        </div>
        <div class="col-4 hp-background-color-green-3">
            <p>4</p>
        </div>
    </div>
    <div class="row">
        <div class="col-5 hp-background-color-green-1">
            <p>5</p>
        </div>
        <div class="col-5 hp-background-color-green-2">
            <p>5</p>
        </div>
        <div class="col-2 hp-background-color-green-3">
            <p>2</p>
        </div>
    </div>
    <div class="row">
        <div class="col-6 hp-background-color-green-1">
            <p>6</p>
        </div>
        <div class="col-6 hp-background-color-green-2">
            <p>6</p>
        </div>
    </div>
    <div class="row">
        <div class="col-7 hp-background-color-green-1">
            <p>7</p>
        </div>
        <div class="col-5 hp-background-color-green-2">
            <p>5</p>
        </div>
    </div>
    <div class="row">
        <div class="col-8 hp-background-color-green-1">
            <p>8</p>
        </div>
        <div class="col-4 hp-background-color-green-2">
            <p>4</p>
        </div>
    </div>
    <div class="row">
        <div class="col-9 hp-background-color-green-1">
            <p>9</p>
        </div>
        <div class="col-3 hp-background-color-green-2">
            <p>3</p>
        </div>
    </div>
    <div class="row">
        <div class="col-10 hp-background-color-green-1">
            <p>10</p>
        </div>
        <div class="col-2 hp-background-color-green-2">
            <p>2</p>
        </div>
    </div>
    <div class="row">
        <div class="col-11 hp-background-color-green-1">
            <p>11</p>
        </div>
        <div class="col-1 hp-background-color-green-2">
            <p>1</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 hp-background-color-green-1">
            <p>12</p>
        </div>
    </div>
</div>

<details class="[ hp-padding-top-r1 hp-padding-bottom-r1 ]">
<summary class="[ hp-text-color-gray-5 hp-bold ]">See the complete code</summary>
<p>

```html
<div class="row">
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
</div>
<div class="row">
    <div class="col-2">
        <p>2</p>
    </div>
    <div class="col-2">
        <p>2</p>
    </div>
    <div class="col-2">
        <p>2</p>
    </div>
    <div class="col-2">
        <p>2</p>
    </div>
    <div class="col-2">
        <p>2</p>
    </div>
    <div class="col-2">
        <p>2</p>
    </div>
</div>
<div class="row">
    <div class="col-3">
        <p>3</p>
    </div>
    <div class="col-3">
        <p>3</p>
    </div>
    <div class="col-3">
        <p>3</p>
    </div>
    <div class="col-3">
        <p>3</p>
    </div>
</div>
<div class="row">
    <div class="col-4">
        <p>4</p>
    </div>
    <div class="col-4">
        <p>4</p>
    </div>
    <div class="col-4">
        <p>4</p>
    </div>
</div>
<div class="row">
    <div class="col-5">
        <p>5</p>
    </div>
    <div class="col-5">
        <p>5</p>
    </div>
    <div class="col-2">
        <p>2</p>
    </div>
</div>
<div class="row">
    <div class="col-6">
        <p>6</p>
    </div>
    <div class="col-6">
        <p>6</p>
    </div>
</div>
<div class="row">
    <div class="col-7">
        <p>7</p>
    </div>
    <div class="col-5">
        <p>5</p>
    </div>
</div>
<div class="row">
    <div class="col-8">
        <p>8</p>
    </div>
    <div class="col-4">
        <p>4</p>
    </div>
</div>
<div class="row">
    <div class="col-9">
        <p>9</p>
    </div>
    <div class="col-3">
        <p>3</p>
    </div>
</div>
<div class="row">
    <div class="col-10">
        <p>10</p>
    </div>
    <div class="col-2">
        <p>2</p>
    </div>
</div>
<div class="row">
    <div class="col-11">
        <p>11</p>
    </div>
    <div class="col-1">
        <p>1</p>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <p>12</p>
    </div>
</div>
```

</p>
</details>




## Grid options

|              | SMALL <br><sub>< 768px</sub> | MEDIUM <br><sub>≥ 768px</sub> | LARGE <br><sub>≥ 992px</sub> | EXTRA LARGE <br><sub>≥ 1200px</sub> | 
|--------------|:----------------------------:|:-----------------------------:|:----------------------------:|:-----------------------------------:|
| Class prefix | `.col-ms-`                   | `.col-md-`                    | `.col-lg-`                   | `.col-xl`                           |
| # of columns | 12                           | 12                            | 12                           | 12                                  |

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-7 col-xl-9  [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #1</p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-5 col-xl-3  [ hp-background-color-green-2 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #2</p>
        </div>
    </div>
</div>

```html
<div class="row">
    <div class="col-sm-12 col-md-6 col-lg-7 col-xl-9">
        COL #1
    </div>
    <div class="col-sm-12 col-md-6 col-lg-5 col-xl-3">
        COL #2
    </div>
</div>
```




## Nested columns

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-7 col-xl-9  [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Title</p>
            <div class="row">
                <div class="col-sm-12 col-ms-12 col-lg-6 col-xl-6 [ hp-margin-bottom-2 ]">
                    Phasellus semper ac leo scelerisque euismod. Maecenas eu dictum justo. Praesent porttitor felis sapien, vitae molestie eros pharetra vitae. Donec tempor facilisis ligula sit amet pharetra.
                </div>
                <div class="col-sm-12 col-ms-12 col-lg-6 col-xl-6 [ hp-margin-bottom-2 ]">
                    Duis non egestas lectus. Mauris id iaculis diam. Aliquam rutrum elit suscipit libero rhoncus, ac aliquam felis imperdiet.
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-5 col-xl-3  [ hp-background-color-green-2 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Another title</p>
        </div>
    </div>
</div>

```html
<div class="row">
    <div class="col-sm-12 col-md-6 col-lg-7 col-xl-9">
        <p>Title</p>
        <div class="row">
            <div class="col-sm-12 col-ms-12 col-lg-6 col-xl-6">
                Phasellus semper ac leo scelerisque euismod. Maecenas eu dictum justo. Praesent porttitor felis sapien, vitae molestie eros pharetra vitae. Donec tempor facilisis ligula sit amet pharetra.
            </div>

            <div class="col-sm-12 col-ms-12 col-lg-6 col-xl-6">
                Duis non egestas lectus. Mauris id iaculis diam. Aliquam rutrum elit suscipit libero rhoncus, ac aliquam felis imperdiet.
            </div>
        </div>

    </div>

    <div class="col-sm-12 col-md-6 col-lg-5 col-xl-3">
        <p>Another title</p>
    </div>
</div>
```




## Offsetting columns

Move columns to the right using `.col-*-offset-*` classes. These classes increase the left margin of a column by **\*** columns.

For example, `.col-lg-offset-4` moves `.col-lg-4` over four columns.

> Remember, you can use **sm**, **md**, **lg** **xl** and **x** number of columns *(1, 2, ... 12)*.

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row">
        <div class="col-sm-12 col-4  [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #1</p>
        </div>
        <div class="col-sm-12 col-4 col-lg-offset-4 col-xl-offset-4 [ hp-background-color-green-2 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #2</p>
        </div>
    </div>
</div>

```html
<div class="row">
    <div class="col-sm-12 col-4">
        <p>Col #1</p>
    </div>
    <div class="col-sm-12 col-4 col-lg-offset-4 col-xl-offset-4">
        <p>Col #2</p>
    </div>
</div>
```




## Alignment

Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column


### Horizontal left

By default, the elements are aligned to the left, but if for some reason an element is not you can use this class: `horizontal-left`

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row horizontal-left">
        <div class="col-4  [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #1</p>
        </div>
    </div>
</div>

```html
<div class="row horizontal-left">
    <div class="col-4">
        <p>Col #1</p>
    </div>
</div>
```


### Horizontal right

`horizontal-right`

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row horizontal-right">
        <div class="col-4  [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #1</p>
        </div>
    </div>
</div>

```html
<div class="row horizontal-right">
    <div class="col-4">
        <p>Col #1</p>
    </div>
</div>
```


### Horizontal center

`horizontal-center`

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row horizontal-center">
        <div class="col-4  [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #1</p>
        </div>
    </div>
</div>

```html
<div class="row horizontal-center">
    <div class="col-4">
        <p>Col #1</p>
    </div>
</div>
```


### Vertical top

By default, the elements are aligned to the top in the vertical axis, but if for some reason an element is not you can use this class: `vertical-top`

`vertical-top`

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row vertical-top">
        <div class="col-6">
            <p class="[ hp-bold hp-text-uppercase hp-padding-top-r1 hp-padding-bottom-r1 hp-background-color-green-1 ]">Col #1</p>
        </div>
        <div class="col-6">
            <p class="[ hp-bold hp-text-uppercase hp-background-color-green-2 ]">Col #2</p>
        </div>
    </div>
</div>

```html
<div class="row vertical-top">
    <div class="col-6">
        <p>Col #1</p>
    </div>
    <div class="col-6">
        <p>Col #2</p>
    </div>
</div>
```


### Vertical center

`vertical-center`

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row vertical-center">
        <div class="col-6">
            <p class="[ hp-bold hp-text-uppercase hp-padding-top-r1 hp-padding-bottom-r1 hp-background-color-green-1 ]">Col #1</p>
        </div>
        <div class="col-6">
            <p class="[ hp-bold hp-text-uppercase hp-background-color-green-2 ]">Col #2</p>
        </div>
    </div>
</div>

```html
<div class="row vertical-center">
    <div class="col-6">
        <p>Col #1</p>
    </div>
    <div class="col-6">
        <p>Col #2</p>
    </div>
</div>
```


### Vertical bottom

`vertical-bottom`

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row vertical-bottom">
        <div class="col-6">
            <p class="[ hp-bold hp-text-uppercase hp-padding-top-r1 hp-padding-bottom-r1 hp-background-color-green-1 ]">Col #1</p>
        </div>
        <div class="col-6">
            <p class="[ hp-bold hp-text-uppercase hp-background-color-green-2 ]">Col #2</p>
        </div>
    </div>
</div>

```html
<div class="row vertical-bottom">
    <div class="col-6">
        <p>Col #1</p>
    </div>
    <div class="col-6">
        <p>Col #2</p>
    </div>
</div>
```




## Distribution

Add classes to distribute the contents of a row or column.


### Horizontal around

The class `horizontal-around` adds the same space left and right in each element *(the space is calculated automatically)*.

For example, If **Col #1** and **Col #2** has 20px of space to left and another 20px to the right, then there is a space of **40px** between **Col #1** and **Col #2** *(the same Col #3)*.

#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row horizontal-around">
        <div class="col-3 [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #1</p>
        </div>
        <div class="col-3 [ hp-background-color-green-2 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #2</p>
        </div>
        <div class="col-3 [ hp-background-color-green-3 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #3</p>
        </div>
    </div>
</div>

```html
<div class="row horizontal-around">
    <div class="col-3">
        <p>Col #1</p>
    </div>
    <div class="col-3">
        <p>Col #2</p>
    </div>
    <div class="col-3">
        <p>Col #3</p>
    </div>
</div>
```


### Horizontal evenly

This class `horizontal-evenly` adds exactly the same space between each element.


#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row horizontal-evenly">
        <div class="col-2 [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #1</p>
        </div>
        <div class="col-2 [ hp-background-color-green-2 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #2</p>
        </div>
        <div class="col-2 [ hp-background-color-green-3 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #3</p>
        </div>
        <div class="col-2 [ hp-background-color-green-4 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #4</p>
        </div>
    </div>
</div>

```html
<div class="row horizontal-between">
    <div class="col-2">
        <p>Col #1</p>
    </div>
    <div class="col-2">
        <p>Col #2</p>
    </div>
    <div class="col-2">
        <p>Col #3</p>
    </div>
    <div class="col-2">
        <p>Col #4</p>
    </div>
</div>
```


### Horizontal between

This class `horizontal-between` adds exactly the same space between each element but remove the space on the left in the first element and the space on the right to the last element.


#### Example

<div class="doc-example [ hp-text-center hp-text-color-white-1 ]">
    <div class="row horizontal-between">
        <div class="col-2 [ hp-background-color-green-1 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #1</p>
        </div>
        <div class="col-2 [ hp-background-color-green-2 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #2</p>
        </div>
        <div class="col-2 [ hp-background-color-green-3 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #3</p>
        </div>
        <div class="col-2 [ hp-background-color-green-4 ]">
            <p class="[ hp-bold hp-text-uppercase ]">Col #4</p>
        </div>
    </div>
</div>

```html
<div class="row horizontal-between">
    <div class="col-2">
        <p>Col #1</p>
    </div>
    <div class="col-2">
        <p>Col #2</p>
    </div>
    <div class="col-2">
        <p>Col #3</p>
    </div>
    <div class="col-2">
        <p>Col #4</p>
    </div>
</div>
```
