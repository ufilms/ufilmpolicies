import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GPM",
  description: "Green Power Media Policies",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "List of policies",
        items: [
          {
            text: "Information Security Policy",
            link: "/1_Information_Security_Policy.md",
          },
          {
            text: "Acceptable Use Policy (AUP)",
            link: "/2_Acceptable_Use_Policy.md",
          },
          {
            text: "Access Control Policy",
            link: "/3_Access_Control_Policy.md",
          },
          {
            text: "Incident Response Plan",
            link: "/4_Incident_Response_Plan.md",
          },
          {
            text: "Disaster Recovery and Business Continuity Plan",
            link: "/5_Disaster_Recovery_and_Business_Continuity_Plan.md",
          },
          {
            text: "Data Protection and Privacy Policy",
            link: "/6_Data_Protection_and_Privacy_Policy.md",
          },
          {
            text: "Risk Management Policy",
            link: "/7_Risk_Management_Policy.md",
          },
          {
            text: "Change Management Policy",
            link: "/8_Change_Management_Policy.md",
          },
          { text: "Remote Work Policy", link: "/9_Remote_Work_Policy.md" },
          {
            text: "Employee Onboarding/Offboarding Procedures",
            link: "/10_Employee_Onboarding_Offboarding_Procedures.md",
          },
          {
            text: "Vendor Management Policy",
            link: "/11_Vendor_Management_Policy.md",
          },
          {
            text: "Training and Awareness Program",
            link: "/12_Training_and_Awareness_Program.md",
          },
        ],
      },
    ],
    // Local search configuration added here
    search: {
      provider: "local",
    },
  },
});

import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

import { inject } from "@vercel/analytics";

inject();
