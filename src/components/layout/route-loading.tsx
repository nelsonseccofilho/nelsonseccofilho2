type RouteLoadingProps = {
  label: string;
};

export function RouteLoading({ label }: RouteLoadingProps) {
  return (
    <main className="route-loading" aria-live="polite" aria-busy="true">
      <svg className="route-loading__mark" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
        <rect width="128" height="128" rx="30" />
        <path d="M34 92V36h14l32 34V36h14v56H80L48 58v34z" />
      </svg>
      <span className="sr-only">{label}</span>
    </main>
  );
}
