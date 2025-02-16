export interface User {
    id: number
    username: string
    email: string
  }
  
  export interface AuthState {
    isAuthenticated: boolean
    user: User | null
    loading: boolean
    error: unknown
    login: (username: string, password: string) => Promise<void>
    logout: () => Promise<void>
    register: (username: string, email: string, password: string) => Promise<void>
    checkAuth: () => Promise<void>
  }
  
  export interface ApiError {
    message: string
    [key: string]: unknown
  }
  
  