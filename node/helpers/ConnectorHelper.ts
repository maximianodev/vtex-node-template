import type { IOContext } from '@vtex/api'
import { Apps } from '@vtex/api'

export function getAppSettings(ctx: IOContext): Promise<AppSettings> {
  return new Promise((resolve, reject) => {
    const apps = new Apps(ctx)

    return apps
      .getAppSettings('maxstore.service-example')
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
