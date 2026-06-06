"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormValues, contactSchema } from "@/lib/validation/contactSchema";

interface ContactFormProps {
  heading: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  services: string[];
  officeLocations: string[];
  contactMethods: string[];
}

export function ContactForm({
  heading,
  description,
  submitLabel,
  successMessage,
  services,
  officeLocations,
  contactMethods
}: ContactFormProps) {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      serviceInterestedIn: "",
      officePreference: "",
      message: "",
      preferredContactMethod: "Phone"
    }
  });

  const onSubmit = async () => {
    setSubmitError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      router.push("/contact/thank-you?source=inquiry");
    } catch {
      setSubmitError("Something went wrong while submitting your inquiry. Please try again.");
    }
  };

  return (
    <section className="rounded-3xl border border-ink/10 bg-white p-6 shadow-panel sm:p-8" aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="text-2xl font-semibold text-ink sm:text-3xl">
        {heading}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate">{description}</p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-ink">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
            {errors.fullName ? (
              <p id="fullName-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.fullName.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="companyName" className="text-sm font-medium text-ink">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              {...register("companyName")}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
            {errors.email ? (
              <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-ink">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
            {errors.phone ? (
              <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="serviceInterestedIn" className="text-sm font-medium text-ink">
              Service Interested In *
            </label>
            <select
              id="serviceInterestedIn"
              {...register("serviceInterestedIn")}
              aria-invalid={Boolean(errors.serviceInterestedIn)}
              aria-describedby={errors.serviceInterestedIn ? "service-error" : undefined}
              className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-bronze"
            >
              <option value="">Select service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.serviceInterestedIn ? (
              <p id="service-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.serviceInterestedIn.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="officePreference" className="text-sm font-medium text-ink">
              Office Location Preference
            </label>
            <select
              id="officePreference"
              {...register("officePreference")}
              className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-bronze"
            >
              <option value="">Select office</option>
              {officeLocations.map((office) => (
                <option key={office} value={office}>
                  {office}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
          />
          {errors.message ? (
            <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-ink">Preferred Contact Method</legend>
          <div className="mt-2 flex flex-wrap gap-3">
            {contactMethods.map((method) => (
              <label key={method} className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm text-slate">
                <input type="radio" value={method} {...register("preferredContactMethod")} />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {submitError ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {submitError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : submitLabel}
        </button>

        <p className="sr-only" aria-live="polite">
          {isSubmitting ? "Submitting inquiry" : successMessage}
        </p>
      </form>
    </section>
  );
}
