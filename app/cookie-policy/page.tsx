import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Bigwig Technologies",
  description: "How Bigwig Technologies uses cookies and similar technologies.",
};

const email = "hello@bigwigtech.com";

export default function CookiePolicyPage() {
  return (
    <div className="cookie-policy-page bg-[#f4f5fc] text-[#171a2d]">
      <section className="relative overflow-hidden border-b border-[#e0e4f0] px-5 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_35%,rgba(255,224,217,.9),transparent_48%),radial-gradient(ellipse_at_85%_10%,rgba(220,226,255,.9),transparent_53%)]" />
        <div className="relative mx-auto max-w-[1320px]">
          <nav aria-label="Breadcrumb" className="text-sm font-medium uppercase tracking-[.12em] text-[#75809e]">
            <Link href="/" className="transition hover:text-[#ff6948]">Home</Link>
            <span className="mx-2 text-[#aab1c4]" aria-hidden="true">/</span>
            <span className="text-[#ff6948]" aria-current="page">Cookie policy</span>
          </nav>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[.22em] text-[#7b86a5]">Legal</p>
          <h1 className="mt-4 text-[clamp(2.8rem,5.2vw,5rem)] font-semibold leading-none tracking-[-.06em]">Cookie Policy</h1>
          <p className="mt-5 text-lg text-[#65708f]">Effective May 2026</p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <article className="mx-auto max-w-[1320px] rounded-[1.6rem] border border-white bg-white px-6 py-8 shadow-[0_16px_42px_rgba(55,65,105,.08)] sm:px-10 sm:py-11 lg:px-12 lg:py-12">
          <div className="privacy-copy">
            <p>This Cookie Policy explains how Bigwig Technologies Pvt. Ltd. (&quot;Bigwig&quot;, &quot;we&quot;, &quot;us&quot;) uses cookies and similar technologies on <a href="https://bigwigtech.com">https://bigwigtech.com</a>. It supplements our <Link href="/privacy-policy">Privacy Policy</Link>.</p>

            <h2>1. What are cookies?</h2>
            <p>Cookies are small text files stored on your device by your browser when you visit a website. They are widely used to make sites work efficiently, remember your preferences, and provide information to site owners. Similar technologies include local storage, session storage, and pixel tags &mdash; we refer to all of these collectively as &quot;cookies&quot; below.</p>

            <h2>2. Cookies we use</h2>
            <p>We classify cookies into three categories.</p>
            <h3>Strictly necessary</h3>
            <p>These are required for the site to function. They include the cookie that remembers your selected language so that it stays in place as you navigate. You cannot opt out of strictly necessary cookies &mdash; without them the site does not work as intended.</p>
            <h3>Functional</h3>
            <p>These remember your preferences for a better experience &mdash; for example, whether you have dismissed a notice or accepted the cookie banner. They are not used for tracking across sites.</p>
            <h3>Analytics (only if enabled)</h3>
            <p>We may use Google Analytics 4 and/or Google Tag Manager to understand how visitors use the site in aggregate &mdash; which pages are popular, how long visits last, and where visitors come from. These cookies are set only after you give consent or, in the absence of consent, in a privacy-preserving, IP-anonymised mode where permitted by local law. They do not identify you personally.</p>

            <h2>3. Third-party cookies</h2>
            <p>If we embed third-party content, such as an embedded video player or Google Maps, that third party may set its own cookies. Their use of cookies is governed by their privacy and cookie policies, not ours. We do not embed third-party tracking pixels, such as Facebook Pixel, LinkedIn Insight, or X pixel, at this time.</p>

            <h2>4. How long cookies last</h2>
            <ul>
              <li><strong>Session cookies</strong> are deleted when you close your browser.</li>
              <li><strong>Persistent cookies</strong> remain until they expire or until you delete them. Functional cookies typically last 12 months; analytics cookies typically last up to 24 months.</li>
            </ul>

            <h2>5. Controlling cookies</h2>
            <p>You can control cookies in several ways:</p>
            <ul>
              <li><strong>Browser settings:</strong> all modern browsers let you block or delete cookies. Look for the &quot;Privacy&quot; or &quot;Cookies&quot; section in your browser preferences.</li>
              <li><strong>Per-site controls:</strong> if we display a cookie banner in your region, you can accept or reject non-essential cookies there.</li>
              <li><strong>Opt-out tools:</strong> for Google Analytics specifically, you can install the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>.</li>
            </ul>
            <p>Blocking strictly necessary cookies may impair the site&apos;s functionality, for example language switching may not persist between page loads.</p>

            <h2>6. Changes</h2>
            <p>We may update this Cookie Policy from time to time. The &quot;Effective&quot; date at the top reflects the most recent update.</p>

            <h2>7. Contact</h2>
            <p>Questions? Email <a href={`mailto:${email}`}>{email}</a>.</p>
          </div>
        </article>
      </section>
    </div>
  );
}
