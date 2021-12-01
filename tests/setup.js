import { execSync } from 'child_process'

// TODO: setup with github action
function setup() {
  return new Promise((resolve, reject) => {
    try {
      const wanted = 'tests_prest_1'

      // check if instance is running
      const running = execSync(`docker ps --filter "name=${wanted}"`).toString()

      const prest = running
        .split(' ')
        .filter((e) => e !== '')
        .map((e) => e.replace('\n', ''))

      const found = prest[prest.length - 1]

      if (found !== wanted) {
        // instance not found, try to start containers quietly in the background
        execSync(`npm run compose:up`)
      }

      // instance found, continue
      resolve()
    } catch (err) {
      reject(err)
    }
  })
}

setup()
  .then(() => process.exit(0))
  .catch((err) => console.error(`error running test setup script: \n ${err}`))
