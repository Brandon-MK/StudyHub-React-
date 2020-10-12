import { useStateValue } from "./state";
import React from "react";

export const Button = () => {
  const [{ theme }, dispatch] = useStateValue();

  return (
    <div className={[theme.primary, "fullWidth"].join(" ")}>
      <button
        className={theme.primary}
        onClick={() =>
          dispatch({
            type: "changeTheme",
            newTheme: { primary: theme.primary === "blue" ? "green" : "blue" },
          })
        }
      >
        Make me blue!
      </button>
    </div>
  );
};
s;
