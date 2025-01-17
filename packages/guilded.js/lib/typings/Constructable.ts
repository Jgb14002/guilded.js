// Adapted from https://github.com/discordjs/discord.js/blob/master/typings/index.d.ts#L2051

/**
 * @internal
 */
export type Constructable<T> = new (...args: any[]) => T;
