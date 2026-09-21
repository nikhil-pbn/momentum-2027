import { Fragment } from "react";

type LinesProps = {
  lines: readonly string[];
  /** When false the breaks disappear on phones and the text wraps naturally. */
  breakOnMobile?: boolean;
};

/**
 * Renders an array of strings separated by line breaks, for headings that break where the design breaks.
 * A space follows each <br> so words still separate when the break is hidden on small screens.
 */
export function Lines({ lines, breakOnMobile = true }: LinesProps) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 ? (
            <>
              <br className={breakOnMobile ? undefined : "max-sm:hidden"} />{" "}
            </>
          ) : null}
          {line}
        </Fragment>
      ))}
    </>
  );
}
