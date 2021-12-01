import * as tap from 'tap'
import { createClient } from '../lib/client.js'

tap.test('create client', (t) => {
  const client = createClient('https://test-prest.herokuapp.com/d1tqus2eh0rb7b')

  t.ok(client, 'client created')
  t.end()
})

tap.test('select *', async (t) => {
  //   const local = 'http://localhost:3000'
  const heroku = 'https://test-prest.herokuapp.com/d1tqus2eh0rb7b' // for now we include the specific db on heroku

  const wanted = [
    { city: 'Chicago', temp: 22 },
    { city: 'Oakland', temp: 34 },
  ]

  const client = createClient(heroku)

  const { data, error } = await client.from('weather').select('*')

  if (error) {
    t.fail(error)
  }

  t.same(data, wanted)

  t.pass('ok')
  t.end()
})
