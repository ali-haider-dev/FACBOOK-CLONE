import React from 'react'
import Image from "next/image"
function Header() {
    return (
        <div>
            <h1>Header</h1>
            {/* left */}
            <div>
                <Image src="data:image/png;base64,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"
                    alt="facebook"
                    width={40}
                    height={40}
                    layout="fixed"
                />
            </div>
            <div>
                <input type="text" placeholder="Facebook Search" />
            </div>
        </div>
    )
}

export default Header
