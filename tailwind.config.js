module.exports= {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homebackground: "url('../src/assets/background-project.png')",
      },
      colors: {
        fighting: "#c03028",
        normal: "#a8a878",
        flying: "#a890f0",
        poison: "#a040a0",
        ground: "#e0c068",
        rock: "#b8a038",
        bug: "#a8b820",
        ghost: "#705898",
        steel: "#b8b8d0",
        fire: "#ee8328",
        water: "#6890f0",
        electric: "#f8d030",
        psychic: "#f85888",
        ice: "#98d8d8",
        dragon: "#7038f8",
        dark: "#705848",
        grass: "#78c850",
        fairy: "#ffb7fa",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
      gradientColorStops: ["hover"],
    },
  },
  plugins: [],
};
