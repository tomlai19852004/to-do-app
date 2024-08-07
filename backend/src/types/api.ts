type Entity<T> = {
    [K in keyof T]: T[K];
}

export type Duty = Entity<{
    id: string;
    name: string;
    deleted: boolean;
    created_at: number;
    modified_at: number;
}>;

export type NewDuty = Entity<{
    name: string;
}>;