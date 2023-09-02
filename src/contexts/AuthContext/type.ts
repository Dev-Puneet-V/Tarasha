interface AuthContextType {
    isAuthModalOpen: boolean;
    isAuthenticated: boolean;
    openAuthModal: () => void;
    closeAuthModal: () => void;
}

export type {
    AuthContextType
}