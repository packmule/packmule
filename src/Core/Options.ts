export default interface Options {
    mode?: 'development' | 'production' | 'none',
    root?: string;
    optimize?: boolean;
    extract?: boolean;
    notify?: boolean;
    watch?: boolean;
    lint?: boolean;
    debug?: boolean;
    cache?: boolean;
    hash?: boolean;
}
