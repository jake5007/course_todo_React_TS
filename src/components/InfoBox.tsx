import { type InfoBoxProps } from "../types";

const InfoBox = ({ mode, level = "medium", children }: InfoBoxProps) => {
  return (
    <aside
      className={`infobox ${
        mode === "hint" ? "infobox-hint" : "infobox-warning"
      } warning--${level}
      `}
    >
      {mode === "warning" && <h2>Warning</h2>}
      <p>{children}</p>
    </aside>
  );
};
export default InfoBox;
