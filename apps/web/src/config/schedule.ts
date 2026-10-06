export type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

const ALL_DAYS: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export interface TimeSlot {
  id: "morning" | "afternoon" | "night";
  label: string;
  timeRange: string;
  note: string;
  days: Weekday[];
  whatsappMessage: string;
  /** Border accent: matches plan */
  accent: "gold" | "forest" | "navy";
}

export const schedule: TimeSlot[] = [
  {
    id: "morning",
    label: "Morning Batch",
    timeRange: "8:00 AM – 10:00 AM",
    note: "An energising start to the day. Ideal for school-age children before school and adults with morning availability.",
    days: [],
    whatsappMessage: "I'd like to join the Morning Batch.",
    accent: "gold",
  },
  {
    id: "afternoon",
    label: "Afternoon Batch",
    timeRange: "~4:00 PM – 6:00 PM",
    note: "After Asr through Maghrib — a blessed and focused time. A favourite with families.",
    days: [],
    whatsappMessage: "I'd like to join the Afternoon Batch.",
    accent: "forest",
  },
  {
    id: "night",
    label: "Night Batch",
    timeRange: "9:00 PM – 12:00 AM",
    note: "Perfect for working adults and international students in UK, US, EU, and Gulf time zones.",
    days: [],
    whatsappMessage: "I'd like to join the Night Batch.",
    accent: "navy",
  },
];

export { ALL_DAYS };
