import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      // Call the Vercel Speed Insights and Analytics injection functions
    }
  },
};
