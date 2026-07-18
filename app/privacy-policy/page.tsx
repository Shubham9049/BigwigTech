import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Bigwig Technologies",
  description:
    "How Bigwig Technologies collects, uses, and protects personal information.",
};

const email = "hello@bigwigtech.com";

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page bg-[#f4f5fc] text-[#171a2d]">
      <section className="relative overflow-hidden border-b border-[#e0e4f0] px-5 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_35%,rgba(255,224,217,.9),transparent_48%),radial-gradient(ellipse_at_85%_10%,rgba(220,226,255,.9),transparent_53%)]" />
        <div className="relative mx-auto max-w-[1320px]">
          <nav
            aria-label="Breadcrumb"
            className="text-sm font-medium uppercase tracking-[.12em] text-[#75809e]"
          >
            <Link href="/" className="transition hover:text-[#ff6948]">
              Home
            </Link>
            <span className="mx-2 text-[#aab1c4]" aria-hidden="true">
              /
            </span>
            <span className="text-[#ff6948]" aria-current="page">
              Privacy policy
            </span>
          </nav>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[.22em] text-[#7b86a5]">
            Legal
          </p>
          <h1 className="mt-4 text-[clamp(2.8rem,5.2vw,5rem)] font-semibold leading-none tracking-[-.06em]">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg text-[#65708f]">Effective May 2026</p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <article className="mx-auto max-w-[1320px] rounded-[1.6rem] border border-white bg-white px-6 py-8 shadow-[0_16px_42px_rgba(55,65,105,.08)] sm:px-10 sm:py-11 lg:px-12 lg:py-12">
          <div className="privacy-copy">
            <p>
              This Privacy Policy describes how Bigwig Technologies Pvt. Ltd.
              (&quot;Bigwig&quot;, &quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;) collects, uses, and protects personal information
              when you visit{" "}
              <a href="https://bigwigtech.com">https://bigwigtech.com</a> or
              interact with us through our services. We aim to be transparent
              about what we collect and to collect as little as we can while
              still operating effectively.
            </p>

            <h2>1. Who we are</h2>
            <p>
              Bigwig Technologies Pvt. Ltd. is a software engineering firm. Our
              head office is in Gurugram, Haryana (India), and we maintain a
              post office address in Milpitas, California (United States). For
              privacy-related questions, contact us at{" "}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>

            <h2>2. Information we collect</h2>
            <p>
              We collect personal information in two ways: information you give
              us directly, and information we collect automatically.
            </p>
            <h3>Information you provide</h3>
            <ul>
              <li>
                <strong>Contact form submissions:</strong> name, work email,
                phone (optional), company, service of interest, budget range,
                and the content of your message.
              </li>
              <li>
                <strong>Newsletter signups:</strong> email address.
              </li>
              <li>
                <strong>Careers applications:</strong> name, contact details,
                work samples, and anything else you choose to send us.
              </li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li>
                <strong>Log data:</strong> IP address, browser type and version,
                pages visited, time of visit, and referring URL. We retain this
                for up to 90 days for security and abuse prevention.
              </li>
              <li>
                <strong>Analytics (if enabled):</strong> aggregated visit data
                through Google Analytics 4 and/or Google Tag Manager. See the
                Cookie Policy.
              </li>
            </ul>

            <h2>3. How we use information</h2>
            <ul>
              <li>
                To respond to your enquiries and provide the services you
                request.
              </li>
              <li>To send you the engineering newsletter you signed up for.</li>
              <li>
                To monitor the security, performance, and reliability of our
                site.
              </li>
              <li>To comply with legal obligations.</li>
              <li>
                With your consent, to send relevant follow-up communications.
                You can opt out of any non-essential email at any time.
              </li>
            </ul>

            <h2>4. Legal bases for processing (EU/UK visitors)</h2>
            <p>
              Where the GDPR applies, we rely on the following legal bases:{" "}
              <strong>(a) consent</strong> for analytics and marketing;{" "}
              <strong>(b) contract</strong> for service delivery;{" "}
              <strong>(c) legitimate interest</strong> for site security, abuse
              prevention, and improving our services;{" "}
              <strong>(d) legal obligation</strong> where required.
            </p>

            <h2>5. How we share information</h2>
            <p>
              We do not sell personal data. We share it only with the following
              categories of recipients, and only as needed:
            </p>
            <ul>
              <li>
                <strong>Service providers</strong> who process data on our
                behalf — for example, our email delivery provider, hosting
                provider, and analytics provider.
              </li>
              <li>
                <strong>Legal authorities</strong> when compelled by law or to
                protect our rights and the safety of users.
              </li>
              <li>
                <strong>Successors</strong> in the event of a merger,
                acquisition, or asset transfer — subject to a confidentiality
                undertaking equivalent to this policy.
              </li>
            </ul>

            <h2>6. International transfers</h2>
            <p>
              Bigwig operates from India and the United States. Your information
              may be transferred to, stored in, and processed in countries other
              than your own. Where required by law, we put in place appropriate
              safeguards, such as Standard Contractual Clauses, for such
              transfers.
            </p>

            <h2>7. Data retention</h2>
            <p>
              We retain personal data only as long as needed for the purposes
              described in this policy. Specifically:
            </p>
            <ul>
              <li>
                Contact form submissions: up to 24 months, unless an active
                engagement begins.
              </li>
              <li>Newsletter subscriber list: until you unsubscribe.</li>
              <li>Server logs: up to 90 days.</li>
              <li>
                Records related to legal, tax, or accounting obligations: as
                required by applicable law.
              </li>
            </ul>

            <h2>8. Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access the
              personal data we hold about you; correct inaccuracies; request
              deletion; object to or restrict certain processing; receive a
              portable copy of your data; and withdraw consent at any time. To
              exercise these rights, email us at{" "}
              <a href={`mailto:${email}`}>{email}</a>. We will respond within 30
              days.
            </p>

            <h2>9. Security</h2>
            <p>
              We use commercially reasonable technical and organisational
              measures to protect personal data, including HTTPS in transit,
              encryption at rest where applicable, and least-privilege access
              controls. No method of transmission or storage is 100% secure, but
              we work hard to protect your information.
            </p>

            <h2>10. Children</h2>
            <p>
              Our services are not directed to children under 16. We do not
              knowingly collect personal information from children. If you
              believe we have, contact us and we will delete it.
            </p>

            <h2>11. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will update the &quot;Effective&quot; date at
              the top of this page and, where appropriate, notify you by email
              or in-product notice.
            </p>

            <h2>12. Contact</h2>
            <p>
              Questions, concerns, or requests? Email{" "}
              <a href={`mailto:${email}`}>{email}</a> or write to:
            </p>
            <p>
              <strong>Engineering Hub (Head Office)</strong> — SVH 83, Office
              No. 1022, Metro Street, Sector 83, Gurugram, Haryana 122004, India
            </p>
            <p>
              <strong>America&apos;s Office</strong> — PO Box 1090, S Milpitas
              Blvd, PMB 2006, Milpitas, CA 95035, United States
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
