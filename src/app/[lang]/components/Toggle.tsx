import { Dispatch, SetStateAction, useState } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "../../utils/ClassNames";

interface IToggle {
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  text: string;
  disabled: boolean;
}

const Toggle = ({ toggled, setToggled, text, disabled }: IToggle) => {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={toggled}
        onChange={setToggled}
        disabled={disabled}
        className={classNames(
          toggled ? "bg-branch" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-branch focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            toggled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3 text-sm">
        <span className="font-medium text-gray-900">{text}</span>
      </Switch.Label>
    </Switch.Group>
  );
};

export default Toggle;
