export interface Button {
    getName?(): string;
    setName?(name: string): void;
    getValue?(): boolean;
    setValue?(value: boolean): void;
}
