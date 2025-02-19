import { Foreground } from "./foreground";

export const Background=({children})=>{
    return(
        <div className="fixed bg-bgcolor inset-0 overflow-auto z-0">
            {children}
        </div>
    );
}