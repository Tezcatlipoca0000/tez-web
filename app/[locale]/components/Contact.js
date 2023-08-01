export default function Contact() {
    return (
        <div className="w-10/12 my-14">
            <h2>
                Contact
            </h2>
            <form className="p-4 bg-slate-600 border">
                <div className="w-5/12 flex justify-center items-center border mb-6">
                    <label className="w-4/12 text-center">
                        Email:
                    </label>
                    <input className="w-full bg-slate-100" />
                </div>
                <div className="flex justify-between">
                    <textarea className="w-[49%] h-72 border bg-slate-100" placeholder="Personalized Message" />
                    <div className="relative w-[49%] h-72 border bg-slate-100">
                        <button className="absolute right-5 bottom-5">
                            Add Features
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-end mr-4">
                    <button>
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}