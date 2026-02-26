/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    "intro",
    {
      type: "category",
      label: "Valley of the Commons 2026",
      items: [
        "valley/overview",
        "valley/venue",
        "valley/location",
        "valley/schedule",
      ],
    },
    {
      type: "category",
      label: "Operations",
      items: [
        "operations/master-timeline",
        "operations/task-tracker",
        "operations/risk-register",
      ],
    },
    {
      type: "category",
      label: "Accommodation",
      items: [
        "accommodation/room-inventory",
        "accommodation/booking-management",
        "accommodation/check-in-check-out",
      ],
    },
    {
      type: "category",
      label: "Logistics",
      items: [
        "logistics/food-kitchen",
        "logistics/travel",
        "logistics/facilities",
      ],
    },
    {
      type: "category",
      label: "Team",
      items: [
        "team/roles",
        "team/comms",
      ],
    },
    {
      type: "category",
      label: "Programming",
      items: [
        "programming/weekly-overview",
        "programming/week-1",
        "programming/week-2",
        "programming/week-3",
        "programming/week-4",
      ],
    },
    {
      type: "category",
      label: "Speakers & Collaborators",
      items: [
        "speakers/speaker-directory",
        "speakers/community-partners",
      ],
    },
    {
      type: "category",
      label: "Participants",
      items: [
        "participants/application-flow",
        "participants/onboarding",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/event-organization",
      ],
    },
  ],
};

module.exports = sidebars;
