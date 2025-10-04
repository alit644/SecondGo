export interface RegisterInput {
    id: string;
    label: string;
    name: "email" | "password";
    type: string;
    placeholder: string;
}


export interface AuthResponse {
    success: boolean;
    message: string;
}
