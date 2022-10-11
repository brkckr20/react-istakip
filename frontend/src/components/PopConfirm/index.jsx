import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const PopConfirm = () => {
    return confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='custom-ui'>
                    <h1 className='font-bold text-xl'>Çıkış yapmak istediğinize emin misiniz?</h1>
                    <div className='flex justify-center gap-x-3 py-4'>

                        <button onClick={onClose} className="bg-green-800 p-2 text-white">Hayır</button>
                        <button className="bg-red-800 p-2 text-white"
                            onClick={() => {
                                onClose();
                                console.log("first")
                            }}
                        >
                            Evet
                        </button>
                    </div>
                </div>
            );
        }
    });
}

export default PopConfirm
