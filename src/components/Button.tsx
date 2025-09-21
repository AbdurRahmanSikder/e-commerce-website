export default function Button({content} : {content : string}) {
    return (
        <button className="group px-8 py-2.5 border-2 border-black rounded-lg text-black cursor-pointer active:scale-95 transition duration-300 hover:bg-amber-100">
            <p className="relative h-6 overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">{content}</span>
                <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-100%]">Show more</span>
            </p>
        </button>
    );
};