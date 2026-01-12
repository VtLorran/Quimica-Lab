import { CheckIcon } from "lucide-react";

function Check({label}) {
    return (
        <div className="bg-white shadow-xl w-full py-4 items-center px-2 gap-2 flex rounded-xl">
            <CheckIcon className="text-green-700"/>
            <p>{label}</p>
        </div>
    )
}

export default Check;