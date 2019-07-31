interface CommandDto {
    functional: string,
    memo: string,
    withConnect: string,
    global: string,
}

interface Args {
    name: string,
    functional?: boolean,
    global?: boolean,
    memo?: boolean,
    withConnect?: boolean,
    rootState?: string,
    globalComponentPath?: string,
}
