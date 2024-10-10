import Image from "next/image"

export default function Whats(){
    return (
        <a href="https://wa.me/5554992005646" target="_blank" className="fixed bottom-5 right-5 z-10">
            <div className="relative w-16 h-16">
                <Image src="/icons/whatsapp.webp" alt="WhatsApp" fill/>
            </div>
        </a>
    )
}