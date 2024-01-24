import { defineStore } from 'pinia';
interface TokenState {
    token: string | null;
}

export const useAuthStore = defineStore({
    id: 'tokenStore',
    state: (): TokenState => ({
        token: null,
    }),
    getters: {
        getToken(): string | null {
            return this.token;
        },
    },
    actions: {
        setToken(token: string): void {
            this.token = token;
        },
        logout() {
            this.token = null
        }
    }
})
