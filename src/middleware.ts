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
        "/client-portal-finance-overview/:path*",
        "/client-portal-project-milestones/:path*",
        "/client-onboarding-checklist-overview/:path*",
        "/portal-notifications-center/:path*",
        "/portal-user-settings-customization/:path*",
        "/detailed-invoice-view/:path*",
        "/payment-success-confirmation/:path*",
    ],
};
