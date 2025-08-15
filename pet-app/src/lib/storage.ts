import { PetListing } from '@/types/pet';

const STORAGE_KEY = 'pet_app_listings_v1';

export function getAllListings(): PetListing[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw) as PetListing[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function saveListing(listing: PetListing): void {
  if (typeof window === 'undefined') return;
  const existing = getAllListings();
  const next = [listing, ...existing];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function clearAllListings(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
}