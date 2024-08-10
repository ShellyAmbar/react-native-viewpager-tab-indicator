import {View, FlatList, Animated, TouchableOpacity, Image} from "react-native";
import React from "react";
import ItemView from "./item-view/item-view";
import styles from "./viewpager-tab-indicator.styles";
import {LinearGradient} from "expo-linear-gradient";
import ViewpagerTabIndicatorProps from "./interfaces";
import useViewPager from "./hooks/useViewPager";
import PaginationIndicator from "../pagination-indicator/pagination-indicator";
const ViewpagerTabIndicator = ({
  data,
  style,
  showGradiant = true,
  dotStyle,
  dotWidthOutputRange = [30, 50, 30],
  indicatorStyle,
  buttonControlStyle,
}: ViewpagerTabIndicatorProps) => {
  const {
    scrollX,
    scrollToNext,
    scrollToPrev,
    viewConfig,
    width,
    setwidth,
    onViewableItemsChanged,
    flatRef,
  } = useViewPager(data);
  return (
    <View style={[styles.container, {...style}]}>
      {data?.length > 0 && (
        <>
          {showGradiant && (
            <>
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.4)"]}
                style={styles.gradiantBottom}
              />
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.4)"]}
                style={styles.gradiantTop}
              />
            </>
          )}
          <FlatList
            onLayout={(e) => {
              setwidth(e.nativeEvent.layout.width);
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false}
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => (
              <ItemView item={item} width={width} />
            )}
            data={[...data]}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.index.toString()}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
            ref={flatRef}
          />

          <TouchableOpacity
            onPress={scrollToPrev}
            style={[styles.btnLeft, styles.shadow, {...buttonControlStyle}]}
          >
            <Image
              source={require("../assets/images/direction-left.png")}
              width={30}
              height={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={scrollToNext}
            style={[styles.btnRight, styles.shadow, {...buttonControlStyle}]}
          >
            <Image
              source={require("../assets/images/direction-left.png")}
              style={styles.right}
              width={30}
              height={30}
            />
          </TouchableOpacity>
          <PaginationIndicator
            dotStyle={dotStyle}
            containerStyle={{...styles.indicator, ...indicatorStyle}}
            data={data}
            scrollX={scrollX}
            screenWidth={width}
            dotWidthOutputRange={dotWidthOutputRange}
          />
        </>
      )}
    </View>
  );
};

export default ViewpagerTabIndicator;
