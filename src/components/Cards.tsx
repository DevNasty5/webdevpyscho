import { Banner } from "./Banner";
import "./style2.css";
import pic1 from "../assets/CardImages/1.png";
import pic2 from "../assets/CardImages/2.png";
import pic3 from "../assets/CardImages/3.png";
import pic4 from "../assets/CardImages/4.png";
import pic5 from "../assets/CardImages/5.png";

const images = [
  pic1, pic2, pic3, pic4, pic5
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

export default function Cards() {
  return (
    <div className="">
      <Banner images={images} speed={8000} />
    </div>
  );
}
