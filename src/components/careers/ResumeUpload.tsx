import { Upload } from "lucide-react";

interface ResumeUploadProps {
  id: string;
  label: string;
  error?: string;
  onChange: (file: File | undefined) => void;
}

export function ResumeUpload({ id, label, error, onChange }: ResumeUploadProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <div className="mt-2 rounded-xl border border-dashed border-ink/25 bg-white px-4 py-4">
        <label htmlFor={id} className="flex cursor-pointer items-center gap-2 text-sm text-slate">
          <Upload size={16} className="text-bronze" />
          Upload PDF, DOC, or DOCX (Max 5MB)
        </label>
        <input
          id={id}
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(event) => onChange(event.target.files?.[0])}
        />
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
