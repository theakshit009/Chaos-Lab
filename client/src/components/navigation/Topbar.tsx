const Topbar = () => {
  return (
    <header className="h-12 border-b border-zinc-800 flex items-center justify-between px-8">
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        ChaosLab
      </span>
      <div className="flex items-center gap-2 text-xs">
        <span className="text-zinc-500">Status:</span>
        <span className="flex items-center gap-1 text-emerald-400 font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          RUNNING
        </span>
      </div>
    </header>
  );
};

export default Topbar;
