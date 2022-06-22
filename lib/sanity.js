import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '3wdlx5s1',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skW2iPTv79WmdQLU0OX6Wa3OzLJsLL1wbfv19RZfL5yNxpzZGJWLcw2SiF0O58DKErFsVMYfUlaxIuS007sx0HpzJwzfX5uQKlKMPb2pYj1Bbs2pNgLrDSswlCgUa4Iva2A1qIhurhtcvTEVPy2ZiYHFwJ5953WcWVSXuQpOGbSGLk7zrXFu',
    useCdn: false,
})  