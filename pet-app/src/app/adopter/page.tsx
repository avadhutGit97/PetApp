import Link from 'next/link';
import dynamic from 'next/dynamic';

const PetList = dynamic(() => import('@/components/PetList'), { ssr: false });

export default function AdopterPage() {
  return (
    <div>
      <div className="button-row">
        <Link href="/" className="button secondary">← Back</Link>
        <Link href="/owner" className="button secondary">Go to Owner</Link>
      </div>
      <h3>Find your new friend</h3>
      <PetList />
    </div>
  );
}