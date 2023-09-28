export interface UserInterface {
    id: number;
    username: string;
    email: string;
}
export interface User {
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
    Role?: string; 
    logged_out: boolean; 
}


export interface AddUserInformation {
    id: number;
    key: string;
    value: string;
  }
  