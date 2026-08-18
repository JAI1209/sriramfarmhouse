import { useState } from 'react';

export default function ImageWithSkeleton({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  loading = 'lazy',
  onClick,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#1E1C16] ${aspectRatio} ${className}`}
      onClick={onClick}
    >
      {/* Skeleton Shimmer */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#1E1C16] shimmer-mask animate-pulse" />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt || 'Sri Ram Farm House'}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
        } ${className}`}
        {...props}
      />
    </div>
  );
}
