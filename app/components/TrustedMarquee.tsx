"use client";

const brands = ["Aviatize", "FeelEat", "Bizzabo", "RushTix", "TapTime", "HappyBee", "AudioBlox"];

export default function TrustedMarquee() {
  const items = [...brands, ...brands];
  return (
    <section className="trusted-marquee" aria-label="Trusted client brands">
      <p>Trusted in productions around the world</p>
      <div className="marquee-viewport">
        <div className="marquee-track">
          {items.map((brand, index) => <div className="marquee-item" key={`${brand}-${index}`}><span aria-hidden="true">✦</span><span>{brand}</span></div>)}
        </div>
      </div>
    </section>
  );
}
