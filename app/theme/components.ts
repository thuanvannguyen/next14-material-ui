import { Colors } from "./colors";

export const components =  {
  MainMenuFrameComponent: {
    styleOverrides: {
      root: {
        width: 250,
        height: 400,
        border: `12px ${Colors.primary}`,
        borderStyle: "ridge solid",
        borderRadius: "36px",
      },
    },
  },
  GameButtonComponent: {
    styleOverrides: {
      root: {
        width: 200,
        height: 40,
        borderTop: `1px solid ${Colors.lime_green}`,
        borderLeft: `1px solid ${Colors.lime_green}`,
        background: Colors.secondary,
        clipPath: `polygon(
                      4% 0,
                      100% 0,
                      100% 80%,
                      94% 100%,
                      0 100%,
                      0 20%
                  )`,
        "&:hover": {
          border: "none",
          background: Colors.primary,
        },
      },
    },
  },
}