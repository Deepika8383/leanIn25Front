import { Foreground } from "./foreground";

export const Background=({children})=>{
    return(
        <div className="bg-green1bg overflow-auto h-screen w-full">
            {children}
        </div>
    );
}