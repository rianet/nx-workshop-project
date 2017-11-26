export interface Company {
  id: string;
  name: string;
  users: User[];
}

export interface User {
  id: string;
  username: string;
  fullName: string;
}
