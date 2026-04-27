'use client';

type Props = {
  texto: string;
  className?: string;
};

export default function TextoBrilhante({ texto, className = '' }: Props) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(110deg, #FF7A1A 0%, #FF6B5B 25%, #F4A8B0 45%, #F8E6D0 55%, #F4A8B0 65%, #FF6B5B 80%, #FF7A1A 100%)',
        backgroundSize: '250% 100%',
        animation: 'desliza 6s linear infinite'
      }}
    >
      {texto}
    </span>
  );
}
