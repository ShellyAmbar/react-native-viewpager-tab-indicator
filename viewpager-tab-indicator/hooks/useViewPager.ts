import {useRef, useState} from "react";
import {Animated} from "react-native";

const useViewPager = (data: any[]) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const index = useRef(0);
  const [width, setwidth] = useState(0);
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    index.current = viewableItems[0].index;
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const flatRef = useRef(null);
  const scrollToNext = () => {
    if (index.current < data.length - 1) {
      flatRef.current?.scrollToIndex({index: index.current + 1});
    }
  };
  const scrollToPrev = () => {
    if (index.current > 0) {
      flatRef.current?.scrollToIndex({index: index.current - 1});
    }
  };

  return {
    scrollX,
    scrollToNext,
    scrollToPrev,
    viewConfig,
    width,
    setwidth,
    onViewableItemsChanged,
    flatRef,
  };
};

export default useViewPager;
