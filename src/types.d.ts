interface GenerateComponentCommand {
    functional: string
    memo: string
    withConnect: string
    global: string
}

interface GenerateComponentArgs {
    name: string
    functional?: boolean
    global?: boolean
    memo?: boolean
    withConnect?: boolean
    rootState?: string
    globalComponentPath?: string
}

interface CreateDuckCommand {
    reselect: string
    saga: string
}

interface CreateDuckArgs {
    name: string
    reselect?: boolean
    saga?: boolean
    ducksPath?: string
}

interface CreateActionCommand {
    noReducer: string
    payload: string
    error: string
}

interface CreateActionArgs {
    name: string
    noReducer: boolean
    payload: boolean
    error: boolean
    duckName: string
    ducksPath?: string
}
