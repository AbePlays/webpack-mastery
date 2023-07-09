const VALID_ENVS = ['dev', 'prod', 'preprod', 'qa']

function validateEnvironment(env) {
  if (VALID_ENVS.includes(env)) return true
  throw new Error(`Environment "${env}" does not exist.`)
}

module.exports = { validateEnvironment, VALID_ENVS }
