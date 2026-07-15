import clsx from "clsx";

type WaveBackgroundProps = {
  className?: string;
};

/**
 * Decorative, non-interactive background for page heroes.
 * Place it inside a `relative overflow-hidden` container, before its content.
 */
export default function WaveBackground({ className }: WaveBackgroundProps) {
  return (
    <div
      className={clsx("wave-background pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <svg className="wave-background__layer wave-background__layer--far" viewBox="0 0 1800 260" preserveAspectRatio="none">
        <path
          fill="#dfe5ff"
          d="M-100 142C138 92 286 167 521 125C771 80 985 69 1196 119C1404 168 1558 91 1900 116V183C1553 165 1404 235 1183 190C973 148 776 151 526 188C285 225 139 153-100 209Z"
        />
      </svg>
      <svg className="wave-background__layer wave-background__layer--near" viewBox="0 0 1800 260" preserveAspectRatio="none">
        <path
          fill="#edf0ff"
          d="M-100 160C174 108 344 181 568 145C819 105 1007 129 1218 166C1435 204 1597 133 1900 144V203C1590 190 1427 254 1210 218C993 182 817 160 558 205C327 244 151 175-100 226Z"
        />
      </svg>
    </div>
  );
}
