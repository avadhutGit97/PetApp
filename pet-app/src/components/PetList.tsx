"use client";

import { useEffect, useMemo, useState } from 'react';
import { PetListing, Species } from '@/types/pet';
import { getAllListings } from '@/lib/storage';

const speciesOptions: Species[] = ['dog', 'cat', 'horse', 'rabbit', 'other'];

export default function PetList() {
  const [species, setSpecies] = useState<Species>('dog');
  const [city, setCity] = useState('');
  const [listings, setListings] = useState<PetListing[]>([]);

  useEffect(() => {
    setListings(getAllListings());
  }, []);

  const filtered = useMemo(() => {
    return listings.filter(l => {
      const speciesMatch = l.species === species;
      const cityMatch = city.trim() ? l.city.toLowerCase().includes(city.trim().toLowerCase()) : true;
      return speciesMatch && cityMatch;
    });
  }, [listings, species, city]);

  return (
    <div>
      <div className="form" style={{ marginBottom: 16 }}>
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
            <label>Location (city)</label>
            <input className="input" value={city} onChange={e => setCity(e.target.value)} placeholder="Leave empty to see all cities" />
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="muted">No pets found. Try clearing the city filter or switch type.</p>
      ) : (
        <div className="card-grid">
          {filtered.map(item => (
            <div key={item.id} className="pet-card">
              {item.photoDataUrl ? (
                <img src={item.photoDataUrl} alt={item.name} />
              ) : (
                <img src={`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><rect width='100%' height='100%' fill='%23e2e8f0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2364748b' font-family='sans-serif' font-size='16'>No photo</text></svg>`)}
                `} alt="placeholder" />
              )}
              <div className="content">
                <div className="inline" style={{ justifyContent: 'space-between', width: '100%' }}>
                  <strong>{item.name}</strong>
                  <span className="badge">{item.species}</span>
                </div>
                <div className="muted">{item.breed || 'Unknown breed'} • {item.age || 'Age N/A'} • {item.gender}</div>
                <div style={{ margin: '8px 0' }}>{item.description || 'No description provided.'}</div>
                <div className="muted">{item.city}</div>
                <div style={{ marginTop: 8 }}>
                  <div className="inline muted">Email: <a href={`mailto:${item.email}`}>{item.email}</a></div>
                  <div className="inline muted">Phone: <a href={`tel:${item.phone}`}>{item.phone}</a></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}