"use client";

import { useRouter } from "next/navigation";
import { Component } from "react";

export const ErrorComponent = () => {
  const router = useRouter();
  return (
    <div>
      <h2 className="text-[red] text-lg text-semibold">
        Oops, there is an error!
      </h2>
      <button
        type="button"
        className="bg-background text-pageBackground hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => router.refresh()}
      >
        Try again?
      </button>
    </div>
  );
};

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorComponent />;
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
