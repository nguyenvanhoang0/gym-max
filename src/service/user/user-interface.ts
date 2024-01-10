export interface UserInterface {
    id: number;
    username: string;
    email: string;
}
export interface IUser {
    id: number;
    username: string;
    password_hash: string;
    password_salt: string;
    email: string;
    address?: string;
    dateOfBirth?: string | null;
    gender?: string;
    weight?: string | null;
    height?: string | null;
    healthStatus?: string;
    avatarPath?: string;
    status?: string;
    introduction?: string;
    educationLevel?: string;
    role?: string; 
    logged_out: boolean; 
}


export interface IAddUserInformation {
    id: number;
    key: string;
    value: string;
  }

  export interface IAuthor {
    $id: string;
    id: number;
    username: string;
    email: string;
    avatarPath: string;
    educationLevel: string;
    role: string;
  }
  