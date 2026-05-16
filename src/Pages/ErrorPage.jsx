import { Link, useRouteError } from "react-router";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error); // Helpful for debugging

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Oops! Page Not Found.</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}