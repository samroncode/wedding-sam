"use client";
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useDictionaries } from '@/app/context/dictionaryContext'

import stroller from '../../../../public/icons/icons8-child-50.png'
import information from '../../../../public/icons/icons8-information-50.png'
import letter from '../../../../public/icons/icons8-letter-50.png'
import location from '../../../../public/icons/icons8-location-50.png'
import mapleLeaf from '../../../../public/icons/icons8-maple-leaf-50.png'
import suit from '../../../../public/icons/icons8-suit-50.png'
import gift from '../../../../public/icons/icons8-wedding-gift-50.png'
import Button from '../components/Button'

const InformationSection = () => {
  const { informationSection } = useDictionaries();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const staging = searchParams.has("staging");

  let newPathname = pathname.includes("/en") ? "/sv" : "/en";

  if (staging) {
    newPathname += "?staging=true";
  }

  const informationPuffs = [
    {
      name: informationSection.info.name,
      description: informationSection.info.description,
      icon: information
    },
    {
      name: informationSection.dresscode.name,
      description: informationSection.dresscode.description,
      icon: suit
    },
    {
      name: informationSection.children.name,
      description: informationSection.children.description,
      icon: stroller
    },
    {
      name: informationSection.gifts.name,
      description: informationSection.gifts.description,
      icon: gift
    },
    {
      name: informationSection.rsvp.name,
      description: informationSection.rsvp.description,
      icon: letter
    },
    {
      name: informationSection.location.name,
      description: informationSection.location.description,
      icon: location
    },
    {
      name: informationSection.language.name,
      description: informationSection.language.description,
      icon: mapleLeaf
    }
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-0 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">
            {informationSection.misc.text}
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {informationPuffs.map(puff => {
              return (
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
                    <p className="whitespace-pre-line">{puff.description}</p>
                  </div>
                  {/change|språk/.test(puff.name.toLowerCase()) && (
                    <div className="mt-4">
                      <Button
                        text={informationSection.button}
                        onClick={() => {
                          router.replace(newPathname);
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
