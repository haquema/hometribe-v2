import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function AssessmentCardPreview({ title, description, image, link }) {
  return (
    <Link href={link}>
      <Card className="py-4 w-full h-full hover:scale-105 transition-transform duration-200">
        <CardBody className="overflow-visible py-2 flex flex-col items-center gap-4">
          <Image
            alt="Assessment preview image"
            className="object-cover rounded-xl"
            src={image}
            width={270}
            height={270}
          />
          <div className="flex flex-col gap-2 px-2">
            <h4 className="font-bold text-large">{title}</h4>
            <p className="text-small text-default-500">{description}</p>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
} 