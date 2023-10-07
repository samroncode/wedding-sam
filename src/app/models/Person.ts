import { StaticImageData } from "next/image";

export type Person = {
  name: string;
  role: string;
  imageUrl: StaticImageData;
  phoneNumber: string;
};
