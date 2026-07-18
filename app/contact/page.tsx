import {
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import WaveBackground from "../components/WaveBackground";

const fields = [
  { label: "Full name", placeholder: "", required: true },
  { label: "Work email", placeholder: "", required: true, type: "email" },
  { label: "Phone (optional)", placeholder: "", type: "tel" },
  { label: "Company", placeholder: "" },
  { label: "Your role", placeholder: "e.g. CEO, CTO, Product Lead" },
  {
    label: "Company website",
    placeholder: "https://yourcompany.com",
    type: "url",
  },
];

const steps = [
  {
    number: "01",
    title: "We read it — properly",
    icon: MessageSquare,
    text: "A senior engineer reviews your note, not a bot or a junior gatekeeper. You hear back within one business day.",
  },
  {
    number: "02",
    title: "An honest read on fit",
    icon: Check,
    text: "We'll tell you whether we're the right team for this — and if we're not, we point you to who is. No hard sell.",
  },
  {
    number: "03",
    title: "A scoped path forward",
    icon: Sparkles,
    text: "If it's a fit, we propose a paid discovery sprint with a written scope and a fixed price before any code.",
  },
];

function ContactCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <article className="contact-card rounded-[15px] bg-white p-6 shadow-[0_12px_24px_rgba(63,72,120,0.08)]">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#fff0ed] text-[#ff7658]">
          <Icon size={15} strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8992ad]">
            {label}
          </p>
          {children}
        </div>
      </div>
    </article>
  );
}

export default function ContactPage() {
  return (
    <main className="contact-page min-h-screen overflow-hidden bg-[#f4f5fc] text-[#121526]">
      <section className="relative overflow-hidden border-b border-[#e4e7f2] bg-[linear-gradient(116deg,#fafbff_0%,#f4f5fd_68%,#eef0fa_100%)]">
        <WaveBackground />
        <div className="relative z-10 mx-auto max-w-[1360px] px-5 pb-24 pt-12 sm:px-8 lg:px-10">
          <div className="mb-9 flex items-center gap-2 text-[12px] font-medium text-[#75809d]">
            <Link href="/" className="transition hover:text-[#ff6849]">
              Home
            </Link>
            <span className="text-[#b1b7ca]">›</span>
            <span className="text-[#293049]">Contact</span>
          </div>
          <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#7e89a6]">
            <span className="h-px w-4 bg-[#ff836b]" /> Contact
          </p>
          <h1 className="max-w-xl text-[clamp(2.45rem,5vw,4.1rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#101322]">
            Let us build something
            <br />
            <em className="font-serif font-normal text-[#fa6849]">
              durable
            </em>{" "}
            together.
          </h1>
          <p className="mt-5 max-w-[570px] text-[16px] leading-7 text-[#596582]">
            Tell us about the problem, the timelines, and the constraints.
            We&apos;ll respond within one business day with an honest read on
            fit and scope.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Replies in 1 business day",
              "Gurugram, India",
              "100% IP ownership",
              "NDA on request",
            ].map((item, index) => (
              <span
                key={item}
                className="flex items-center gap-1.5 rounded-full border border-[#e1e5ef] bg-[#f8f9fd] px-3 py-2 text-[11px] font-semibold text-[#697590]"
              >
                {index === 0 ? (
                  <Clock3 size={13} className="text-[#ff7759]" />
                ) : index === 1 ? (
                  <MapPin size={13} className="text-[#ff7759]" />
                ) : index === 2 ? (
                  <Check size={13} className="text-[#ff7759]" />
                ) : (
                  <ShieldCheck size={13} className="text-[#8793b5]" />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_43%_20%,#e9ebf8_0,transparent_34%),linear-gradient(105deg,#f0f1fb,#e9ebf8)] py-10 sm:py-14">
        <div className="mx-auto grid max-w-[1360px] gap-7 px-5 sm:px-8 lg:grid-cols-[1.32fr_.92fr] lg:px-10">
          <form
            className="contact-form rounded-[18px] bg-white p-7 shadow-[0_15px_34px_rgba(58,67,115,0.15)] sm:p-9"
            action="#"
          >
            <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#74809e]">
                    {field.label}
                    {field.required && (
                      <b className="ml-0.5 text-[#ff6d50]">*</b>
                    )}
                  </span>
                  <input
                    type={field.type ?? "text"}
                    placeholder={field.placeholder}
                    className="h-11 w-full rounded-md border border-[#e1e5ed] bg-[#f4f6f9] px-3 text-[13px] text-[#25304c] outline-none transition focus:border-[#9da9ea] focus:bg-white"
                  />
                </label>
              ))}
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#74809e]">
                  Service
                </span>
                <select
                  defaultValue=""
                  className="h-11 w-full rounded-md border border-[#e1e5ed] bg-[#f4f6f9] px-3 text-[13px] text-[#53607d] outline-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>AI product development</option>
                  <option>Web application</option>
                  <option>Mobile application</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#74809e]">
                  Estimated budget
                </span>
                <select
                  defaultValue=""
                  className="h-11 w-full rounded-md border border-[#e1e5ed] bg-[#f4f6f9] px-3 text-[13px] text-[#53607d] outline-none"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>Under $25k</option>
                  <option>$25k–$75k</option>
                  <option>$75k+</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#74809e]">
                  How did you hear about us?
                </span>
                <select
                  defaultValue=""
                  className="h-11 w-full rounded-md border border-[#e1e5ed] bg-[#f4f6f9] px-3 text-[13px] text-[#53607d] outline-none"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Referral</option>
                  <option>Google</option>
                  <option>LinkedIn</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#74809e]">
                  Tell us about your project <b className="text-[#ff6d50]">*</b>
                </span>
                <textarea
                  required
                  placeholder="The problem you’re solving, what good looks like, and anything we should know."
                  className="h-28 w-full resize-none rounded-md border border-[#e1e5ed] bg-[#f4f6f9] px-3 py-3 text-[13px] text-[#25304c] outline-none transition placeholder:text-[#75809d] focus:border-[#9da9ea] focus:bg-white"
                />
              </label>
            </div>
            <p className="mt-5 text-[10px] leading-4 text-[#8690aa]">
              By submitting, you agree to our Privacy Policy. We never share
              your details and process this enquiry only to respond to you.
            </p>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#4059f4] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_6px_14px_rgba(64,89,244,.35)] transition hover:bg-[#334ce7]"
            >
              Send message <ArrowRight size={15} />
            </button>
          </form>

          <aside className="flex flex-col gap-4">
            <article className="contact-card rounded-[15px] bg-white p-6 shadow-[0_12px_24px_rgba(63,72,120,0.08)]">
              <p className="mb-5 text-[15px] font-semibold text-[#1b2034]">
                Prefer the direct route?
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-[#fff0ed] text-[#ff7658]">
                    <Mail size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#8992ad]">
                      Email
                    </p>
                    <a
                      href="mailto:sales@Bigwig.com"
                      className="text-[13px] font-semibold text-[#27314d]"
                    >
                      sales@Bigwig.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-[#fff0ed] text-[#ff7658]">
                    <Clock3 size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#8992ad]">
                      Phone
                    </p>
                    <p className="text-[13px] font-semibold text-[#27314d]">
                      +91 851 288 3688
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-[#fff0ed] text-[#ff7658]">
                    <Clock3 size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#8992ad]">
                      Hours
                    </p>
                    <p className="text-[13px] font-semibold text-[#27314d]">
                      Monday – Friday, 9am – 6pm (IST, UTC+5:30)
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <ContactCard icon={Building2} label="America's office">
              <p className="mt-1 text-[14px] font-semibold text-[#28324e]">
                Milpitas, California
              </p>
              <p className="mt-2 text-[10px] leading-5 text-[#6e7896]">
                PO Box 1090, S Milpitas Blvd, PMB 2006
                <br />
                Milpitas, CA 95035, United States
              </p>
            </ContactCard>
            <ContactCard icon={MapPin} label="Engineering hub">
              <p className="mt-1 text-[14px] font-semibold text-[#28324e]">
                Gurugram, India
              </p>
              <p className="mt-2 text-[10px] leading-5 text-[#6e7896]">
                SVH 83, Office No. 1022, Metro Street, Sector 83
                <br />
                Gurugram, Haryana 122004, India
              </p>
            </ContactCard>
          </aside>
        </div>
      </section>

      <section className="bg-[#f7f8fd] py-14 sm:py-18">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.25em] text-[#7d88a5]">
            <span className="h-px w-4 bg-[#ff836b]" /> After you hit send
          </p>
          <h2 className="mt-4 text-[clamp(2.2rem,3vw,3.3rem)] font-semibold leading-none tracking-[-.055em] text-[#131628]">
            What happens next.
          </h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <article
                key={number}
                className="contact-card rounded-[16px] border border-[#eceef5] bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-[#fff0ed] text-[#ff7658]">
                    <Icon size={16} />
                  </span>
                  <span className="text-[10px] font-bold tracking-[.14em] text-[#8c96ae]">
                    {number}
                  </span>
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-[#252c44]">
                  {title}
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#66728f]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
