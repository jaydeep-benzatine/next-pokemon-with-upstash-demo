'use client';

import { useState } from 'react';

type IPokemonPhotoGalleryProps = {
  sprites: string[];
};

export default function PokemonPhotoGallery({
  sprites,
}: IPokemonPhotoGalleryProps) {
  const [activePhoto, setActivePhoto] = useState(sprites[0]);

  return (
    <>
      <img className="w-48" src={activePhoto} alt="" />
      <div className="flex gap-2">
        {sprites.map((it) => (
          <div
            className={`border-2 border-slate-700 rounded-md ${
              it === activePhoto ? 'outline outline-slate-400' : ''
            }`}
            onClick={(_) => setActivePhoto(it)}
            key={it}
          >
            <img className="w-20" src={it} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
