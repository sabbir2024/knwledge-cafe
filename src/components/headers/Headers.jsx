

const Headers = () => {
    return (
        <div className="flex justify-between items-center py-3 px-6 border-b-2">
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <div className="">
                <div className="relative group ">
                    <img className="size-[60px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                    <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                </div>
            </div>
        </div>
    );
};

export default Headers;