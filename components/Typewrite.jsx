
import Typewriter from "typewriter-effect";


export default function Typewrite() {
    return (
        <div className="lg:text-6xl md:text-5xl text-5xl font-cutive mx-auto mt-40 text-gray-50 mb-10">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("黒白の手紙")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Kokuhaku No Tegami")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Anonymous Messages")
                        .start();
                }}
            />
        </div>
    )
}