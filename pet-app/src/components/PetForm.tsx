"use client";

import { useRef, useState } from 'react';
import { Gender, PetListing, Species } from '@/types/pet';
import { saveListing } from '@/lib/storage';

const speciesOptions: Species[] = ['dog', 'cat', 'horse', 'rabbit', 'other'];
const genderOptions: Gender[] = ['male', 'female', 'unknown'];

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function PetForm() {
  const [species, setSpecies] = useState<Species>('dog');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<Gender>('unknown');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photoDataUrl, setPhotoDataUrl] = useState<string | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    setPhotoDataUrl(dataUrl);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const listing: PetListing = {
      id: crypto.randomUUID(),
      species,
      name: name.trim(),
      breed: breed.trim(),
      age: age.trim(),
      gender,
      description: description.trim(),
      city: city.trim(),
      email: email.trim(),
      phone: phone.trim(),
      photoDataUrl,
      createdAt: Date.now()
    };

    if (!listing.name || !listing.city || !listing.email || !listing.phone) {
      setMessage('Please fill name, city, email and phone.');
      setSubmitting(false);
      return;
    }

    saveListing(listing);
    setSubmitting(false);
    setMessage('Pet listing saved!');

    setName('');
    setBreed('');
    setAge('');
    setGender('unknown');
    setDescription('');
    setCity('');
    setEmail('');
    setPhone('');
    setPhotoDataUrl(undefined);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="grid-2">
        <div className="field">
          <label>Type</label>
          <select value={species} onChange={e => setSpecies(e.target.value as Species)}>
            {speciesOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Pet name</label>
          <input className="input" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Bella" />
        </div>
      </div>

      <div className="grid-2">
        <div className="field">
          <label>Breed</label>
          <input className="input" value={breed} onChange={e => setBreed(e.target.value)} placeholder="e.g., Labrador" />
        </div>
        <div className="field">
          <label>Age</label>
          <input className="input" value={age} onChange={e => setAge(e.target.value)} placeholder="e.g., 2 years" />
        </div>
      </div>

      <div className="grid-2">
        <div className="field">
          <label>Gender</label>
          <select value={gender} onChange={e => setGender(e.target.value as any)}>
            {['male', 'female', 'unknown'].map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>City</label>
          <input className="input" value={city} onChange={e => setCity(e.target.value)} placeholder="e.g., Hyderabad" />
        </div>
      </div>

      <div className="grid-2">
        <div className="field">
          <label>Email</label>
          <input type="email" className="input" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="field">
          <label>Phone</label>
          <input className="input" value={phone} onChange={e => setPhone(e.target.value)} placeholder="9999999999" />
        </div>
      </div>

      <div className="field">
        <label>Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Tell adopters about your pet..." />
      </div>

      <div className="field">
        <label>Photo (stored locally)</label>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} />
        {photoDataUrl ? (
          <div className="inline">
            <img src={photoDataUrl} alt="preview" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
            <span className="badge">Preview</span>
          </div>
        ) : (
          <span className="muted">Optional. Stored in your browser only.</span>
        )}
      </div>

      <div className="button-row">
        <button className="button" type="submit" disabled={submitting}>{submitting ? 'Saving...' : 'Save listing'}</button>
      </div>

      {message && <p className="muted">{message}</p>}
    </form>
  );
}