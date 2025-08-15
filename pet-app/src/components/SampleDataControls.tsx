"use client";

import { samplePetTemplates } from '@/data/samplePets';
import { PetListing } from '@/types/pet';
import { clearAllListings, getAllListings, saveListing } from '@/lib/storage';

export default function SampleDataControls() {
  const loadSample = () => {
    const now = Date.now();
    const existing = getAllListings();
    if (existing.length > 0) return;

    samplePetTemplates.forEach((tpl, index) => {
      const listing: PetListing = {
        id: crypto.randomUUID(),
        species: tpl.species,
        name: tpl.name,
        breed: tpl.breed,
        age: tpl.age,
        gender: tpl.gender,
        description: tpl.description,
        city: tpl.city,
        email: tpl.email,
        phone: tpl.phone,
        photoDataUrl: tpl.photoDataUrl,
        createdAt: now - index * 1000
      };
      saveListing(listing);
    });

    window.location.reload();
  };

  const clearAll = () => {
    clearAllListings();
    window.location.reload();
  };

  return (
    <div className="button-row">
      <button className="button" onClick={loadSample}>Load sample data</button>
      <button className="button secondary" onClick={clearAll}>Clear all</button>
    </div>
  );
}