const Login = () => {

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='shadow-2xl max-w-[460px] rounded-2xl p-5'>
                <div>
                    <h1 className='text-2xl font-semibold text-center'>Uygulamayı kullanabilmek için lütfen <span className='text-anarenk'>giriş</span> yapınız!</h1>
                </div>
                <form action="">
                    <div>
                        <label className='text-sm'>Kullanıcı Adı</label>
                        <div className='relative'>
                            <input type="text" className='w-full py-3 outline-none border-b border-b-gray-600' placeholder='Kullanıcı Adınızı Giriniz!' />
                            <div className='absolute bottom-2 right-6 text-gray-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div>
                        <label className='text-sm'>Şifre</label>
                        <div className='relative'>
                            <input type="text" className='w-full py-3 outline-none border-b border-b-gray-600' placeholder='Şifrenizi Giriniz!' />
                            <div className='absolute bottom-2 right-6 text-gray-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>


                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-anarenk w-full mt-5 p-4 text-white font-semibold'>Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login