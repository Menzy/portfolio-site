import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Store - Coming Soon",
    description: "Our store is launching soon. Stay tuned for amazing products!",
};

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}