import React from 'react'

const BakiyeCard = ({ summary }) => {
    return (

        <>
            {
                summary() !== 0 ? (
                    <div className={`${summary() > 0 ? 'bg-green-700' : 'bg-red-700'} text-white px-2 py-4`}>
                        {
                            summary() > 0 ? summary() + ' tl alacak' : summary() + ' TLborç'
                        }
                    </div>
                ) : (
                    <div className={`bg-white text-black px-2 py-4`}>
                        Alacak veya borç bulunmamaktadır.
                    </div>
                )
            }

        </>
    )
}

export default BakiyeCard