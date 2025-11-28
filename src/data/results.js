export const scoreRanges = [
  {
    id: "zen-master",
    min: 120,
    max: 150,
    label: "Digital Zen Master",
    status: 'good',
    description:
      "You've mastered the art of screen-life balance. Your digital habits support your wellbeing and productivity.",
  },
  {
    id: "balanced",
    min: 90,
    max: 119,
    label: "Balanced Navigator",
    status: 'good',
    description:
      "You're doing well! A few adjustments could help you feel even more in control of your digital life.",
  },
  {
    id: "in-progress",
    min: 60,
    max: 89,
    label: "Work in Progress",
    status: 'normal',
    description:
      "You're aware of the challenges but struggling to maintain boundaries. Small changes can make a big difference.",
  },
  {
    id: "overload",
    min: 30,
    max: 59,
    label: "Digital Overload",
    status: 'bad',
    description:
      "Your screens may be controlling you more than you control them. It's time to reclaim your time and attention.",
  },
  {
    id: "burnout",
    min: 0,
    max: 29,
    label: "Burnout Risk",
    status: 'bad',
    description:
      "Your digital habits need urgent attention. The good news? Every change you make will have immediate impact.",
  },
];

export const categories = {
  "Screen Time Management": {
    id: "screen-time",
    questionIds: ["q1", "q2", "q3"],
    maxScore: 30,
    goodThreshold: 0.7,
    feedback: {
      good: "You manage your screen time well and maintain healthy boundaries.",
      needsWork:
        "Consider setting daily limits and establishing screen-free morning routines.",
    },
  },
  "Notification Hygiene": {
    id: "notifications",
    questionIds: ["q4", "q5", "q6"],
    maxScore: 30,
    goodThreshold: 0.7,
    feedback: {
      good: "Your notification setup supports deep focus and minimizes distractions.",
      needsWork:
        "Too many interruptions are draining your energy and fragmenting your attention.",
    },
  },
  "Digital Organization": {
    id: "organization",
    questionIds: ["q7", "q8"],
    maxScore: 20,
    goodThreshold: 0.7,
    feedback: {
      good: "Your digital workspace is clean and under control.",
      needsWork:
        "Digital clutter adds mental load and makes it harder to find what you need.",
    },
  },
  "Security & Privacy": {
    id: "security",
    questionIds: ["q9", "q10", "q11"],
    maxScore: 30,
    goodThreshold: 0.7,
    feedback: {
      good: "Your digital security practices are solid and protect your data.",
      needsWork:
        "Your accounts and data may be vulnerable. A few changes can significantly improve your security.",
    },
  },
  "Mindful Usage": {
    id: "mindful",
    questionIds: ["q12", "q13"],
    maxScore: 20,
    goodThreshold: 0.7,
    feedback: {
      good: "You use social media intentionally and it adds value to your life.",
      needsWork:
        "Passive scrolling may be affecting your mood and wasting your time.",
    },
  },
  "Communication Boundaries": {
    id: "communication",
    questionIds: ["q14", "q15"],
    maxScore: 20,
    goodThreshold: 0.7,
    feedback: {
      good: "You've set healthy communication boundaries that respect your time.",
      needsWork:
        "The always-on culture is exhausting you. It's okay to not respond immediately.",
    },
  },
};
