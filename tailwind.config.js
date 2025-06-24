import colors from "tailwindcss/colors";

module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heat: "#EF4444",
        warm: "#F97316",
        mild: "#EAB308",
        cool: "#38BDF8",
        cold: "#3B82F6",
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        heat: "#EF4444",
        warm: "#F97316",
        mild: "#EAB308",
        cool: "#38BDF8",
        cold: "#3B82F6",
      }),
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        // Add your custom font sizes here
      },
    },
  },
  plugins: [],
};
