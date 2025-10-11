



import React, { useEffect, useRef } from 'react';

type Institution = { logo: string; alt?: string };
type Stat = { icon: string; number: string; label: string };

export default function StudentsSection(): JSX.Element {
  const institutions: Institution[] = [
    { logo: '/assets/IIT-Roorkee-Logo.png', alt: 'IIT Roorkee' },
    { logo: '/assets/IIT hyderabad.png', alt: 'IIT Hyderabad' },
    { logo: '/assets/Indian_Institute_of_Technology,_Patna.svg.png', alt: 'IIT Patna' },
    { logo: '/assets/Indian_Institute_of_Technology_Bombay_Logo.svg.png', alt: 'IIT Bombay' },
    { logo: '/assets/COEP-Logo.png', alt: 'COEP' },
  ];

  const stats: Stat[] = [
    { icon: '👨‍🏫', number: '8', label: 'Expert Faculty' },
    { icon: '📚', number: '4+', label: 'Total Courses' },
    { icon: '👥', number: '300+', label: 'Students Managed' },
    { icon: '💬', number: '2 lacs+', label: 'Online Doubts' },
  ];

  const DEEP_TEAL = '#207C97';

  // Refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const currentIndexRef = useRef(0);

  // Helper: center a given child
  const scrollChildToCenter = (index: number, behavior: ScrollBehavior = 'smooth') => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;
    const child = children[index % children.length];
    if (!child) return;

    const containerCenter = container.clientWidth / 2;
    const childCenter = child.offsetLeft + child.clientWidth / 2;
    const targetScrollLeft = Math.max(0, Math.round(childCenter - containerCenter));
    container.scrollTo({ left: targetScrollLeft, behavior });
    currentIndexRef.current = index % children.length;
  };

  // Snap-to-nearest child after user releases (keeps mobile tidy)
  const snapToNearest = () => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - containerCenter);
      if (dist < nearestDistance) {
        nearestDistance = dist;
        nearestIndex = i;
      }
    });
    scrollChildToCenter(nearestIndex, 'smooth');
  };

  // Auto-scroll (mobile only). Faster now: delay = 2000ms
  const startAuto = () => {
    const container = containerRef.current;
    if (!container) return;

    // Only auto-scroll on narrow screens (mobile)
    if (typeof window !== 'undefined' && window.innerWidth >= 768) return;

    if (autoRef.current !== null) clearInterval(autoRef.current);
    const delay = 2000; // <- faster than before

    autoRef.current = window.setInterval(() => {
      if (!container || isInteractingRef.current) return;
      const children = Array.from(container.children) as HTMLElement[];
      if (children.length === 0) return;
      const nextIndex = (currentIndexRef.current + 1) % children.length;
      scrollChildToCenter(nextIndex, 'smooth');
    }, delay);
  };

  const stopAuto = () => {
    if (autoRef.current !== null) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    const handleResize = () => {
      stopAuto();
      if (window.innerWidth < 768) startAuto();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      stopAuto();
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = () => {
    isInteractingRef.current = true;
    stopAuto();
  };
  const onPointerUp = () => {
    isInteractingRef.current = false;
    setTimeout(() => {
      snapToNearest();
      if (window.innerWidth < 768) startAuto();
    }, 150);
  };

  // Desktop controls: center prev/next
  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;
    const prevIndex = (currentIndexRef.current - 1 + children.length) % children.length;
    scrollChildToCenter(prevIndex, 'smooth');
  };
  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;
    const nextIndex = (currentIndexRef.current + 1) % children.length;
    scrollChildToCenter(nextIndex, 'smooth');
  };

  // Ensure first logo is centered on mount (mobile)
  useEffect(() => {
    setTimeout(() => scrollChildToCenter(0, 'auto'), 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Outer deep teal box */}
        <div
          className="mx-auto rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          style={{
            maxWidth: 1200,
            background: `linear-gradient(180deg, rgba(32,124,151,0.95), rgba(32,124,151,0.92))`,
            boxShadow: '0 30px 80px rgba(32,124,151,0.18)',
            border: `1px solid rgba(255,255,255,0.06)`,
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              OUR STUDENTS ARE AT
            </h2>
            <p className="mt-2 text-sm text-teal-100/90">
              Proud alumni and partner institutions — together we build futures.
            </p>
          </div>

          {/* Inner white panel */}
          <div
            className="rounded-2xl p-6 md:p-10"
            style={{
              background: 'white',
              boxShadow: 'inset 0 -4px 30px rgba(0,0,0,0.03)',
            }}
          >
            {/* Header + desktop controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={scrollPrev}
                  aria-label="Scroll logos left"
                  className="p-2 rounded-md bg-white/6 text-white hover:scale-105 transition-transform"
                >
                  ‹
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Scroll logos right"
                  className="p-2 rounded-md bg-white/6 text-white hover:scale-105 transition-transform"
                >
                  ›
                </button>
              </div>

            
              <div className="hidden md:block w-10" />
            </div>

            {/* Institutions container.
                - On mobile: scrollable + snap (handled by CSS below)
                - On desktop: non-scrollable, centered row showing all logos */}
            <div
              ref={containerRef}
              className="institutions-container no-scrollbar flex gap-6 items-center py-2"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onTouchStart={onPointerDown}
              onTouchEnd={onPointerUp}
              role="list"
            >
              {institutions.map((inst, idx) => (
                <div
                  key={idx}
                  role="listitem"
                  className="institution-item flex-none rounded-lg p-2 bg-white shadow-sm"
                >
                  <div className="institution-inner flex items-center justify-center">
                    <img
                      src={inst.logo}
                      alt={inst.alt ?? `Institution ${idx + 1}`}
                      className="object-contain"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-t border-gray-200 my-6" />

            {/* WHY WE ARE BEST */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#0f3b3f] mb-4">WHY WE ARE BEST</h3>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Dedicated faculty, tailored courses, and a student-first approach.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center transition-transform duration-300 hover:scale-105"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,248,249,0.98))',
                    border: `2px solid rgba(32,124,151,0.06)`,
                    boxShadow: '0 10px 30px rgba(16,60,62,0.06)',
                  }}
                >
                  <div className="text-3xl mb-3 select-none">{stat.icon}</div>
                  <div className="text-2xl font-extrabold text-[#083f46] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
