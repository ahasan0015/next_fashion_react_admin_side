export default function NotFound() {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h4 className="mb-3">Page Not Found</h4>
      <p className="text-muted mb-4">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="btn btn-primary">
        Go to Dashboard
      </a>
    </div>
  );
}
