type StatItem = {
  value: string;
  label: string;
};

type StatsGridProps = {
  items: ReadonlyArray<StatItem>;
};

export function StatsGrid({ items }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-5 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="space-y-1">
          <p className="section-title text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {item.value}
          </p>
          <p className="max-w-[12rem] text-sm leading-6 text-[var(--muted-foreground)]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
