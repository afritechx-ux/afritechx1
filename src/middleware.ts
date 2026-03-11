import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: '/login',
    },
});

export const config = {
    matcher: [
        "/client-portal-dashboard-overview/:path*",
        "/client-portal-document-repository/:path*",
        "/client-portal-billing-invoices/:path*",
    ],
};
