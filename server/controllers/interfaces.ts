import { Request, Response } from 'express'

export type Controller<T extends string> = {
  [key in T]: (req: Request, res: Response) => void
}
