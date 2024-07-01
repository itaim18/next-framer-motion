import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const Example = ({ first, second }: any) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={first} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={second} alt="Image two" />}
    />
  );
};
