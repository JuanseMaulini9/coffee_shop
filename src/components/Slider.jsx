import { useEffect, useState } from "react";
import styled from "styled-components";

const SliderImg = styled.img`
  max-width: 500px;
  width: 100%
  height: auto;
  opacity:0;
  transition:1s;
  &.loaded{
    opacity:1;
  }
  
  
`;

export default function Slider() {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  function newImage(index, images, next = true) {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? index < images.length - 1
        : index > 0;
      const nextIndex = next
        ? condition
          ? index + 1
          : 0
        : condition
        ? index - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  }
  useEffect(()=>{
      const interval = setInterval(()=>{
        newImage(selectedIndex, images)
      }, 5000)
      return () => clearInterval(interval)
    })

  function previous() {
    newImage(selectedIndex, images, false);
  }

  function next() {
    newImage(selectedIndex, images);
  }

  return (
    <div>
      <SliderImg
        src={require(`../assets/img/${selectedImage}`)}
        alt="menu"
        className={loaded ? "loaded" : ""}
        onLoad={() => {
          setLoaded(true);
        }}
      />
      <button onClick={previous}>{"<"}</button>
      <button onClick={next}>{">"}</button>
    </div>
  );
}
