import {Image} from "@nextui-org/react";
import photo from '../../public/photo1.jpg'



export default function App() {
  return (
    // <Image
    //       alt="Card background"
    //       className="object-cover rounded-xl"
    //       src="https://nextui.org/images/hero-card-complete.jpeg"
    //       width={270}
    //     />

    <Image
      width={300}
      alt="NextUI hero Image"
      src="https://nextui.org/images/hero-card-complete.jpeg"
    />
  );
}