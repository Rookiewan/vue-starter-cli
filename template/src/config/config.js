const configDev = {
  routerBase: '/'
}
const configQas = {
  routerBase: '/'
}
const configProd = {
  routerBase: '/'
}

let config = null
switch (process.env.NODE_ENV) {
  case 'qas':
    config = configQas
    break
  case 'production':
    config = configProd
    break
  default:
    config = configDev
}

export default config
