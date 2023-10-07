import Image from "next/image";
import suit from "../../../public/icons/icons8-suit-50.png";
import stroller from "../../../public/icons/icons8-child-50.png";
import gift from "../../../public/icons/icons8-wedding-gift-50.png";
import letter from "../../../public/icons/icons8-letter-50.png";

const informationPuffs = [
  {
    name: "Klädkod",
    description:
      "Kavaj. Vi tycker att du är fin som du är, det viktigaste är att du känner dig bekväm.",
    icon: suit
  },
  {
    name: "Barn",
    description:
      "Barn är underbara men den här dagen väljer vi att fira i vuxet sällskap. Bebisar som ammas och inte kan lämnas med barnvakt är givetvis välkomna.",
    icon: stroller
  },
  {
    name: "Gåvor",
    description:
      "Den finaste gåvan är att vi får fira vår dag tillsammans med er. Men vill ni ändå uppmärksamma vår dag med en gåva så uppskattar vi ett bidrag till vår bröllopsresa.",
    icon: gift
  },
  {
    name: "OSA",
    description: "O.S.A senast 31 januari 2024. Du gör detta genom att fylla i formuläret nedan.",
    icon: letter
  }
];

const InformationSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-0 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">
            Allt du behöver veta inför bröllopet
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {informationPuffs.map(puff => (
              <div key={puff.name} className="lg:pl-16">
                <div className="flex items-center text-base font-semibold leading-7 text-gray-900 h-12">
                  <Image
                    src={puff.icon}
                    alt="din mamma"
                    width={40}
                    height={40}
                    className="mr-5"
                  />
                  <p>{puff.name}</p>
                </div>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  <p>{puff.description}</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
