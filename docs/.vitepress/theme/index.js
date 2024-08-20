import DefaultTheme from "vitepress/theme";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject as injectAnalytics } from "@vercel/analytics";

export default {
  ...DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      // Call the Vercel Speed Insights and Analytics injection functions
      injectSpeedInsights();
      injectAnalytics();
    }
  },
};
