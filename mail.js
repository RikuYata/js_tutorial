// emailを＠の手前で分割
function emailParts(mail) {
    let mailContent = mail.toLowerCase();
    return mailContent.split('@');
}