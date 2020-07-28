import React from "react";

class ErrorBoundary extends React.Component<{}, { error: Error | undefined }> {
  constructor(props: any) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error.message);
    return { error };
  }

  render() {
    // const { error } = this.state;
    // if (!!error) {
    //   return (
    //     <div>
    //       <p>root error boundary:</p>
    //       <p>{error.message}</p>;
    //       {process.env.NODE_ENV !== "production" && error.stack}
    //     </div>
    //   );
    // }

    return this.props.children;
  }
}

export default ErrorBoundary;
