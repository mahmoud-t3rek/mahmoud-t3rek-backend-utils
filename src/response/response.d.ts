export declare const success: <T>(data: T, message?: string, statusCode?: number) => {
    success: boolean;
    message: string;
    data: T;
    statusCode: number;
};
export declare const fail: (message?: string, statusCode?: number, data?: any) => {
    success: boolean;
    message: string;
    data: any;
    statusCode: number;
};
//# sourceMappingURL=response.d.ts.map