/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-form": "#afafaf",
        "original-blue": "#2563eb",
      },
      backgroundImage: {
        "menu-side":
          "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.65ymas.com%2Fconsejos%2Fcual%2Fhielo-que-es-mejor-congelador-comprado_4785_102.html&psig=AOvVaw0rlTEwEvE2IeMpR5aKgs1w&ust=1724095033159000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMD9yK2h_4cDFQAAAAAdAAAAABAE)",
      },
    },
  },
  plugins: [],
};
