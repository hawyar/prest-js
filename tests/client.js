import * as tap from 'tap'
import { createClient } from '../lib/client.js'

tap.test('create client', (t) => {
  const client = createClient('http://localhost:8080')

  console.log(client)
  t.end()
})

tap.test('create client', async (t) => {
  const local = 'http://localhost:3000'

  const client = createClient(local)

  const { data, error } = await client.from('weather').select('*')

  if (error) {
    t.fail(error)
  }

  console.log(data)

  t.pass('ok')
  t.end()
})
