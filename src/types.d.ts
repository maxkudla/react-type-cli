interface Configuration {
    rootState?: string

    componentsPath?: string
    ducksPath?: string

    actionsPath?: string
    reducersPath?: string

    withSaga?: boolean
    sagasPath?: string

    withReselect?: boolean
    selectorsPath?: string

    initialState?: any
}

interface GenerateComponentCommand {
    stories?: boolean
    functional?: boolean
    memo?: boolean
    connect?: boolean
    global?: boolean
    styled?: boolean
}

interface GenerateComponentArgs extends Configuration, GenerateComponentCommand{
    name: string
}

interface CreateDuckCommand {
    reselect?: boolean
    saga?: boolean
}

interface CreateDuckArgs extends Configuration, CreateDuckCommand{
    name: string
    ducksPath?: string
}

interface CreateActionCommand {
    saga?: boolean
    reducer?: boolean
    payload?: boolean
    error?: boolean
}

interface CreateActionArgs extends Configuration, CreateActionCommand{
    name: string
    duckName: string
}
