"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ConsultationFormValues, consultationSchema } from "@/lib/validation/consultationSchema";

interface ConsultationFormProps {
  heading: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  serviceCategories: string[];
}

export function ConsultationForm({
  heading,
  description,
  submitLabel,
  successMessage,
  serviceCategories
}: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      serviceCategory: "",
      additionalNotes: ""
    }
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="consultation"
      className="rounded-3xl border border-bronze/20 bg-gradient-to-br from-white to-amber-50 p-6 shadow-panel sm:p-8"
      aria-labelledby="consultation-form-heading"
    >
      <h2 id="consultation-form-heading" className="text-2xl font-semibold text-ink sm:text-3xl">
        {heading}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate">{description}</p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="consultation-name" className="text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="consultation-name"
              type="text"
              {...register("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "consultation-name-error" : undefined}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
            {errors.name ? (
              <p id="consultation-name-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="consultation-email" className="text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="consultation-email"
              type="email"
              {...register("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "consultation-email-error" : undefined}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
            {errors.email ? (
              <p id="consultation-email-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="consultation-phone" className="text-sm font-medium text-ink">
              Phone
            </label>
            <input
              id="consultation-phone"
              type="tel"
              {...register("phone")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "consultation-phone-error" : undefined}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
            {errors.phone ? (
              <p id="consultation-phone-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="consultation-serviceCategory" className="text-sm font-medium text-ink">
              Service Category
            </label>
            <select
              id="consultation-serviceCategory"
              {...register("serviceCategory")}
              className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-bronze"
            >
              <option value="">Select service category</option>
              {serviceCategories.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="consultation-preferredDate" className="text-sm font-medium text-ink">
              Preferred Date
            </label>
            <input
              id="consultation-preferredDate"
              type="date"
              {...register("preferredDate")}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
          </div>

          <div>
            <label htmlFor="consultation-preferredTime" className="text-sm font-medium text-ink">
              Preferred Time
            </label>
            <input
              id="consultation-preferredTime"
              type="time"
              {...register("preferredTime")}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
          </div>
        </div>

        <div>
          <label htmlFor="consultation-additionalNotes" className="text-sm font-medium text-ink">
            Additional Notes
          </label>
          <textarea
            id="consultation-additionalNotes"
            rows={4}
            {...register("additionalNotes")}
            className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-bronze px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f5726] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Requesting..." : submitLabel}
        </button>

        {submitted ? (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700" role="status" aria-live="polite">
            {successMessage}
          </p>
        ) : null}
      </form>
    </section>
  );
}
