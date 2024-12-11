import { LucideIcon } from 'lucide-react';

export interface PolicyType {
  id: string;
  title: string;
  description: string;
  type: string;
  coverage: string;
  premium: string;
  features: string[];
  image: string;
  icon: LucideIcon;
  href: string;
}