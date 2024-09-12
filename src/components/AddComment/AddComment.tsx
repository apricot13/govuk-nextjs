"use client";

import { AppConfig } from "@/types/config";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface AddCommentProps {
  availableCouncils: AppConfig["councils"];
  selectedCouncil?: AppConfig["council"];
}

export const AddComment = ({
  availableCouncils,
  selectedCouncil,
}: AddCommentProps) => {
  const router = useRouter();

  const initialFormState = {
    sentiment: "",
    selectedTopics: [],
    personalDetails: {
      email: "",
    },
  };
  const [state, setState] = useState(initialFormState);

  return (
    <button type="button" onClick={() => router.push("/dashboard")}>
      Dashboard
    </button>
  );
};
