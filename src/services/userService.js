const API_URL = import.meta.env.VITE_API_URL

export const userService = {
  async fetchUsers() {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    return response.json()
  }
}
