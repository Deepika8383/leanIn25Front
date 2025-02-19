export const Navbar=({setCurrentPage,currentPage})=>{
    return(
        <div className="relative z-10">
            <div className="flex gap-8">
                <a href="" className="text-secondary2 font-semibold">Home</a>
                <a href="" className="text-secondary2 font-semibold">Shop</a>
                <a href="" className="text-secondary2 font-semibold">About</a>
                <a href="" className="text-secondary2 font-semibold">Contacts</a>
            </div>
            {/*<hr className="bg-secondary2 h-[0.3vh] mt-2"/>*/}
        </div>
    )
}
