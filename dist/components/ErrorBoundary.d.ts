import React from "react";
declare class ErrorBoundary extends React.Component<{}, {
    error: Error | undefined;
}> {
    constructor(props: any);
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    render(): React.ReactNode;
}
export default ErrorBoundary;
