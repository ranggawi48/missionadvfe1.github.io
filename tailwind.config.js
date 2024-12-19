/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#18181d",
        "custom-blue-1": "#192DB7",
        "custom-blue-2": "#5370D4",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "bg-login":
          "url('https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "bg-register":
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "gradient-blue": "linear-gradient(to bottom right, #192DB7, #5370D4)",
      },
    },
  },
  plugins: [],
};

