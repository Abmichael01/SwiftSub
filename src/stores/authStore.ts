import {create} from "zustand"
import axios from "axios"
import type { AuthState, User, ApiError } from "@/types"

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,

  login: async (username: string, password: string) => {
    set({ loading: true, error: null })
    try {
      const response = await axios.post<{ user: User }>(
        "/auth/jwt/create/",
        { username, password },
        {
          withCredentials: true,
        },
      )
      set({ isAuthenticated: true, user: response.data.user, loading: false })
    } catch (error) {
      const apiError: ApiError = { message: "An error occurred" }
      if (axios.isAxiosError(error)) {
        apiError.message = error.response?.data?.detail || error.message
      }
      set({ error: apiError, loading: false })
    }
  },

  logout: async () => {
    set({ loading: true, error: null })
    try {
      await axios.post("/auth/logout/", {}, { withCredentials: true })
      set({ isAuthenticated: false, user: null, loading: false })
    } catch (error) {
      const apiError: ApiError = { message: "An error occurred during logout" }
      if (axios.isAxiosError(error)) {
        apiError.message = error.response?.data?.detail || error.message
      }
      set({ error: apiError, loading: false })
    }
  },

  register: async (username: string, email: string, password: string) => {
    set({ loading: true, error: null })
    try {
      const response = await axios.post<User>(
        "/auth/users/",
        { username, email, password },
        {
          withCredentials: true,
        },
      )
      set({ isAuthenticated: false, user: response.data, loading: false })
    } catch (error) {
      const apiError: ApiError = { message: "An error occurred during registration" }
      if (axios.isAxiosError(error)) {
        apiError.message = error.response?.data?.detail || error.message
      }
      set({ error: apiError, loading: false })
    }
  },

  checkAuth: async () => {
    set({ loading: true, error: null })
    try {
      const response = await axios.get<User>("/auth/users/me/", { withCredentials: true })
      set({ isAuthenticated: true, user: response.data, loading: false })
    } catch (error) {
        console.log(error)
      set({ isAuthenticated: false, user: null, loading: false })
    }
  },
}))

export default useAuthStore

