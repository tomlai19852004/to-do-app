export type Entity<T> = {
    [K in keyof T]: T[K];
}

export type Duty = Entity<{
    id: string;
    name: string;
    deleted: boolean;
    created_at: number;
    modified_at: number;
}>;

export type DutyPayload = Entity<{
    name: string;
}>;

export type ActionResponse = Entity<{
    message: string;
}>;