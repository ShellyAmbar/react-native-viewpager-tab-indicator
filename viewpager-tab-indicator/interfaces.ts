import {ViewStyle} from "react-native";

type ViewpagerTabIndicatorProps = {
  data: {id: number; uri: string}[];
  style?: ViewStyle;
  showGradiant?: boolean;
  dotStyle?: ViewStyle;
  dotWidthOutputRange?: number[];
  indicatorStyle?: ViewStyle;
  buttonControlStyle?: ViewStyle;
  showControlls?: boolean;
};

export default ViewpagerTabIndicatorProps;
