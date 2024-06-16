"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: React.FunctionComponent<IErrorProps> = ({ error, reset }) => {
  const router = useRouter();

  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <button>Back to homepage</button>
    </div>
  );
};

export default Error;
