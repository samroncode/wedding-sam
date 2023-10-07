"use client";

import React, { SyntheticEvent, useEffect, useState } from "react";
import Toggle from "./Toggle";
import Input from "./Input";
import { TextValidator } from "../utils/validators/textValidator";
import { NotEmptyValidator } from "../utils/validators/NotEmptyValidator";
import Button from "./Button";

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

  const resetForm = () => {
    setForm(initialForm);
  };

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

    setRequestStatus("pending");

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

        setTimeout(() => {
          setRequestStatus("idle");
          resetForm();
        }, 6000);
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

  const inputsDisabled =
    requestStatus === "pending" || requestStatus === "success";
  const buttonDisabled = !formValid || requestStatus === "pending";

  let buttonText = "Skicka";

  if (requestStatus === "success") {
    buttonText = "Tack för din anmälan";
  }

  return (
    <div className="w-full bg-white px-0 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
          O.S.A
        </h2>
      </div>
      <form
        action="#"
        className="mx-auto mt-12 lg:mt-16 w-full max-w-3xl "
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
            disabled={inputsDisabled}
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
            disabled={inputsDisabled}
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
            disabled={inputsDisabled}
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
                disabled={inputsDisabled}
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
              disabled={inputsDisabled}
            />
          </div>
        </div>
        <div className="mt-10">
          <Button
            text={buttonText}
            type="submit"
            disabled={buttonDisabled}
            loading={requestStatus === "pending"}
            loadingText="Skickar ..."
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
