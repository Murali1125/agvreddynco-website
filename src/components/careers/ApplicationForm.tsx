"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ApplicationFormValues, applicationSchema } from "@/lib/validation/applicationSchema";
import { ResumeUpload } from "@/components/careers/ResumeUpload";

interface ApplicationFormProps {
  positions: string[];
  title: string;
  description: string;
  submitLabel: string;
  successTitle: string;
  successMessage: string;
}

export function ApplicationForm({
  positions,
  title,
  description,
  submitLabel,
  successTitle,
  successMessage
}: ApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      currentLocation: "",
      yearsOfExperience: "",
      highestQualification: "",
      currentEmployer: "",
      expectedSalary: "",
      noticePeriod: "",
      linkedInProfile: "",
      coverLetter: ""
    }
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="application-form-heading">
      <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-panel sm:p-8">
        <h1 id="application-form-heading" className="text-3xl font-semibold text-ink sm:text-4xl">
          {title}
        </h1>
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
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
              {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                aria-invalid={Boolean(errors.email)}
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
              {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
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
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
              {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
            </div>

            <div>
              <label htmlFor="position" className="text-sm font-medium text-ink">
                Position Applying For *
              </label>
              <select
                id="position"
                {...register("position")}
                aria-invalid={Boolean(errors.position)}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-bronze"
              >
                <option value="">Select position</option>
                {positions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
              {errors.position ? <p className="mt-1 text-xs text-red-600">{errors.position.message}</p> : null}
            </div>

            <div>
              <label htmlFor="currentLocation" className="text-sm font-medium text-ink">
                Current Location *
              </label>
              <input
                id="currentLocation"
                type="text"
                {...register("currentLocation")}
                aria-invalid={Boolean(errors.currentLocation)}
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
              {errors.currentLocation ? (
                <p className="mt-1 text-xs text-red-600">{errors.currentLocation.message}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="yearsOfExperience" className="text-sm font-medium text-ink">
                Years of Experience
              </label>
              <input
                id="yearsOfExperience"
                type="text"
                {...register("yearsOfExperience")}
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
            </div>

            <div>
              <label htmlFor="highestQualification" className="text-sm font-medium text-ink">
                Highest Qualification
              </label>
              <input
                id="highestQualification"
                type="text"
                {...register("highestQualification")}
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
            </div>

            <div>
              <label htmlFor="currentEmployer" className="text-sm font-medium text-ink">
                Current Employer
              </label>
              <input
                id="currentEmployer"
                type="text"
                {...register("currentEmployer")}
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
            </div>

            <div>
              <label htmlFor="expectedSalary" className="text-sm font-medium text-ink">
                Expected Salary
              </label>
              <input
                id="expectedSalary"
                type="text"
                {...register("expectedSalary")}
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
            </div>

            <div>
              <label htmlFor="noticePeriod" className="text-sm font-medium text-ink">
                Notice Period
              </label>
              <input
                id="noticePeriod"
                type="text"
                {...register("noticePeriod")}
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
            </div>

            <div>
              <label htmlFor="linkedInProfile" className="text-sm font-medium text-ink">
                LinkedIn Profile
              </label>
              <input
                id="linkedInProfile"
                type="url"
                {...register("linkedInProfile")}
                aria-invalid={Boolean(errors.linkedInProfile)}
                className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
              />
              {errors.linkedInProfile ? (
                <p className="mt-1 text-xs text-red-600">{errors.linkedInProfile.message}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor="coverLetter" className="text-sm font-medium text-ink">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              rows={5}
              {...register("coverLetter")}
              className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
            />
          </div>

          <Controller
            control={control}
            name="resume"
            render={({ field }) => (
              <ResumeUpload
                id="resume"
                label="Resume Upload *"
                error={errors.resume?.message}
                onChange={(file) => field.onChange(file)}
              />
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : submitLabel}
          </button>

          {submitted ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700" role="status" aria-live="polite">
              <p className="font-semibold">{successTitle}</p>
              <p className="mt-1">{successMessage}</p>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
