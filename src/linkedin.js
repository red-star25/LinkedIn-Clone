import {clientId} from "./keys"

export const authEndpoint = "https://www.linkedin.com/oauth/v2/authorization"

const redirectUri = "http%3A%2F%2Flocalhost%3A3000"




export const getAuthCode = ()=>{
    return  window.location.search.split("=")[1]
}

export const loginUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`