import type {I_LoggerService} from "../services/LoggerService/LoggerService.ts";

export class LoggerHandler{
    service: I_LoggerService

    constructor(service: I_LoggerService) {
        this.service = service;
    }

    async log(){
        return await this.service.log();
    }
}