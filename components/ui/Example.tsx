import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const Example = ({ first, second }: any) => {
  return (
    <ReactCompareSlider
      changePositionOnHover
      className="md:h-56 aspect-video m-auto"
      itemOne={
        <ReactCompareSliderImage
          className="object-top"
          src={first}
          alt="Image one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          style={{ objectPosition: "top" }}
          className="object-top"
          src={second}
          alt="Image two"
        />
      }
    />
  );
};
