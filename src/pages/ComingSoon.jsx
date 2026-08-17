import { Link } from 'react-router-dom';

function ComingSoon({ title }) {
  return (
    <div className="container" style={{ padding: '96px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>{title}</h1>
      <p style={{ marginBottom: 24 }}>
        We couldn't find the page you're looking for. It may have moved, or the link
        may be incorrect.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default ComingSoon;
