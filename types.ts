export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  icon: 'briefcase' | 'message-circle' | 'graduation-cap' | 'globe';
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface AssessmentResult {
  cefrLevel: string;
  feedback: string;
  recommendedCourse: string;
}

export enum NavRoute {
  HOME = '/',
  ABOUT = '/about',
  COURSES = '/courses',
  CONTACT = '/contact'
}