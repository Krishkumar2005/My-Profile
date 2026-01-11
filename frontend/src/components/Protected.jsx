import { useEffect, useState } from "react";
import { auth } from "../services/api";


export default function Protected({ children }) {
    const [response, setResponse] = useState({message: "Unauthorized"})
    let [secret, setSecret] = useState("")
    const [error, setError] = useState("")
    useEffect(() => {
        auth(secret)
            .then(res => {
                setResponse(res);
                setError("");
            })
            .catch(err => {
                setResponse({ message: "Unauthorized" });
            });

    }, [])

    const handleAuthCheck = async (e) => {
        e.preventDefault()
        const trimmedSecret = secret.trim()
        console.log(trimmedSecret, typeof trimmedSecret)

        await auth(secret)
            .then(res => {
                setResponse(res);
                setError("");
            })
            .catch(err => {
                setError("Wrong Secret Key");
                setResponse({ message: "Unauthorized" });
            });
    }

    if (response.message == "Unauthorized") {

        return (
            <div className="fixed inset-0 flex items-center justify-center z-40">
                <div className="bg-white rounded-xl shadow-lg max-w-md p-6">
                    <h1 className="text-xl font-semibold text-black">Enter Your Secret</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Please Provide Your Secret Key To Access Admin Editable Features
                    </p>
                    <form onSubmit={handleAuthCheck} className="mt-4">
                        <input
                            autoFocus
                            type="password"
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                            className="w-full border border-gray-200 rounded-md px-3 py-2 outline-green-500 placeholder-gray-400"
                            placeholder="Your Secret"
                        />
                        <button
                            type="submit"
                            className="block ml-auto mt-3 px-4 py-1.5 rounded-full bg-green-500 text-white font-medium cursor-pointer">
                            Continue
                        </button>
                    </form>
                    {error ? <p className="text-red-500">{error}</p> : ""}
                </div>
            </div>
        )

    }

    return children
}
