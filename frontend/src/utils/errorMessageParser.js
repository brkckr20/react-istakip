export default function errorMessageParser(code) {
    switch (code) {
        case "auth/user-not-found":
            return "Kullanıcı bulunamadı, bilgileri kontrol ediniz!"
        case "auth/invalid-password":
            return "Şifreniz hatalı, kontrol ediniz!"
        default:
            return code;
    }
}