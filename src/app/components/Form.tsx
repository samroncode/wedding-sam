"use client";

import React, { SyntheticEvent, useEffect, useState } from "react";
import Toggle from "./Toggle";
import Input from "./Input";
import { TextValidator } from "../utils/validators/textValidator";
import { NotEmptyValidator } from "../utils/validators/NotEmptyValidator";

type ContactForm = {
  firstName: string;
  lastName: string;
  phone: string;
  allergies_preferences: string;
  speech: boolean;
};

const ContactForm = () => {
  const initialForm: ContactForm = {
    firstName: "",
    lastName: "",
    phone: "",
    allergies_preferences: "",
    speech: false
  };

  const [form, setForm] = useState(initialForm);
  const [formValid, setFormValid] = useState(false);

  const [requestStatus, setRequestStatus] = React.useState<
    "idle" | "pending" | "error" | "success"
  >("idle");

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (requestStatus === "pending") return;

    const newRow = {
      Förnamn: form.firstName,
      Efternamn: form.lastName,
      Telefon: form.phone,
      "Allergier/preferenser": form.allergies_preferences,
      "Önskar hålla tal": form.speech ? "Ja" : "Nej"
    };

    try {
      const response = await fetch("/api/sheet", {
        method: "POST",
        body: JSON.stringify(newRow),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.status === 200) {
        setRequestStatus("success");
      }
    } catch (error) {
      setRequestStatus("error");
      console.error(error);
    }
  };

  useEffect(() => {
    const { firstName, lastName } = form;

    setFormValid(TextValidator(firstName) && TextValidator(lastName));
  }, [form]);

  const inputDisabled =
    requestStatus === "pending" || requestStatus === "success";

  return (
    <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          RSVP
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form
        action="#"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={submitForm}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <Input
            required
            id="first-name"
            name="Förnamn"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={e => setForm({ ...form, firstName: e.target.value })}
            disabled={inputDisabled}
            validator={TextValidator}
            errorMessage={
              !form.firstName
                ? "Fältet kan ej lämnas tomt."
                : "Fältet är felaktigt ifyllt"
            }
          />
          <Input
            required
            id="last-name"
            name="Efternamn"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={e => setForm({ ...form, lastName: e.target.value })}
            disabled={inputDisabled}
            validator={TextValidator}
            errorMessage={
              !form.firstName
                ? "Fältet kan ej lämnas tomt."
                : "Fältet är felaktigt ifyllt"
            }
          />
          <Input
            required
            id="phone-number"
            name="Telefonnummer"
            type="tel"
            autoComplete="tel"
            placeholder="0701234567"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            disabled={inputDisabled}
            validator={NotEmptyValidator}
            errorMessage={
              !form.firstName
                ? "Fältet kan ej lämnas tomt."
                : "Fältet är felaktigt ifyllt"
            }
          />
          <div className="sm:col-span-2">
            <label
              htmlFor="allergies_preferences"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Allergier / matpreferenser
            </label>
            <div className="mt-2.5">
              <textarea
                name="allergies_preferences"
                id="allergies_preferences"
                rows={4}
                placeholder="Har du inga allergier eller preferenser kan du lämna detta fält tomt."
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.allergies_preferences}
                disabled={inputDisabled}
                onChange={e =>
                  setForm({ ...form, allergies_preferences: e.target.value })
                }
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Toggle
              toggled={form.speech}
              setToggled={e => setForm({ ...form, speech: !form.speech })}
              text="Jag önskar hålla tal."
              disabled={inputDisabled}
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={!formValid || inputDisabled}
          >
            Skicka anmälan
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
