import Link from 'next/link';
import PetForm from '@/components/PetForm';

export default function OwnerPage() {
  return (
    <div>
      <div className="button-row">
        <Link href="/" className="button secondary">← Back</Link>
        <Link href="/adopter" className="button secondary">Go to Adopter</Link>
      </div>
      <h3>Register your pet</h3>
      <PetForm />
    </div>
  );
}