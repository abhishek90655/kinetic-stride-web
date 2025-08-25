import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem = ({ value, label, suffix = "", duration = 2000 }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutCubic);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    updateValue();
  }, [isVisible, value, duration]);

  return (
    <div 
      ref={ref}
      className={`text-center transition-smooth ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="text-hero text-primary font-athletic font-black">
        {displayValue.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground font-athletic font-semibold text-lg mt-2">
        {label}
      </p>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    { value: 2500, label: "Active Members", suffix: "+" },
    { value: 50, label: "Expert Trainers", suffix: "+" },
    { value: 15, label: "Years Experience" },
    { value: 98, label: "Success Rate", suffix: "%" },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              duration={2000 + index * 200} // Stagger animations
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;