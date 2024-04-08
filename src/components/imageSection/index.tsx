import { styled } from "goober";
import Image from "next/image";

const Wrapper = styled("section")`
  width: 100%;
  aspect-ratio: 640 / 243;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageSection = () => {
  return (
    <Wrapper>
      <Image
        src="/assets/images/imageSection.png"
        alt="duas mulheres em um escritório"
        width={1280}
        height={486}
      />
    </Wrapper>
  );
};

export default ImageSection;
