export function Hero() {
  const disciplines = ['UX Strategy', 'Product Discovery', 'Design Systems', 'AI-assisted Product Design'];

  return (
    <section className="hero" aria-label="Hero">
      <div className="layout-container hero__inner">
        <p className="hero__eyebrow">Senior Product Designer</p>
        <h1 className="hero__title">Designing digital products for complex systems.</h1>
        <p className="hero__description">
          I connect product strategy, UX and technology to turn complex problems into clear, scalable digital experiences.
        </p>
        <ul className="hero__disciplines" aria-label="Professional disciplines">
          {disciplines.map((discipline) => (
            <li key={discipline} className="hero__discipline">
              {discipline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
