import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Bigwig Technologies",
  description:
    "Terms governing access to the Bigwig Technologies website and services.",
};

const email = "hello@bigwigtech.com";

export default function TermsOfServicePage() {
  return (
    <div className="terms-of-service-page bg-[#f4f5fc] text-[#171a2d]">
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
              Terms of service
            </span>
          </nav>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[.22em] text-[#7b86a5]">
            Legal
          </p>
          <h1 className="mt-4 text-[clamp(2.8rem,5.2vw,5rem)] font-semibold leading-none tracking-[-.06em]">
            Terms of Service
          </h1>
          <p className="mt-5 text-lg text-[#65708f]">Effective May 2026</p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <article className="mx-auto max-w-[1320px] rounded-[1.6rem] border border-white bg-white px-6 py-8 shadow-[0_16px_42px_rgba(55,65,105,.08)] sm:px-10 sm:py-11 lg:px-12 lg:py-12">
          <div className="privacy-copy">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the website at{" "}
              <a href="https://bigwigtech.com">https://bigwigtech.com</a> and
              the related content, products, and services (collectively, the
              &quot;Services&quot;) provided by Bigwig Technologies Pvt. Ltd.
              (&quot;Bigwig&quot;, &quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;). By accessing or using the Services, you agree to
              be bound by these Terms.
            </p>

            <h2>1. Acceptance</h2>
            <p>
              If you do not agree with these Terms, you must not access or use
              the Services. If you use the Services on behalf of an
              organisation, you represent that you are authorised to bind that
              organisation to these Terms.
            </p>

            <h2>2. The Services</h2>
            <p>
              The Services are marketing and informational in nature. They
              describe Bigwig&apos;s capabilities, work, and people. Engagement
              of Bigwig for actual software development, design, or operations
              work is governed by a separate written agreement signed by both
              parties — these Terms do not create an obligation by Bigwig to
              perform services for you.
            </p>

            <h2>3. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Services in any way that violates applicable law or
                regulation.
              </li>
              <li>
                Attempt to interfere with, disrupt, or compromise the security
                or integrity of the Services.
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract the source
                code of any non-open-source component of the Services.
              </li>
              <li>
                Use automated systems, such as bots, scrapers, or crawlers, to
                access the Services in a way that exceeds reasonable use, except
                for compliant search-engine indexes as permitted by our
                robots.txt.
              </li>
              <li>
                Submit content through forms that is unlawful, defamatory,
                harassing, or that infringes the rights of any third party.
              </li>
            </ul>

            <h2>4. Intellectual property</h2>
            <p>
              The Services — including content, software, designs,
              illustrations, logos, and trademarks — are owned by Bigwig or its
              licensors and are protected by intellectual property laws. You
              receive a limited, non-exclusive, non-transferable, revocable
              licence to access and use the Services for personal or internal
              business purposes only.
            </p>
            <p>
              The names, logos, and trademarks of clients and projects displayed
              in the portfolio remain the property of their respective owners
              and are used with permission or as nominative fair use to describe
              past work.
            </p>

            <h2>5. User submissions</h2>
            <p>
              If you submit information through the contact form, newsletter
              signup, careers form, or any other channel, you grant Bigwig a
              non-exclusive, royalty-free licence to use that information for
              the purposes described in our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> — primarily to
              respond to you and operate the Services. You retain ownership of
              the content you submit.
            </p>
            <p>
              Do not submit confidential information through the public forms on
              this site. For confidential discussions, request a non-disclosure
              agreement first.
            </p>

            <h2>6. Third-party links and services</h2>
            <p>
              The Services may link to third-party websites or rely on
              third-party services, such as email delivery, hosting, and
              analytics providers. Bigwig does not control third parties and is
              not responsible for their content, policies, or practices. Your
              interactions with third parties are governed solely by their
              terms.
            </p>

            <h2>7. Disclaimers</h2>
            <p>
              The Services are provided <strong>&quot;as is&quot;</strong> and{" "}
              <strong>&quot;as available&quot;</strong>, without warranties of
              any kind, express or implied, including warranties of
              merchantability, fitness for a particular purpose,
              non-infringement, accuracy, or uninterrupted availability. Bigwig
              does not warrant that the Services will be error-free or that
              defects will be corrected.
            </p>
            <p>
              Information on the Services is provided for general informational
              purposes and does not constitute professional, legal, financial,
              or technical advice. Always consult appropriately qualified
              professionals for advice on your particular circumstances.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, in no event shall Bigwig,
              its affiliates, officers, employees, agents, or partners be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits, revenue, data, or goodwill,
              arising out of or in connection with your use of, or inability to
              use, the Services — even if Bigwig has been advised of the
              possibility of such damages.
            </p>
            <p>
              Where liability cannot be excluded under applicable law,
              Bigwig&apos;s total aggregate liability arising from or relating
              to your use of the Services shall not exceed one hundred U.S.
              dollars (US$100).
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Bigwig and its
              affiliates, officers, employees, and agents from any claims,
              damages, losses, liabilities, costs, and expenses, including
              reasonable legal fees, arising from your breach of these Terms or
              your misuse of the Services.
            </p>

            <h2>10. Termination</h2>
            <p>
              We may suspend or terminate your access to the Services at any
              time, without notice, for conduct that we reasonably believe
              violates these Terms or is harmful to other users, to us, or to
              third parties.
            </p>

            <h2>11. Changes to the Terms</h2>
            <p>
              We may modify these Terms from time to time. When we do, we will
              update the &quot;Effective&quot; date above. Material changes will
              be brought to your attention by reasonable means. Continued use of
              the Services after changes take effect constitutes acceptance.
            </p>

            <h2>12. Governing law</h2>
            <p>
              These Terms are governed by the laws of the State of California,
              USA, without regard to its conflict-of-laws principles. The
              federal and state courts located in Santa Clara County, California
              shall have exclusive jurisdiction over any dispute arising from or
              relating to these Terms or the Services, except where mandatory
              consumer-protection laws in your jurisdiction provide otherwise.
            </p>

            <h2>13. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
