const axios = require('axios');
let data = JSON.stringify({
    "email": "omeluan.dima@gmail.com",
    "user_metadata": {},
    "blocked": false,
    "email_verified": false,
    "app_metadata": {},
    "given_name": "Dmytro",
    "family_name": "Omelian",
    "name": "Dmytro",
    "nickname": "dichikk",
    "connection": "Username-Password-Authentication",
    "password": "Password123#",
    "verify_email": false
});

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://dev-n4teucisb6fhmmg7.us.auth0.com/api/v2/users',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkRnTmh5c3NKdTY2WW0tOWpacmc5QyJ9.eyJpc3MiOiJodHRwczovL2Rldi1uNHRldWNpc2I2ZmhtbWc3LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiIxcENhbGk1S2I3YktzUzVPMGhEczh1UXRFcFduaG84T0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtbjR0ZXVjaXNiNmZobW1nNy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY5NzY5NzE4NCwiZXhwIjoxNjk3NzgzNTg0LCJhenAiOiIxcENhbGk1S2I3YktzUzVPMGhEczh1UXRFcFduaG84TyIsInNjb3BlIjoicmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.WdgfSgErmwZbJxX8Y1pO6SNuhoeEFnXr9WZASHrJ-WDFKZ6NFmKo4VMO2oiIkto5nhg5WRKLqGtHjyrw33coHoalnGWWEPjJvTiEqOyrPp-HFQFFRELS2uxA-G6Q95M63CGAp4UW1WplPPbeNp1twiHv7poD6IQ42a7DoksUwHuRtoiK6zVbZIlBwzsDRevoKxeHEnEsFPN-WtNBwRWzeCjIcKpjauNl8MddzwqPq8TLtuUIoSsJuGlvVT9modDhECTr_4BLgGIdAAlvgHVdZ9ejfXSbCbmucceBGSAS5CxMuxyZ1ywIo_0x1C5YtLbXToMbz34as-PheUtIx4zaiw'
    },
    data: data
};

axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });
