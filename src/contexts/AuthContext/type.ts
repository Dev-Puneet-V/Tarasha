interface AuthContextType {
    isAuthModalOpen: boolean;
    isAuthenticated?: boolean;
    openAuthModal: () => void;
    closeAuthModal: () => void;
    handleAuthentication: () => void;
}

export type {
    AuthContextType
}