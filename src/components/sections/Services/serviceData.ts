import { Code2, Smartphone, Cloud, Palette, Brain, Database } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Scalable, efficient solutions designed to meet your specific business goals.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Intuitive mobile solutions for iOS, Android, and cross-platform applications.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Reliable, secure, and scalable cloud solutions with streamlined operations.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Modern, user-friendly designs that enhance customer experiences.'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage cutting-edge AI technologies.'
  },
  {
    icon: Database,
    title: 'Blockchain Solutions',
    description: 'Secure and transparent blockchain implementations for your business.'
  }
];