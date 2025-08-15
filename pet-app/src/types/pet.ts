export type Species = 'dog' | 'cat' | 'horse' | 'rabbit' | 'other';
export type Gender = 'male' | 'female' | 'unknown';

export interface PetListing {
  id: string;
  species: Species;
  name: string;
  breed: string;
  age: string;
  gender: Gender;
  description: string;
  city: string;
  email: string;
  phone: string;
  photoDataUrl?: string;
  createdAt: number;
}