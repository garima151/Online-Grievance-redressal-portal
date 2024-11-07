import { User, Grievance } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=80',
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80',
  },
];

export const mockGrievances: Grievance[] = [
  {
    id: '1',
    userId: '2',
    title: 'Technical Issue with Portal Access',
    description: 'Unable to access the student portal since yesterday.',
    category: 'technical',
    status: 'pending',
    priority: 'high',
    createdAt: '2024-03-20T10:00:00Z',
    updatedAt: '2024-03-20T10:00:00Z',
    attachments: ['screenshot.png'],
    responses: [],
  },
  {
    id: '2',
    userId: '2',
    title: 'Fee Payment Issue',
    description: 'Double charged for semester fees.',
    category: 'financial',
    status: 'in_progress',
    priority: 'medium',
    createdAt: '2024-03-19T15:30:00Z',
    updatedAt: '2024-03-20T09:00:00Z',
    attachments: ['receipt.pdf'],
    responses: [
      {
        id: '1',
        grievanceId: '2',
        responderId: '1',
        message: 'We are investigating this issue with the finance department.',
        createdAt: '2024-03-20T09:00:00Z',
      },
    ],
  },
];