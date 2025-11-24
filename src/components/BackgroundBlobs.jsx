export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 -z-10">
      <div className="absolute top-20 left-10 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
}
