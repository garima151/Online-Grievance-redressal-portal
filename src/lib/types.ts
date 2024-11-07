export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
}

export interface Grievance {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: GrievanceCategory;
  status: GrievanceStatus;
  priority: GrievancePriority;
  createdAt: string;
  updatedAt: string;
  attachments: string[];
  responses: GrievanceResponse[];
}

export type GrievanceCategory =
  | 'academic'
  | 'technical'
  | 'financial'
  | 'administrative'
  | 'other';

export type GrievanceStatus =
  | 'pending'
  | 'in_progress'
  | 'resolved'
  | 'rejected';

export type GrievancePriority = 'low' | 'medium' | 'high';

export interface GrievanceResponse {
  id: string;
  grievanceId: string;
  responderId: string;
  message: string;
  createdAt: string;
}

export interface DashboardStats {
  total: number;
  pending: number;
  inProgress: number;
  resolved: number;
  rejected: number;
}