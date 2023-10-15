"use client";
import elin from "../../../../public/elin.jpeg";
import cemil from "../../../../public/cemil.jpeg";
import isabella from "../../../../public/isabella.jpeg";
import { Person } from "@/app/models/Person";
import PersonCard from "../components/PersonCard";
import { useDictionaries } from "@/app/context/dictionaryContext";

const people: Person[] = [
  {
    name: "Elin Eldh Rinaldo",
    role: "Toastmadame",
    imageUrl: elin,
    phoneNumber: "076 800 67 37"
  },
  {
    name: "Cemil Alparslan",
    role: "Toastmaster",
    imageUrl: cemil,
    phoneNumber: "073 729 31 79"
  },
  {
    name: "Isabella Hågestam Lindell",
    role: "Toastmadame",
    imageUrl: isabella,
    phoneNumber: "070 889 88 79"
  }
];

const ToastMastersSection = () => {
  const { toastmastersSection } = useDictionaries();
  return (
    <section>
      <div className="mx-auto max-w-7xl text-center px-0 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {toastmastersSection.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {toastmastersSection.paragraph}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person, key) => (
            <PersonCard key={key} {...person} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ToastMastersSection;
