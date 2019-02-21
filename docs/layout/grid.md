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

