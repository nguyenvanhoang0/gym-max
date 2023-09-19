export interface AuthInterface {
    username: string;
  email: string;
}

export interface UserInfo {
    username: string;
  email: string;
}

// LoginResponse.ts
export interface LoginResponse {
  token: string;
  expiresIn: number;
}


// UserInfo.ts
// export interface UserInfo {
//   username: string;
//   email: string;
//   // Thêm các trường thông tin khác bạn muốn lấy từ API
// }
