import fetch from 'cross-fetch'

/**
 * @description Client class that handles requests to the pREST instance
 * @class Client
 * @param {string} url - url of the prest instance
 *
 */
class Client {
  constructor(url) {
    this.url = new URL(url)
    this.isofetch = fetch // isomorphic fetch
    this.defaults = {
      'Content-Type': 'application/json',
    }
    this.auth = {}
    this.query = {
      pageSize: 10,
      count: false,
      renderer: 'json', // api render syntax, could be one of: json, xml
      from: '',
      select: '',
      database: '',
      schema: 'public',
      distinct: false,
      order: '',
      groupBy: '',
    }
  }

  /**
   * @description Defines the columns to select from
   * @param {string} query - search query to execute
   *
   */
  select(query) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof query !== 'string') {
          reject({
            data: null,
            error: `column name must be a string: given: ${typeof query}`,
          })
        }

        if (query === '*') {
          this.query.select = query

          // TODO: move url construtor to a separate function
          const urlCall = () =>
            this.url.href + '/' + this.query.schema + '/' + this.query.from

          // TODO: having issue conencting to db, for now just get schemas
          this.request({
            url: urlCall(),
            method: 'GET',
          }).then((res) => {
            resolve({
              data: res.data,
              error: null,
            })
          })
        } else {
          resolve({
            data: null,
            error: 'only testing `select *` for now',
          })
        }
      } catch (err) {
        reject({
          data: null,
          error: `error querying ${query}: \n ${err}`,
        })
      }
    })
  }

  /**
   * @description Exectues given query
   */
  request(props) {
    return new Promise((resolve, reject) => {
      try {
        this.isofetch(props.url, {
          method: props.method,
          headers: {
            ...this.defaults,
          },
        })
          .then((res) => {
            if (!res.ok) {
              resolve({
                data: null,
                error: `error querying ${this.query.from}: \n ${res.status}`,
              })
            }

            return res.json()
          })
          .then((result) => {
            resolve({
              data: result,
              error: null,
            })
          })
      } catch (e) {
        reject({
          data: null,
          error: e,
        })
      }
    })
  }

  /**
   * @description pREST generates JWT token for authentication
   *
   */
  auth() {}

  /**
   * @description Gets the metadata for a table
   * pREST endpoint: /show/{DATABASE}/{SCHEMA}/{TABLE}
   *
   * @returns {Promise} - resolves with metadata
   */
  meta() {}

  //   /**
  //    * @description Inserts data into a table
  //    * @param {string} payload - data to insert
  //    *
  //    */
  //   insert(payload) {}

  /**
   * @description Defines the table to query from
   * @param {string} table - table to operate query on
   *
   */
  from(table) {
    if (typeof table !== 'string') {
      return {
        data: null,
        error: 'query must be a string',
      }
    }
    this.query.from = table
    return this
  }
}

/**
 * @description Creates a new client instance
 * @param {string} url - url of the prest instance
 * @returns {Promise} - returns a new client instance
 *
 * @example
 * 		import { createClient } from '../lib/client.js'
 * 		const client = await createClient('http://localhost:3000')
 */
function createClient(url, options) {
  if (typeof url !== 'string' || url.length === 0)
    throw new Error('invalid pREST url')

  const client = new Client(url, options)

  return client
}

export { createClient }
