"use client";

import { useRouter } from "next/navigation";
import { Component, ErrorInfo } from "react";

export const ErrorComponent = ({ onRetry, error }: { error?: string; onRetry?: () => void }) => {
  const router = useRouter();
  return (
    <div className="p-3">
      <h2 className="text-[red] text-lg text-semibold">{error ?? "Oops, there is an error!"}</h2>
      <button
        type="button"
        className="bg-background text-pageBackground hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => onRetry?.() ?? router.refresh()}
      >
        Try again?
      </button>
    </div>
  );
};

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error: string };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false, error: "" };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorComponent
          error={this.state.error}
          onRetry={() => {
            this.setState({ hasError: false });
          }}
        />
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
