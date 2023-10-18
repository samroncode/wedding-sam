"use client";

import React, { SyntheticEvent, useEffect, useState } from "react";
import Toggle from "./Toggle";
import Input from "./Input";
import { TextValidator } from "../../utils/validators/textValidator";
import { NotEmptyValidator } from "../../utils/validators/NotEmptyValidator";
import Button from "./Button";
import { useDictionaries } from "@/app/context/dictionaryContext";
import { EmailValidator } from "@/app/utils/validators/EmailValidator";

type ContactForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  allergies_preferences: string;
  speech: boolean;
};

const ContactForm = () => {
  const initialForm: ContactForm = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    allergies_preferences: "",
    speech: false
  };

  const { rsvpSection } = useDictionaries();
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
      "E-post": form.email,
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
    const { firstName, lastName, email } = form;

    setFormValid(
      TextValidator(firstName) &&
        TextValidator(lastName) &&
        EmailValidator(email)
    );
  }, [form]);

  const inputsDisabled =
    requestStatus === "pending" || requestStatus === "success";
  const buttonDisabled = !formValid || requestStatus !== "idle";

  let buttonText = rsvpSection.form.button.default;

  if (requestStatus === "success") {
    buttonText = rsvpSection.form.button.sent;
  }

  return (
    <div className="w-full bg-white px-0 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
          {rsvpSection.misc.title}
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
            name={rsvpSection.form.firstName.name}
            placeholder={rsvpSection.form.firstName.placeholder}
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={e => setForm({ ...form, firstName: e.target.value })}
            disabled={inputsDisabled}
            validator={TextValidator}
            errorMessage={
              !form.firstName
                ? rsvpSection.form.errors.empty
                : rsvpSection.form.errors.wrong
            }
          />
          <Input
            required
            id="last-name"
            name={rsvpSection.form.lastName.name}
            placeholder={rsvpSection.form.lastName.placeholder}
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={e => setForm({ ...form, lastName: e.target.value })}
            disabled={inputsDisabled}
            validator={TextValidator}
            errorMessage={
              !form.lastName
                ? rsvpSection.form.errors.empty
                : rsvpSection.form.errors.wrong
            }
          />
          <Input
            required
            id="email"
            name={rsvpSection.form.email.name}
            type="email"
            autoComplete="email"
            placeholder={rsvpSection.form.email.placeholder}
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            disabled={inputsDisabled}
            validator={EmailValidator}
            errorMessage={
              !form.email
                ? rsvpSection.form.errors.empty
                : rsvpSection.form.errors.wrong
            }
          />
          <Input
            required
            id="phone-number"
            name={rsvpSection.form.phone.name}
            type="tel"
            autoComplete="tel"
            placeholder={rsvpSection.form.phone.placeholder}
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            disabled={inputsDisabled}
            validator={NotEmptyValidator}
            errorMessage={
              !form.phone
                ? rsvpSection.form.errors.empty
                : rsvpSection.form.errors.wrong
            }
          />

          <div className="sm:col-span-2">
            <label
              htmlFor="allergies_preferences"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {rsvpSection.form["allergies/preferences"].name}
            </label>
            <div className="mt-2.5">
              <textarea
                name="allergies_preferences"
                id="allergies_preferences"
                rows={4}
                placeholder={
                  rsvpSection.form["allergies/preferences"].placeholder
                }
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.allergies_preferences}
                disabled={inputsDisabled}
                onChange={e =>
                  setForm({ ...form, allergies_preferences: e.target.value })
                }
              />
            </div>
          </div>
          <p className="pt-4 text-xs text-gray-700">
            {rsvpSection.form.requiredFields.text}
          </p>
          <div className="sm:col-span-2">
            <Toggle
              toggled={form.speech}
              setToggled={e => setForm({ ...form, speech: !form.speech })}
              text={rsvpSection.form.speech.text}
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
            loadingText={rsvpSection.form.button.loading}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
