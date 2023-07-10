
import Typewriter from "typewriter-effect";


export default function Typewrite () {
    return (
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
    )
}