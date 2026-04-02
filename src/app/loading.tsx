export default function Loading() {
  return (
    <div className="relative min-h-screen bg-[#0a0e27] flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Spinning orbital ring */}
        <div className="relative flex items-center justify-center w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
          <div className="absolute inset-0 rounded-full border-t-2 border-purple-400 animate-spin" />
          <div className="absolute inset-2 rounded-full border-t-2 border-pink-400 animate-spin [animation-duration:1.5s] [animation-direction:reverse]" />
          <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
        </div>

        {/* Label */}
        <div className="space-y-1">
          <p className="text-lg cosmic-text">Loading</p>
          <p className="text-sm text-slate-500 tracking-widest uppercase">
            Launching into orbit&hellip;
          </p>
        </div>
      </div>
    </div>
  );
}
