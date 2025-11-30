import { categories } from "./results";
import type { Questions } from "../types";

type QuestionWithCategory = Omit<Questions[number], "category"> & {
  category: keyof typeof categories;
};

export const questions = [
  {
    id: "q1",
    category: "Screen Time Management",
    questionText:
      "How much time do you spend on screens per day (work + leisure)?",
    options: [
      { id: "q1-opt1", optionText: "Less than 4 hours", value: 10 },
      { id: "q1-opt2", optionText: "4-6 hours", value: 7 },
      { id: "q1-opt3", optionText: "6-8 hours", value: 5 },
      { id: "q1-opt4", optionText: "8-10 hours", value: 3 },
      { id: "q1-opt5", optionText: "More than 10 hours", value: 1 },
    ],
  },
  {
    id: "q2",
    category: "Screen Time Management",
    questionText:
      "When was your last digital detox (day without social media/messengers)?",
    options: [
      { id: "q2-opt1", optionText: "This week", value: 10 },
      { id: "q2-opt2", optionText: "This month", value: 7 },
      { id: "q2-opt3", optionText: "2-3 months ago", value: 5 },
      { id: "q2-opt4", optionText: "More than 6 months ago", value: 2 },
      {
        id: "q2-opt5",
        optionText: "Never / can't remember",
        value: 0,
      },
    ],
  },
  {
    id: "q3",
    category: "Screen Time Management",
    questionText: "What do you do in the first 30 minutes after waking up?",
    options: [
      {
        id: "q3-opt1",
        optionText: "Meditation/exercise/breakfast without phone",
        value: 10,
      },
      {
        id: "q3-opt2",
        optionText: "Check messages but not social media",
        value: 6,
      },
      {
        id: "q3-opt3",
        optionText: "Scroll social media in bed",
        value: 2,
      },
      {
        id: "q3-opt4",
        optionText: "Jump straight into work chats",
        value: 3,
      },
    ],
  },
  {
    id: "q4",
    category: "Notification Hygiene",
    questionText: "How many apps can send you push notifications?",
    options: [
      { id: "q4-opt1", optionText: "0-5 (critical only)", value: 10 },
      { id: "q4-opt2", optionText: "6-15", value: 8 },
      { id: "q4-opt3", optionText: "16-30", value: 5 },
      { id: "q4-opt4", optionText: "31-50", value: 2 },
      {
        id: "q4-opt5",
        optionText: "More than 50 / don't know",
        value: 0,
      },
    ],
  },
  {
    id: "q5",
    category: "Notification Hygiene",
    questionText:
      "How often do you get interrupted by notifications during focused work?",
    options: [
      {
        id: "q5-opt1",
        optionText: "Never (DND/Focus mode always on)",
        value: 10,
      },
      { id: "q5-opt2", optionText: "1-2 times per hour", value: 7 },
      { id: "q5-opt3", optionText: "3-5 times per hour", value: 4 },
      {
        id: "q5-opt4",
        optionText: "Constantly, as soon as they arrive",
        value: 1,
      },
    ],
  },
  {
    id: "q6",
    category: "Notification Hygiene",
    questionText: "Do you use focus modes (DND, Focus Mode, etc.)?",
    options: [
      {
        id: "q6-opt1",
        optionText: "Yes, regularly (several hours daily)",
        value: 10,
      },
      {
        id: "q6-opt2",
        optionText: "Yes, sometimes (when really needed)",
        value: 6,
      },
      {
        id: "q6-opt3",
        optionText: "Rarely, only at night",
        value: 3,
      },
      {
        id: "q6-opt4",
        optionText: "No, I don't use them",
        value: 0,
      },
    ],
  },
  {
    id: "q7",
    category: "Digital Organization",
    questionText:
      "What does your computer desktop / Downloads folder look like?",
    options: [
      { id: "q7-opt1", optionText: "Empty or organized folders", value: 10 },
      { id: "q7-opt2", optionText: "Up to 10 files", value: 7 },
      { id: "q7-opt3", optionText: "10-30 files", value: 4 },
      {
        id: "q7-opt4",
        optionText: "Chaos, dozens/hundreds of files",
        value: 1,
      },
      { id: "q7-opt5", optionText: "I'm afraid to even look", value: 0 },
    ],
  },
  {
    id: "q8",
    category: "Digital Organization",
    questionText: "How many browser tabs do you currently have open?",
    options: [
      { id: "q8-opt1", optionText: "0-5", value: 10 },
      { id: "q8-opt2", optionText: "6-15", value: 7 },
      { id: "q8-opt3", optionText: "16-30", value: 4 },
      { id: "q8-opt4", optionText: "31-50", value: 2 },
      {
        id: "q8-opt5",
        optionText: 'More than 50 / have "sleeping tabs"',
        value: 0,
      },
    ],
  },
  {
    id: "q9",
    category: "Security & Privacy",
    questionText: "Do you use a password manager?",
    options: [
      { id: "q9-opt1", optionText: "Yes, for all accounts", value: 10 },
      { id: "q9-opt2", optionText: "Yes, for important ones", value: 7 },
      {
        id: "q9-opt3",
        optionText: "No, but passwords are different",
        value: 5,
      },
      {
        id: "q9-opt4",
        optionText: "No, I use 2-3 same passwords",
        value: 1,
      },
    ],
  },
  {
    id: "q10",
    category: "Security & Privacy",
    questionText: "On how many critical services do you have 2FA enabled?",
    options: [
      {
        id: "q10-opt1",
        optionText: "On all (email, banks, social media)",
        value: 10,
      },
      { id: "q10-opt2", optionText: "On banks and email", value: 7 },
      { id: "q10-opt3", optionText: "Only on banks", value: 4 },
      { id: "q10-opt4", optionText: "I don't use 2FA", value: 0 },
    ],
  },
  {
    id: "q11",
    category: "Security & Privacy",
    questionText: "How often do you backup important files?",
    options: [
      { id: "q11-opt1", optionText: "Automatically (cloud sync)", value: 10 },
      { id: "q11-opt2", optionText: "Once a week/month", value: 7 },
      { id: "q11-opt3", optionText: "When I remember", value: 3 },
      { id: "q11-opt4", optionText: "I don't backup", value: 0 },
    ],
  },
  {
    id: "q12",
    category: "Mindful Usage",
    questionText:
      "What's your ratio of consuming vs creating content on social media?",
    options: [
      {
        id: "q12-opt1",
        optionText: "80%+ creating / actively engaging",
        value: 10,
      },
      { id: "q12-opt2", optionText: "50/50", value: 7 },
      {
        id: "q12-opt3",
        optionText: "80%+ consuming (scrolling)",
        value: 3,
      },
      {
        id: "q12-opt4",
        optionText: "Only consuming, never posting",
        value: 1,
      },
    ],
  },
  {
    id: "q13",
    category: "Mindful Usage",
    questionText: "How do you feel after an hour on social media?",
    options: [
      {
        id: "q13-opt1",
        optionText: "Inspired, learned something new",
        value: 10,
      },
      { id: "q13-opt2", optionText: "Neutral", value: 7 },
      { id: "q13-opt3", optionText: "Tired, time wasted", value: 3 },
      {
        id: "q13-opt4",
        optionText: "Anxious, comparing myself to others",
        value: 0,
      },
    ],
  },
  {
    id: "q14",
    category: "Communication Boundaries",
    questionText: "Do people expect instant responses from you?",
    options: [
      {
        id: "q14-opt1",
        optionText: "No, there's an agreement about response time",
        value: 10,
      },
      {
        id: "q14-opt2",
        optionText: "Depends on context (work vs personal)",
        value: 7,
      },
      {
        id: "q14-opt3",
        optionText: "Yes, I try to respond quickly",
        value: 3,
      },
      {
        id: "q14-opt4",
        optionText: "Yes, I feel guilty if I don't respond",
        value: 0,
      },
    ],
  },
  {
    id: "q15",
    category: "Communication Boundaries",
    questionText: "Do you separate work and personal communications?",
    options: [
      {
        id: "q15-opt1",
        optionText: "Yes, separate devices/accounts",
        value: 10,
      },
      {
        id: "q15-opt2",
        optionText: "Yes, different apps/profiles",
        value: 8,
      },
      { id: "q15-opt3", optionText: "Partially", value: 5 },
      {
        id: "q15-opt4",
        optionText: "No, everything in one place",
        value: 2,
      },
    ],
  },
] satisfies QuestionWithCategory[];
