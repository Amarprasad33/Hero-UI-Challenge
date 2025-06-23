export default function ColorSystem() {
    return (
        <div className="min-h-screen flex flex-col bg-white w-full text-black">
            <div className="flex flex-col">
                <div className="flex items-end">
                    <h1 className="text-3xl">Primary color</h1>
                    <span className="text-zinc-400">primary</span>
                </div>
                <div className="sub-head">Main colors for your product brand (button, interaction, etc)</div>
                <div className="flex gap-3">
                    {/* btn representing the color*/}
                    <div className="flex items-center gap-2 hover:bg-zinc-100 hover:cursor-pointer border border-black rounded-[2px] text-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.9)]">
                        <span>primary-base</span>
                        <span className="w-4 h-4 border border-black rounded-full bg-sky-300"></span>
                        <div className="flex gap-2">
                            <span className="uppercase">0ea5e9</span>
                            <span className="">-</span>
                            <span className="">sky 500</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}