declare module pointer {
    export interface StaticApi extends Api {
        (object: any): Api;
        (object: any, pointer: string): string;
        (object: any, pointer: string, value: any): void;
    }

    export interface Api {
        get(object: any, pointer: string): any;
        set(object: any, pointer: string, value: any): void;
        remove(object: any, pointer: string): void;
        dict(object: any): { [pointer: string]: any };
        walk(object: any, iterator: (pointer: string, value: any) => any): void;
        has(object, pointer: string): boolean;
        escape(str: string): string;
        unescape(str: string): string;
        parse(pointer: string): string[];
        compile(tokens: string[]): string;
    }
}

declare var pointer: pointer.StaticApi;

export = pointer;