function validateEmailName(name){
    if(name.length < 3 )
        return "El nombre del correo debe ser de mínimo 3 caracteres";
    if(!(/^[A-Za-z0-9\.]+$/).test(name))
        return "En el correo sólo se permiten caracteres del alfabeto inglés, dígitos y puntos (.)";
    return false;
}
function validateEmailDomain(domain){
    if (domain.length < 3)
        return "El domino del correo electrónico debe contener al menos 3 caracteres";
    if (!/^([a-zA-Z0-9]\.[a-zA-Z0-9])+$/.test(domain))
        return "El dominio del correo electrónico debe corresponder al formato x.x";
    return false;
}
module.exports = {
    validateName: name => {
        if (name.length < 3)
            return "El nombre debe contener al menos 3 caracteres";
        if (name.length > 30)
            return "El nombre debe contener como máximo 30 caracteres";
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜïÏ ]$/.test(name))
            return "El nombre sólo puede contener caracteres correspondientes al alfabeto español";
    },
    validatePassword: password => {
        if (password.length < 10)
            return "La contraseña debe contener al menos 10 caracteres";
        if (password.length > 80)
            return "La contraseña debe contener como máximo 80 caracteres";
    },
    validateEmail: email => {
        if (email.length < 5)
            return "El correo electrónico debe contener al menos 5 caracteres";
        if (email.length > 50)
            return "El correo electrónico puede contener como máximo 50 caracteres";
        const splitted_email = email.split('@');
        if (splitted_email.length > 2)
            return "El correo electrónico sólo puede contener un @";
        if (splitted_email_.length == 1)
            return "El correo electrónico debe contener un @";
        const invalid_email_name = validateEmailName(splitted_email[0]);
        if (invalid_email_name)
            return invalid_email_name;
        const invalid_emain_domain = validateEmailDomain(splitted_email[1]);
        if (invalid_emain_domain)
            return invalid_emain_domain;
    }
};
