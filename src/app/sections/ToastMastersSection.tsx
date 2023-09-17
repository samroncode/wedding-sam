import PersonCard from "../components/PersonCard";
import { Person } from "../models/Person";

const people: Person[] = [
  {
    name: "Elin Eldh Rinaldo",
    role: "Toastmadame",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "076 800 67 37"
  },
  {
    name: "Isabella Hågestam Lindell",
    role: "Toastmadame",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "070 889 88 79"
  },
  {
    name: "Cemil Alparslan",
    role: "Toastmaster",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "073 729 31 79"
  }
];

const ToastMastersSection = () => {
  return (
    <section>
      <div className="py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Möt våra toastmastrar
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Har du frågor eller liknande så kan du höra av dig till någon av våra toastmastrar.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person, key) => (
              <PersonCard key={key} {...person} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ToastMastersSection;
