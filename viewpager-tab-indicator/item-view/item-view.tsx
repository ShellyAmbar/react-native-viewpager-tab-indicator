import {Image} from "react-native";
import React, {memo} from "react";
import styles from "./item-view.styles";
import ItemProps from "./interfaces";
const ItemView = ({item, width}: ItemProps) => {
  return (
    <Image
      style={[styles.container, {width: width}]}
      source={{uri: item.uri}}
    />
  );
};

export default memo(ItemView);
