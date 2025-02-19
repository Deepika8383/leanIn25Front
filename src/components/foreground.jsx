export const Foreground=({children})=>{
    return(
        <div className="relative bg-slate-50 max-w-5xl h-full mx-auto min-h-[90vh] overflow-y-scroll scrollbar-none px-12 py-6 my-8 rounded z-10">
            {children}
        </div>
    )
}