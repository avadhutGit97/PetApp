import { Gender, Species } from '@/types/pet';

export interface SamplePetTemplate {
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
}

export const samplePetTemplates: SamplePetTemplate[] = [
  {
    species: 'dog',
    name: 'Bella',
    breed: 'Labrador Retriever',
    age: '2 years',
    gender: 'female',
    description: 'Friendly and energetic, loves to play fetch!',
    city: 'Hyderabad',
    email: 'owner.bella@example.com',
    phone: '+91 9000000001'
  },
  {
    species: 'dog',
    name: 'Max',
    breed: 'German Shepherd',
    age: '3 years',
    gender: 'male',
    description: 'Trained and loyal companion.',
    city: 'Pune',
    email: 'owner.max@example.com',
    phone: '+91 9000000002'
  },
  {
    species: 'cat',
    name: 'Luna',
    breed: 'Persian',
    age: '1 year',
    gender: 'female',
    description: 'Calm and affectionate indoor cat.',
    city: 'Mumbai',
    email: 'owner.luna@example.com',
    phone: '+91 9000000003'
  },
  {
    species: 'cat',
    name: 'Oliver',
    breed: 'Siamese',
    age: '10 months',
    gender: 'male',
    description: 'Curious and playful, great with families.',
    city: 'Bengaluru',
    email: 'owner.oliver@example.com',
    phone: '+91 9000000004'
  },
  {
    species: 'rabbit',
    name: 'Snow',
    breed: 'Dwarf',
    age: '8 months',
    gender: 'female',
    description: 'Gentle rabbit who enjoys carrots and quiet time.',
    city: 'Chennai',
    email: 'owner.snow@example.com',
    phone: '+91 9000000005'
  },
  {
    species: 'horse',
    name: 'Thunder',
    breed: 'Thoroughbred',
    age: '5 years',
    gender: 'male',
    description: 'Well-trained, calm temperament.',
    city: 'Delhi',
    email: 'owner.thunder@example.com',
    phone: '+91 9000000006'
  },
  {
    species: 'dog',
    name: 'Coco',
    breed: 'Beagle',
    age: '1.5 years',
    gender: 'female',
    description: 'Loves walks and nose work.',
    city: 'Hyderabad',
    email: 'owner.coco@example.com',
    phone: '+91 9000000007'
  },
  {
    species: 'cat',
    name: 'Milo',
    breed: 'Maine Coon',
    age: '2 years',
    gender: 'male',
    description: 'Big softie; enjoys being brushed.',
    city: 'Pune',
    email: 'owner.milo@example.com',
    phone: '+91 9000000008'
  },
  {
    species: 'other',
    name: 'Kiki',
    breed: 'Parrot',
    age: '4 years',
    gender: 'unknown',
    description: 'Talkative and colorful parrot.',
    city: 'Mumbai',
    email: 'owner.kiki@example.com',
    phone: '+91 9000000009'
  },
  {
    species: 'rabbit',
    name: 'Buddy',
    breed: 'Lop',
    age: '1 year',
    gender: 'male',
    description: 'Loves cuddles and lettuce.',
    city: 'Bengaluru',
    email: 'owner.buddy@example.com',
    phone: '+91 9000000010'
  }
];