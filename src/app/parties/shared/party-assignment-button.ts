import { Button } from './button';

export class GuideAssignmentButton implements Button {
    private name: string;
    private value: boolean;

    public constructor() {
        this.name = 'Assign guide';
        this.value = false;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getValue(): boolean {
        return this.value;
    }

    public setValue(value: boolean): void {
        this.value = value;
    }
}
