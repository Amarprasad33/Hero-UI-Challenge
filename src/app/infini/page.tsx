"use client"
import dynamic from 'next/dynamic';

// Use dynamic import to load the KonvaCanvas component only on the client side
const KonvaCanvas = dynamic(() => import('@/components/custom/KonvaCanvas'), {
    ssr: false, // This is the key to preventing server-side rendering
});


export default function Infini() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-bold mb-8">Inferno AI</h1>
            {/* The canvas will be rendered here */}
            <KonvaCanvas />

            <p className="mt-8 text-gray-600">
                Next step: Implement panning and zooming.
            </p>
        </main>
    )
}