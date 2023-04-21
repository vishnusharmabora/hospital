import { Container } from "react-bootstrap";

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <Container>
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </Container>
  );
};

export default ErrorFallBack;
