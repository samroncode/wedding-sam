import Image from "next/image";
import { Person } from "../models/Person";

const PersonCard = ({ name, imageUrl, role, phoneNumber }: Person) => {
  return (
    <li key={name}>
      <div className="mx-auto rounded-full relative w-52 h-52 overflow-hidden">
        <Image src={imageUrl} alt={""} fill />
      </div>
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
        {name}
      </h3>
      <p className="text-sm leading-6 text-gray-600">{role}</p>
      <ul role="list" className="mt-2 flex justify-center gap-x-6">
        <li>
          <p>
            <a
              href={`tel:${phoneNumber}`}
              className="flex flex-row text-gray-400 hover:text-gray-500"
            >
              <svg
                className="h-5 w-5 mr-3"
                viewBox="0 0 24 24"
                id="phone_number"
                data-name="phone number"
                fill="#000000"
              >
                <g id="SVGRepo_iconCarrier">
                  <rect
                    id="Rectangle_5"
                    data-name="Rectangle 5"
                    width="24"
                    height="24"
                    fill="none"
                  />
                  <path
                    id="Shape"
                    d="M7.02,15.976,5.746,13.381a.7.7,0,0,0-.579-.407l-1.032-.056a.662.662,0,0,1-.579-.437,9.327,9.327,0,0,1,0-6.5.662.662,0,0,1,.579-.437l1.032-.109a.7.7,0,0,0,.589-.394L7.03,2.446l.331-.662a.708.708,0,0,0,.07-.308.692.692,0,0,0-.179-.467A3,3,0,0,0,4.693.017l-.235.03L4.336.063A1.556,1.556,0,0,0,4.17.089l-.162.04C1.857.679.165,4.207,0,8.585V9.83c.165,4.372,1.857,7.9,4,8.483l.162.04a1.556,1.556,0,0,0,.165.026l.122.017.235.03a3,3,0,0,0,2.558-.993.692.692,0,0,0,.179-.467.708.708,0,0,0-.07-.308Z"
                    transform="translate(4.393 6.587) rotate(-30)"
                    fill="none"
                    stroke="#b3b3b3"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
              {phoneNumber}
            </a>
          </p>
        </li>
      </ul>
    </li>
  );
};

export default PersonCard;
