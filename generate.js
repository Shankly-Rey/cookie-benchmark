// requires
const aes256 = require("aes256")
const sqllib = require("./lib/sql")

// funcs
function genrandstring(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function rng(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

// logic

for(var i=0; i < 2000; i++) {
    var newCookie = "pscYTnL5XBG49HHkeDNOLF1xxr6uhxIhWh1ZbMYxZS83rlZD7STAauLl6zbvbjIjs4RSuDhc9tVEacsivLfI93J7YZPnk8c9YJPFUe8yqQmOGaSZa95aEuPMgaGW54OSmsh9VuTwZ05NK9xUlkaFhYwkzfDZcl5R1CBWVVd8xRiqd0JnD2yq"
    var cookieEncrypted = aes256.encrypt(newCookie, "Authenticated")

    sqllib.Query("INSERT INTO cookies (uid, cookie) VALUES(?, ?)", [rng(1, 1000000000), cookieEncrypted])
}