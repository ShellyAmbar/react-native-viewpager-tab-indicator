- A custom component of a viewpager in react native with left and right controls, touch scrolling and an animated tab indicator, in typescript.

- It comes with a built-in TypeScript typings and is compatible with all popular JavaScript frameworks. You can use it directly or leverage well-maintained wrapper packages that allow for a more native integration with your frameworks of choice.

# Example:

![](./assets/videos/1.gif)

## How to use:

```
import ViewpagerTabIndicator from 'react-native-viewpager-with-indicator';

  <ViewpagerTabIndicator
          data={data}
          dotStyle={{backgroundColor: GlobalColors.TextColors.white}}
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
