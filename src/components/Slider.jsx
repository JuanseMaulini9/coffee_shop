import { useState } from "react";
export default function Slider() {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  function previous() {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  }

  function next() {
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  }

  return (
    <div>
      <img src={require(`../assets/${selectedImage}`)} alt="menu" width="500"/>
      <button onClick={previous}>{"<"}</button>
      <button onClick={next}>{">"}</button>
      
    </div>
  );
}
