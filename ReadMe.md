- A custom component of a viewpager in react native with left and right controls, touch scrolling and an animated tab indicator, in typescript.

- It comes with a built-in TypeScript typings and is compatible with all popular JavaScript frameworks. You can use it directly or leverage well-maintained wrapper packages that allow for a more native integration with your frameworks of choice.

# Example:

![](./assets/videos/1.gif)

## How to use:

```
import ViewpagerTabIndicator from 'react-native-viewpager-with-indicator';

 const data = [
    {
      index: 0,
      uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49812/article_aligned%402x.jpg",
    },
    {
      index: 1,
      uri: "https://img.buzzfeed.com/buzzfeed-static/static/2021-10/29/16/asset/10f527de873a/sub-buzz-567-1635525987-2.png",
    },
    {
      index: 2,
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCyBT9pqTvPyPf2OjItvLQ99GcVyS1fXV7A&s",
    },
  ];


  <ViewpagerTabIndicator
          data={data}
          dotStyle={{backgroundColor: "#FFF"}}
          showControlls
        />
```

# DateInput Props -

| Name                 | Type                           | Default |
| -------------------- | ------------------------------ | ------- |
| data                 | {index: number; uri: string}[] |
| style?               | ViewStyle                      |
| showGradiant?        | boolean                        |
| dotStyle?            | ViewStyle                      |
| dotWidthOutputRange? | number[]                       |
| indicatorStyle?      | ViewStyle                      |
| buttonControlStyle?  | ViewStyle                      |
| showControlls?       | boolean                        |
