import * as tap from 'tap'
import { createClient } from '../lib/client.js'

tap.test('create client', async (t) => {
  const client = await createClient('<some url>')

  console.log(client)

  t.pass('ok')
  t.end()
})
