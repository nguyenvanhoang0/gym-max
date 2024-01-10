export interface IAuth {
    username: string;
  email: string;
}

export interface IUserInfo {
    username: string;
  email: string;
}

// LoginResponse.ts
export interface ILoginResponse {
  token: string;
  expiresIn: number;
}


// UserInfo.ts
// export interface UserInfo {
//   username: string;
//   email: string;
//   // Thêm các trường thông tin khác bạn muốn lấy từ API
// }
