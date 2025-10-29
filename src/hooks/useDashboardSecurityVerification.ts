export interface I_CookieVerification {
    authenticated: boolean;
}

export interface I_CookieToken{
    token: string;
}

export const useDashboardSecurityVerification = () => {

    // STEP 1
    const verifyCookie = async()  => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/check-auth`, {method: "GET", credentials: "include"})
        const data: I_CookieVerification = await res.json();
        return data.authenticated;
    }

    // STEP 2
    const fetchTokenWithCookie = async() :Promise<string>  => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/api/auth/token`, {method: "GET", credentials: "include"})
        const data:I_CookieToken = await res.json();
        return data.token;
    }

    // STEP 3
    const fetchGoogleAccount = async(token: string) :Promise<any> => {
        const res = await fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", { headers: { Authorization: `Bearer ${token}` } })
        if (!res.ok) throw Error(` Google Api ${res.status} Code : ${res.statusText}` )
        return await res.json();
    }

    return {verifyCookie,fetchTokenWithCookie,fetchGoogleAccount}
}
