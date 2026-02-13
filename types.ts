export interface Program {
  id: string;
  title: string;
  type: 'Associate' | 'Certificate';
  tags: string[];
  description: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}