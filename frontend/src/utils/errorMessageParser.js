export default function errorMessageParser(code) {
    switch (code) {
        case "auth/user-not-found":
            return "Kullanıcı bulunamadı, bilgileri kontrol ediniz!"
        default:
            return code;
    }
}