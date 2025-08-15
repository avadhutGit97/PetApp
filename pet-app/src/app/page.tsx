import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="grid">
      <div className="card">
        <h3>Pet Owner</h3>
        <p>Register your pet for adoption.</p>
        <div className="button-row">
          <Link href="/owner" className="button">Go to Owner</Link>
        </div>
      </div>

      <div className="card">
        <h3>Pet Adopter</h3>
        <p>Browse and filter pets available for adoption.</p>
        <div className="button-row">
          <Link href="/adopter" className="button secondary">Go to Adopter</Link>
        </div>
      </div>
    </div>
  );
}