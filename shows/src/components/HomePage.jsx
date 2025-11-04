import React from 'react';


export default function HomePage() {
return (
<div className="min-h-screen bg-black flex flex-col items-center justify-center">
<header className="text-[#6B0000] text-5xl font-bold mb-8">
Welcome to Tourdb
</header>
<p className="text-white text-lg max-w-xl text-center">
Texto introdudorio, slogan

</p>
<div className="grid grid-cols-3 gap-8 mt-12 w-4/5 max-w-6xl">
{[...Array(6)].map((_, index) => (
<div key={index} className="flex flex-col items-center bg-gray-900 rounded-lg p-4 transition-transform hover:scale-105">
<div className="w-48 h-48 bg-gray-800 rounded-lg mb-4">
{/* Image placeholder */}
<img
src="/placeholder.jpg"
alt="Slot placeholder"
className="w-full h-full object-cover rounded-lg"
/>
</div>
<h3 className="text-white text-xl font-semibold">Slot {index + 1}</h3>
</div>
))}
</div>
</div>
);
}