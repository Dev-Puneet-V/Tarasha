interface User {
    _id?: string;
    email?: string;
    name?: string;
}


interface AuthContextType {
    isAuthModalOpen: boolean;
    isAuthenticated?: boolean;
    openAuthModal: () => void;
    closeAuthModal: () => void;
    handleAuthentication: () => void;
    user: User;
    setUser: ({...params}) => void;
}

export type {
    AuthContextType
}