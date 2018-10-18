# prerender-test

You can try to prefetch/preload/prerender, but...


* prefetch sample

You can get next html data when you open `index.html`.

``` index.html
    <!--for french.html-->
    <link rel="prefetch" href="./french.html"/>
```

* preload sample

You can get next resource data when you open `index.html`.

``` index.html
    <!--for italian.html-->
    <link rel="preload" href="http://www.europeword.com/images/italy/italian-flag.jpg" as="image"/>
    <link rel="preload" href="https://media.buzzle.com/media/images-en/gallery/culture/italian/1200-173263069-italian-architecture-colosseum.jpg" as="image"/>
    <link rel="preload" href="https://sapurebredpets.co.za/wp-content/uploads/2016/07/italian-mastiff-cane-corso.jpg" as="image"/>
```

* prerender sample

You can <b> not </b> get prerender html data when you open `index.html`.
I do not know why, please tell me, anyone...

``` index.html
    <!--for coffee.html-->
    <link rel="prerender" href="./coffee.html"/>
```
