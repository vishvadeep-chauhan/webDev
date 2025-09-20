const accountId = 1152356
let accountEmail = "vishvadeepsinghchauhan@gmail.com";
var accountPassword = "231231"
accountCity = "Noida";

// accountId = 2. // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "delhi"

console.log(accountId);


console.table([ accountId, accountEmail, accountPassword, accountCity ]);

// Prefer not to use 'var' because of block scope issues; use 'let' and 'const' instead.

