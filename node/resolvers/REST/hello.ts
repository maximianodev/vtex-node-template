import { UserInputError } from '@vtex/api'

export async function hello(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  const { any } = params

  if (!any) {
    throw new UserInputError('params is required')
  }

  ctx.body = `Hello ${any}`

  await next()
}
