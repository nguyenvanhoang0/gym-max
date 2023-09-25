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
    dateOfBirth?: string; 
    gender?: string;
    weight?: number;
    height?: number; 
    healthStatus?: string;
    avatarPath?: string;
    status?: string;
    introduction?: string;
    educationLevel?: string;
    Role?: string; 
    logged_out: boolean; 
}
