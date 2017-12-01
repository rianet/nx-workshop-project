export interface Ticket {
  id: number;
  message: string;
  status: string;
  companyId: number;
  userId: number;
}

export interface Comment {
  id: number;
  message: string;
  ticketId: number;
  userId: number;
}

export interface Company {
  id: string;
  name: string;
  userIds: number[];
}

export interface User {
  id: string;
  username: string;
  fullName: string;
}
