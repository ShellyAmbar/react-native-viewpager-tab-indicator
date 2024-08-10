import {ViewStyle} from "react-native";

type ViewpagerTabIndicatorProps = {
  data: {index: number; uri: string}[];
  style?: ViewStyle;
  showGradiant?: boolean;
  dotStyle?: ViewStyle;
  dotWidthOutputRange?: number[];
  indicatorStyle?: ViewStyle;
  buttonControlStyle?: ViewStyle;
};

export default ViewpagerTabIndicatorProps;
