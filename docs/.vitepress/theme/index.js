import DefaultTheme from "vitepress/theme";
import { injectSpeedInsights } from "@vercel/speed-insights";

export default {
  ...DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      // Call the Vercel Speed Insights and Analytics injection functions
    }
  },
};
