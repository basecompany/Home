export class LoggerService implements I_LoggerService{
    route = '/logger/home';
    apiUrl = import.meta.env.VITE_API_URL + this.route;

    async log() : Promise<T_LogReturn>{
            const res = await fetch(this.apiUrl);
            if (!res.ok) throw new Error(`Error ${res.status} in logging action: ${res.statusText}`);
            const json = res.json();
            return json;
    }
}



export interface I_LoggerService{
    apiUrl: string;
    log:()=>Promise<T_LogReturn>;
}


export type T_LogReturn = { status: string, message: string } | { err: Error, action: string };