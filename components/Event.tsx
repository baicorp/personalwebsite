import React from "react";
import Close from "@/public/close";

export default function Event() {
  return (
    <div className="px-2 py-3 border-b border-b-card-border flex gap-3">
      <div>
        <p className="text-sm text-center font-semibold">
          This is even prompt 🎉🎉🎉
        </p>
      </div>
      <button>
        <Close className="w-5 h-5" />
      </button>
    </div>
  );
}
