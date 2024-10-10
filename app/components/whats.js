import Image from "next/image"

export default function Whats(){
    return (
        <a href="https://wa.me/5554992005646" target="_blank" className="fixed bottom-5 right-5 z-10">
            <div className="transform transition duration-300 ease-in-out hover:scale-110">
                <Image src="/icons/whatsapp.webp" alt="WhatsApp" width={64} height={64} />
            </div>
        </a>
    )
}