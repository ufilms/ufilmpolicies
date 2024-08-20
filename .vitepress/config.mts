import { defineConfig } from "vitepress";
import { SpeedInsights } from "@vercel/speed-insights/next";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ufilms",
  description: "ufilms policies",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "List of policies",
        items: [
          {
            text: "Information Security Policy",
            link: "docs/1_Information_Security_Policy.md",
          },
          {
            text: "Acceptable Use Policy (AUP)",
            link: "docs/2_Acceptable_Use_Policy.md",
          },
          {
            text: "Access Control Policy",
            link: "docs/3_Access_Control_Policy.md",
          },
          {
            text: "Incident Response Plan",
            link: "docs/4_Incident_Response_Plan.md",
          },
          {
            text: "Disaster Recovery and Business Continuity Plan",
            link: "docs/5_Disaster_Recovery_and_Business_Continuity_Plan.md",
          },
          {
            text: "Data Protection and Privacy Policy",
            link: "docs/6_Data_Protection_and_Privacy_Policy.md",
          },
          {
            text: "Risk Management Policy",
            link: "docs/7_Risk_Management_Policy.md",
          },
          {
            text: "Change Management Policy",
            link: "docs/8_Change_Management_Policy.md",
          },
          { text: "Remote Work Policy", link: "/9_Remote_Work_Policy.md" },
          {
            text: "Employee Onboarding/Offboarding Procedures",
            link: "docs/10_Employee_Onboarding_Offboarding_Procedures.md",
          },
          {
            text: "Vendor Management Policy",
            link: "docs/11_Vendor_Management_Policy.md",
          },
          {
            text: "Training and Awareness Program",
            link: "docs/12_Training_and_Awareness_Program.md",
          },
        ],
      },
    ],

    search: {
      provider: "local",
    },
  },
});
