
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model ad_cliente
 * 
 */
export type ad_cliente = {
  id: number
  nome: string
  apelido: string | null
  codigo: string | null
  registro: string | null
  reg_est: string | null
  email: string | null
  telefone: string | null
  celular: string | null
  fax: string | null
  ed_logr: string | null
  ed_numero: string | null
  ed_compl: string | null
  ed_bairro: string | null
  ed_cidade: string | null
  ed_estado: string | null
  contato: string
  id_cargo: number | null
  id_banco: number | null
  ag_banco: string | null
  ag_dig_banco: string | null
  conta_banco: string | null
  conta_dig_banco: string | null
  cod_tit_banco: string | null
  logo: number | null
  id_forma_pagto: number | null
  dt_cad: Date | null
  dh_inc: Date | null
  id_usu_inc: number | null
  id_usu_alt: number | null
  id_plano: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ad_clientes
 * const ad_clientes = await prisma.ad_cliente.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ad_clientes
   * const ad_clientes = await prisma.ad_cliente.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.ad_cliente`: Exposes CRUD operations for the **ad_cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ad_clientes
    * const ad_clientes = await prisma.ad_cliente.findMany()
    * ```
    */
  get ad_cliente(): Prisma.ad_clienteDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.0
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    ad_cliente: 'ad_cliente'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ad_cliente
   */


  export type AggregateAd_cliente = {
    _count: Ad_clienteCountAggregateOutputType | null
    _avg: Ad_clienteAvgAggregateOutputType | null
    _sum: Ad_clienteSumAggregateOutputType | null
    _min: Ad_clienteMinAggregateOutputType | null
    _max: Ad_clienteMaxAggregateOutputType | null
  }

  export type Ad_clienteAvgAggregateOutputType = {
    id: number | null
    id_cargo: number | null
    id_banco: number | null
    logo: number | null
    id_forma_pagto: number | null
    id_usu_inc: number | null
    id_usu_alt: number | null
    id_plano: number | null
  }

  export type Ad_clienteSumAggregateOutputType = {
    id: number | null
    id_cargo: number | null
    id_banco: number | null
    logo: number | null
    id_forma_pagto: number | null
    id_usu_inc: number | null
    id_usu_alt: number | null
    id_plano: number | null
  }

  export type Ad_clienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    apelido: string | null
    codigo: string | null
    registro: string | null
    reg_est: string | null
    email: string | null
    telefone: string | null
    celular: string | null
    fax: string | null
    ed_logr: string | null
    ed_numero: string | null
    ed_compl: string | null
    ed_bairro: string | null
    ed_cidade: string | null
    ed_estado: string | null
    contato: string | null
    id_cargo: number | null
    id_banco: number | null
    ag_banco: string | null
    ag_dig_banco: string | null
    conta_banco: string | null
    conta_dig_banco: string | null
    cod_tit_banco: string | null
    logo: number | null
    id_forma_pagto: number | null
    dt_cad: Date | null
    dh_inc: Date | null
    id_usu_inc: number | null
    id_usu_alt: number | null
    id_plano: number | null
  }

  export type Ad_clienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    apelido: string | null
    codigo: string | null
    registro: string | null
    reg_est: string | null
    email: string | null
    telefone: string | null
    celular: string | null
    fax: string | null
    ed_logr: string | null
    ed_numero: string | null
    ed_compl: string | null
    ed_bairro: string | null
    ed_cidade: string | null
    ed_estado: string | null
    contato: string | null
    id_cargo: number | null
    id_banco: number | null
    ag_banco: string | null
    ag_dig_banco: string | null
    conta_banco: string | null
    conta_dig_banco: string | null
    cod_tit_banco: string | null
    logo: number | null
    id_forma_pagto: number | null
    dt_cad: Date | null
    dh_inc: Date | null
    id_usu_inc: number | null
    id_usu_alt: number | null
    id_plano: number | null
  }

  export type Ad_clienteCountAggregateOutputType = {
    id: number
    nome: number
    apelido: number
    codigo: number
    registro: number
    reg_est: number
    email: number
    telefone: number
    celular: number
    fax: number
    ed_logr: number
    ed_numero: number
    ed_compl: number
    ed_bairro: number
    ed_cidade: number
    ed_estado: number
    contato: number
    id_cargo: number
    id_banco: number
    ag_banco: number
    ag_dig_banco: number
    conta_banco: number
    conta_dig_banco: number
    cod_tit_banco: number
    logo: number
    id_forma_pagto: number
    dt_cad: number
    dh_inc: number
    id_usu_inc: number
    id_usu_alt: number
    id_plano: number
    _all: number
  }


  export type Ad_clienteAvgAggregateInputType = {
    id?: true
    id_cargo?: true
    id_banco?: true
    logo?: true
    id_forma_pagto?: true
    id_usu_inc?: true
    id_usu_alt?: true
    id_plano?: true
  }

  export type Ad_clienteSumAggregateInputType = {
    id?: true
    id_cargo?: true
    id_banco?: true
    logo?: true
    id_forma_pagto?: true
    id_usu_inc?: true
    id_usu_alt?: true
    id_plano?: true
  }

  export type Ad_clienteMinAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    codigo?: true
    registro?: true
    reg_est?: true
    email?: true
    telefone?: true
    celular?: true
    fax?: true
    ed_logr?: true
    ed_numero?: true
    ed_compl?: true
    ed_bairro?: true
    ed_cidade?: true
    ed_estado?: true
    contato?: true
    id_cargo?: true
    id_banco?: true
    ag_banco?: true
    ag_dig_banco?: true
    conta_banco?: true
    conta_dig_banco?: true
    cod_tit_banco?: true
    logo?: true
    id_forma_pagto?: true
    dt_cad?: true
    dh_inc?: true
    id_usu_inc?: true
    id_usu_alt?: true
    id_plano?: true
  }

  export type Ad_clienteMaxAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    codigo?: true
    registro?: true
    reg_est?: true
    email?: true
    telefone?: true
    celular?: true
    fax?: true
    ed_logr?: true
    ed_numero?: true
    ed_compl?: true
    ed_bairro?: true
    ed_cidade?: true
    ed_estado?: true
    contato?: true
    id_cargo?: true
    id_banco?: true
    ag_banco?: true
    ag_dig_banco?: true
    conta_banco?: true
    conta_dig_banco?: true
    cod_tit_banco?: true
    logo?: true
    id_forma_pagto?: true
    dt_cad?: true
    dh_inc?: true
    id_usu_inc?: true
    id_usu_alt?: true
    id_plano?: true
  }

  export type Ad_clienteCountAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    codigo?: true
    registro?: true
    reg_est?: true
    email?: true
    telefone?: true
    celular?: true
    fax?: true
    ed_logr?: true
    ed_numero?: true
    ed_compl?: true
    ed_bairro?: true
    ed_cidade?: true
    ed_estado?: true
    contato?: true
    id_cargo?: true
    id_banco?: true
    ag_banco?: true
    ag_dig_banco?: true
    conta_banco?: true
    conta_dig_banco?: true
    cod_tit_banco?: true
    logo?: true
    id_forma_pagto?: true
    dt_cad?: true
    dh_inc?: true
    id_usu_inc?: true
    id_usu_alt?: true
    id_plano?: true
    _all?: true
  }

  export type Ad_clienteAggregateArgs = {
    /**
     * Filter which ad_cliente to aggregate.
     * 
    **/
    where?: ad_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ad_clientes to fetch.
     * 
    **/
    orderBy?: Enumerable<ad_clienteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ad_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ad_clientes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ad_clientes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ad_clientes
    **/
    _count?: true | Ad_clienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ad_clienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ad_clienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ad_clienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ad_clienteMaxAggregateInputType
  }

  export type GetAd_clienteAggregateType<T extends Ad_clienteAggregateArgs> = {
        [P in keyof T & keyof AggregateAd_cliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAd_cliente[P]>
      : GetScalarType<T[P], AggregateAd_cliente[P]>
  }




  export type Ad_clienteGroupByArgs = {
    where?: ad_clienteWhereInput
    orderBy?: Enumerable<ad_clienteOrderByWithAggregationInput>
    by: Array<Ad_clienteScalarFieldEnum>
    having?: ad_clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ad_clienteCountAggregateInputType | true
    _avg?: Ad_clienteAvgAggregateInputType
    _sum?: Ad_clienteSumAggregateInputType
    _min?: Ad_clienteMinAggregateInputType
    _max?: Ad_clienteMaxAggregateInputType
  }


  export type Ad_clienteGroupByOutputType = {
    id: number
    nome: string
    apelido: string | null
    codigo: string | null
    registro: string | null
    reg_est: string | null
    email: string | null
    telefone: string | null
    celular: string | null
    fax: string | null
    ed_logr: string | null
    ed_numero: string | null
    ed_compl: string | null
    ed_bairro: string | null
    ed_cidade: string | null
    ed_estado: string | null
    contato: string
    id_cargo: number | null
    id_banco: number | null
    ag_banco: string | null
    ag_dig_banco: string | null
    conta_banco: string | null
    conta_dig_banco: string | null
    cod_tit_banco: string | null
    logo: number | null
    id_forma_pagto: number | null
    dt_cad: Date | null
    dh_inc: Date | null
    id_usu_inc: number | null
    id_usu_alt: number | null
    id_plano: number
    _count: Ad_clienteCountAggregateOutputType | null
    _avg: Ad_clienteAvgAggregateOutputType | null
    _sum: Ad_clienteSumAggregateOutputType | null
    _min: Ad_clienteMinAggregateOutputType | null
    _max: Ad_clienteMaxAggregateOutputType | null
  }

  type GetAd_clienteGroupByPayload<T extends Ad_clienteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ad_clienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ad_clienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ad_clienteGroupByOutputType[P]>
            : GetScalarType<T[P], Ad_clienteGroupByOutputType[P]>
        }
      >
    >


  export type ad_clienteSelect = {
    id?: boolean
    nome?: boolean
    apelido?: boolean
    codigo?: boolean
    registro?: boolean
    reg_est?: boolean
    email?: boolean
    telefone?: boolean
    celular?: boolean
    fax?: boolean
    ed_logr?: boolean
    ed_numero?: boolean
    ed_compl?: boolean
    ed_bairro?: boolean
    ed_cidade?: boolean
    ed_estado?: boolean
    contato?: boolean
    id_cargo?: boolean
    id_banco?: boolean
    ag_banco?: boolean
    ag_dig_banco?: boolean
    conta_banco?: boolean
    conta_dig_banco?: boolean
    cod_tit_banco?: boolean
    logo?: boolean
    id_forma_pagto?: boolean
    dt_cad?: boolean
    dh_inc?: boolean
    id_usu_inc?: boolean
    id_usu_alt?: boolean
    id_plano?: boolean
  }

  export type ad_clienteGetPayload<
    S extends boolean | null | undefined | ad_clienteArgs,
    U = keyof S
      > = S extends true
        ? ad_cliente
    : S extends undefined
    ? never
    : S extends ad_clienteArgs | ad_clienteFindManyArgs
    ?'include' extends U
    ? ad_cliente 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ad_cliente ? ad_cliente[P] : never
  } 
    : ad_cliente
  : ad_cliente


  type ad_clienteCountArgs = Merge<
    Omit<ad_clienteFindManyArgs, 'select' | 'include'> & {
      select?: Ad_clienteCountAggregateInputType | true
    }
  >

  export interface ad_clienteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ad_cliente that matches the filter.
     * @param {ad_clienteFindUniqueArgs} args - Arguments to find a Ad_cliente
     * @example
     * // Get one Ad_cliente
     * const ad_cliente = await prisma.ad_cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ad_clienteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ad_clienteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ad_cliente'> extends True ? CheckSelect<T, Prisma__ad_clienteClient<ad_cliente>, Prisma__ad_clienteClient<ad_clienteGetPayload<T>>> : CheckSelect<T, Prisma__ad_clienteClient<ad_cliente | null >, Prisma__ad_clienteClient<ad_clienteGetPayload<T> | null >>

    /**
     * Find the first Ad_cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_clienteFindFirstArgs} args - Arguments to find a Ad_cliente
     * @example
     * // Get one Ad_cliente
     * const ad_cliente = await prisma.ad_cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ad_clienteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ad_clienteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ad_cliente'> extends True ? CheckSelect<T, Prisma__ad_clienteClient<ad_cliente>, Prisma__ad_clienteClient<ad_clienteGetPayload<T>>> : CheckSelect<T, Prisma__ad_clienteClient<ad_cliente | null >, Prisma__ad_clienteClient<ad_clienteGetPayload<T> | null >>

    /**
     * Find zero or more Ad_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_clienteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ad_clientes
     * const ad_clientes = await prisma.ad_cliente.findMany()
     * 
     * // Get first 10 Ad_clientes
     * const ad_clientes = await prisma.ad_cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ad_clienteWithIdOnly = await prisma.ad_cliente.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ad_clienteFindManyArgs>(
      args?: SelectSubset<T, ad_clienteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ad_cliente>>, PrismaPromise<Array<ad_clienteGetPayload<T>>>>

    /**
     * Create a Ad_cliente.
     * @param {ad_clienteCreateArgs} args - Arguments to create a Ad_cliente.
     * @example
     * // Create one Ad_cliente
     * const Ad_cliente = await prisma.ad_cliente.create({
     *   data: {
     *     // ... data to create a Ad_cliente
     *   }
     * })
     * 
    **/
    create<T extends ad_clienteCreateArgs>(
      args: SelectSubset<T, ad_clienteCreateArgs>
    ): CheckSelect<T, Prisma__ad_clienteClient<ad_cliente>, Prisma__ad_clienteClient<ad_clienteGetPayload<T>>>

    /**
     * Create many Ad_clientes.
     *     @param {ad_clienteCreateManyArgs} args - Arguments to create many Ad_clientes.
     *     @example
     *     // Create many Ad_clientes
     *     const ad_cliente = await prisma.ad_cliente.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ad_clienteCreateManyArgs>(
      args?: SelectSubset<T, ad_clienteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ad_cliente.
     * @param {ad_clienteDeleteArgs} args - Arguments to delete one Ad_cliente.
     * @example
     * // Delete one Ad_cliente
     * const Ad_cliente = await prisma.ad_cliente.delete({
     *   where: {
     *     // ... filter to delete one Ad_cliente
     *   }
     * })
     * 
    **/
    delete<T extends ad_clienteDeleteArgs>(
      args: SelectSubset<T, ad_clienteDeleteArgs>
    ): CheckSelect<T, Prisma__ad_clienteClient<ad_cliente>, Prisma__ad_clienteClient<ad_clienteGetPayload<T>>>

    /**
     * Update one Ad_cliente.
     * @param {ad_clienteUpdateArgs} args - Arguments to update one Ad_cliente.
     * @example
     * // Update one Ad_cliente
     * const ad_cliente = await prisma.ad_cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ad_clienteUpdateArgs>(
      args: SelectSubset<T, ad_clienteUpdateArgs>
    ): CheckSelect<T, Prisma__ad_clienteClient<ad_cliente>, Prisma__ad_clienteClient<ad_clienteGetPayload<T>>>

    /**
     * Delete zero or more Ad_clientes.
     * @param {ad_clienteDeleteManyArgs} args - Arguments to filter Ad_clientes to delete.
     * @example
     * // Delete a few Ad_clientes
     * const { count } = await prisma.ad_cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ad_clienteDeleteManyArgs>(
      args?: SelectSubset<T, ad_clienteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ad_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ad_clientes
     * const ad_cliente = await prisma.ad_cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ad_clienteUpdateManyArgs>(
      args: SelectSubset<T, ad_clienteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ad_cliente.
     * @param {ad_clienteUpsertArgs} args - Arguments to update or create a Ad_cliente.
     * @example
     * // Update or create a Ad_cliente
     * const ad_cliente = await prisma.ad_cliente.upsert({
     *   create: {
     *     // ... data to create a Ad_cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ad_cliente we want to update
     *   }
     * })
    **/
    upsert<T extends ad_clienteUpsertArgs>(
      args: SelectSubset<T, ad_clienteUpsertArgs>
    ): CheckSelect<T, Prisma__ad_clienteClient<ad_cliente>, Prisma__ad_clienteClient<ad_clienteGetPayload<T>>>

    /**
     * Find one Ad_cliente that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ad_clienteFindUniqueOrThrowArgs} args - Arguments to find a Ad_cliente
     * @example
     * // Get one Ad_cliente
     * const ad_cliente = await prisma.ad_cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ad_clienteFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ad_clienteFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ad_clienteClient<ad_cliente>, Prisma__ad_clienteClient<ad_clienteGetPayload<T>>>

    /**
     * Find the first Ad_cliente that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_clienteFindFirstOrThrowArgs} args - Arguments to find a Ad_cliente
     * @example
     * // Get one Ad_cliente
     * const ad_cliente = await prisma.ad_cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ad_clienteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ad_clienteFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ad_clienteClient<ad_cliente>, Prisma__ad_clienteClient<ad_clienteGetPayload<T>>>

    /**
     * Count the number of Ad_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_clienteCountArgs} args - Arguments to filter Ad_clientes to count.
     * @example
     * // Count the number of Ad_clientes
     * const count = await prisma.ad_cliente.count({
     *   where: {
     *     // ... the filter for the Ad_clientes we want to count
     *   }
     * })
    **/
    count<T extends ad_clienteCountArgs>(
      args?: Subset<T, ad_clienteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ad_clienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ad_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ad_clienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ad_clienteAggregateArgs>(args: Subset<T, Ad_clienteAggregateArgs>): PrismaPromise<GetAd_clienteAggregateType<T>>

    /**
     * Group by Ad_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ad_clienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ad_clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ad_clienteGroupByArgs['orderBy'] }
        : { orderBy?: Ad_clienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ad_clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAd_clienteGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ad_cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ad_clienteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ad_cliente base type for findUnique actions
   */
  export type ad_clienteFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ad_cliente
     * 
    **/
    select?: ad_clienteSelect | null
    /**
     * Filter, which ad_cliente to fetch.
     * 
    **/
    where: ad_clienteWhereUniqueInput
  }

  /**
   * ad_cliente: findUnique
   */
  export interface ad_clienteFindUniqueArgs extends ad_clienteFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ad_cliente base type for findFirst actions
   */
  export type ad_clienteFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ad_cliente
     * 
    **/
    select?: ad_clienteSelect | null
    /**
     * Filter, which ad_cliente to fetch.
     * 
    **/
    where?: ad_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ad_clientes to fetch.
     * 
    **/
    orderBy?: Enumerable<ad_clienteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ad_clientes.
     * 
    **/
    cursor?: ad_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ad_clientes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ad_clientes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ad_clientes.
     * 
    **/
    distinct?: Enumerable<Ad_clienteScalarFieldEnum>
  }

  /**
   * ad_cliente: findFirst
   */
  export interface ad_clienteFindFirstArgs extends ad_clienteFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ad_cliente findMany
   */
  export type ad_clienteFindManyArgs = {
    /**
     * Select specific fields to fetch from the ad_cliente
     * 
    **/
    select?: ad_clienteSelect | null
    /**
     * Filter, which ad_clientes to fetch.
     * 
    **/
    where?: ad_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ad_clientes to fetch.
     * 
    **/
    orderBy?: Enumerable<ad_clienteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ad_clientes.
     * 
    **/
    cursor?: ad_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ad_clientes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ad_clientes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ad_clienteScalarFieldEnum>
  }


  /**
   * ad_cliente create
   */
  export type ad_clienteCreateArgs = {
    /**
     * Select specific fields to fetch from the ad_cliente
     * 
    **/
    select?: ad_clienteSelect | null
    /**
     * The data needed to create a ad_cliente.
     * 
    **/
    data: XOR<ad_clienteCreateInput, ad_clienteUncheckedCreateInput>
  }


  /**
   * ad_cliente createMany
   */
  export type ad_clienteCreateManyArgs = {
    /**
     * The data used to create many ad_clientes.
     * 
    **/
    data: Enumerable<ad_clienteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ad_cliente update
   */
  export type ad_clienteUpdateArgs = {
    /**
     * Select specific fields to fetch from the ad_cliente
     * 
    **/
    select?: ad_clienteSelect | null
    /**
     * The data needed to update a ad_cliente.
     * 
    **/
    data: XOR<ad_clienteUpdateInput, ad_clienteUncheckedUpdateInput>
    /**
     * Choose, which ad_cliente to update.
     * 
    **/
    where: ad_clienteWhereUniqueInput
  }


  /**
   * ad_cliente updateMany
   */
  export type ad_clienteUpdateManyArgs = {
    /**
     * The data used to update ad_clientes.
     * 
    **/
    data: XOR<ad_clienteUpdateManyMutationInput, ad_clienteUncheckedUpdateManyInput>
    /**
     * Filter which ad_clientes to update
     * 
    **/
    where?: ad_clienteWhereInput
  }


  /**
   * ad_cliente upsert
   */
  export type ad_clienteUpsertArgs = {
    /**
     * Select specific fields to fetch from the ad_cliente
     * 
    **/
    select?: ad_clienteSelect | null
    /**
     * The filter to search for the ad_cliente to update in case it exists.
     * 
    **/
    where: ad_clienteWhereUniqueInput
    /**
     * In case the ad_cliente found by the `where` argument doesn't exist, create a new ad_cliente with this data.
     * 
    **/
    create: XOR<ad_clienteCreateInput, ad_clienteUncheckedCreateInput>
    /**
     * In case the ad_cliente was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ad_clienteUpdateInput, ad_clienteUncheckedUpdateInput>
  }


  /**
   * ad_cliente delete
   */
  export type ad_clienteDeleteArgs = {
    /**
     * Select specific fields to fetch from the ad_cliente
     * 
    **/
    select?: ad_clienteSelect | null
    /**
     * Filter which ad_cliente to delete.
     * 
    **/
    where: ad_clienteWhereUniqueInput
  }


  /**
   * ad_cliente deleteMany
   */
  export type ad_clienteDeleteManyArgs = {
    /**
     * Filter which ad_clientes to delete
     * 
    **/
    where?: ad_clienteWhereInput
  }


  /**
   * ad_cliente: findUniqueOrThrow
   */
  export type ad_clienteFindUniqueOrThrowArgs = ad_clienteFindUniqueArgsBase
      

  /**
   * ad_cliente: findFirstOrThrow
   */
  export type ad_clienteFindFirstOrThrowArgs = ad_clienteFindFirstArgsBase
      

  /**
   * ad_cliente without action
   */
  export type ad_clienteArgs = {
    /**
     * Select specific fields to fetch from the ad_cliente
     * 
    **/
    select?: ad_clienteSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Ad_clienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    apelido: 'apelido',
    codigo: 'codigo',
    registro: 'registro',
    reg_est: 'reg_est',
    email: 'email',
    telefone: 'telefone',
    celular: 'celular',
    fax: 'fax',
    ed_logr: 'ed_logr',
    ed_numero: 'ed_numero',
    ed_compl: 'ed_compl',
    ed_bairro: 'ed_bairro',
    ed_cidade: 'ed_cidade',
    ed_estado: 'ed_estado',
    contato: 'contato',
    id_cargo: 'id_cargo',
    id_banco: 'id_banco',
    ag_banco: 'ag_banco',
    ag_dig_banco: 'ag_dig_banco',
    conta_banco: 'conta_banco',
    conta_dig_banco: 'conta_dig_banco',
    cod_tit_banco: 'cod_tit_banco',
    logo: 'logo',
    id_forma_pagto: 'id_forma_pagto',
    dt_cad: 'dt_cad',
    dh_inc: 'dh_inc',
    id_usu_inc: 'id_usu_inc',
    id_usu_alt: 'id_usu_alt',
    id_plano: 'id_plano'
  };

  export type Ad_clienteScalarFieldEnum = (typeof Ad_clienteScalarFieldEnum)[keyof typeof Ad_clienteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type ad_clienteWhereInput = {
    AND?: Enumerable<ad_clienteWhereInput>
    OR?: Enumerable<ad_clienteWhereInput>
    NOT?: Enumerable<ad_clienteWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    apelido?: StringNullableFilter | string | null
    codigo?: StringNullableFilter | string | null
    registro?: StringNullableFilter | string | null
    reg_est?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    telefone?: StringNullableFilter | string | null
    celular?: StringNullableFilter | string | null
    fax?: StringNullableFilter | string | null
    ed_logr?: StringNullableFilter | string | null
    ed_numero?: StringNullableFilter | string | null
    ed_compl?: StringNullableFilter | string | null
    ed_bairro?: StringNullableFilter | string | null
    ed_cidade?: StringNullableFilter | string | null
    ed_estado?: StringNullableFilter | string | null
    contato?: StringFilter | string
    id_cargo?: IntNullableFilter | number | null
    id_banco?: IntNullableFilter | number | null
    ag_banco?: StringNullableFilter | string | null
    ag_dig_banco?: StringNullableFilter | string | null
    conta_banco?: StringNullableFilter | string | null
    conta_dig_banco?: StringNullableFilter | string | null
    cod_tit_banco?: StringNullableFilter | string | null
    logo?: IntNullableFilter | number | null
    id_forma_pagto?: IntNullableFilter | number | null
    dt_cad?: DateTimeNullableFilter | Date | string | null
    dh_inc?: DateTimeNullableFilter | Date | string | null
    id_usu_inc?: IntNullableFilter | number | null
    id_usu_alt?: IntNullableFilter | number | null
    id_plano?: IntFilter | number
  }

  export type ad_clienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    codigo?: SortOrder
    registro?: SortOrder
    reg_est?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    celular?: SortOrder
    fax?: SortOrder
    ed_logr?: SortOrder
    ed_numero?: SortOrder
    ed_compl?: SortOrder
    ed_bairro?: SortOrder
    ed_cidade?: SortOrder
    ed_estado?: SortOrder
    contato?: SortOrder
    id_cargo?: SortOrder
    id_banco?: SortOrder
    ag_banco?: SortOrder
    ag_dig_banco?: SortOrder
    conta_banco?: SortOrder
    conta_dig_banco?: SortOrder
    cod_tit_banco?: SortOrder
    logo?: SortOrder
    id_forma_pagto?: SortOrder
    dt_cad?: SortOrder
    dh_inc?: SortOrder
    id_usu_inc?: SortOrder
    id_usu_alt?: SortOrder
    id_plano?: SortOrder
  }

  export type ad_clienteWhereUniqueInput = {
    id?: number
  }

  export type ad_clienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    codigo?: SortOrder
    registro?: SortOrder
    reg_est?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    celular?: SortOrder
    fax?: SortOrder
    ed_logr?: SortOrder
    ed_numero?: SortOrder
    ed_compl?: SortOrder
    ed_bairro?: SortOrder
    ed_cidade?: SortOrder
    ed_estado?: SortOrder
    contato?: SortOrder
    id_cargo?: SortOrder
    id_banco?: SortOrder
    ag_banco?: SortOrder
    ag_dig_banco?: SortOrder
    conta_banco?: SortOrder
    conta_dig_banco?: SortOrder
    cod_tit_banco?: SortOrder
    logo?: SortOrder
    id_forma_pagto?: SortOrder
    dt_cad?: SortOrder
    dh_inc?: SortOrder
    id_usu_inc?: SortOrder
    id_usu_alt?: SortOrder
    id_plano?: SortOrder
    _count?: ad_clienteCountOrderByAggregateInput
    _avg?: ad_clienteAvgOrderByAggregateInput
    _max?: ad_clienteMaxOrderByAggregateInput
    _min?: ad_clienteMinOrderByAggregateInput
    _sum?: ad_clienteSumOrderByAggregateInput
  }

  export type ad_clienteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ad_clienteScalarWhereWithAggregatesInput>
    OR?: Enumerable<ad_clienteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ad_clienteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    apelido?: StringNullableWithAggregatesFilter | string | null
    codigo?: StringNullableWithAggregatesFilter | string | null
    registro?: StringNullableWithAggregatesFilter | string | null
    reg_est?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    telefone?: StringNullableWithAggregatesFilter | string | null
    celular?: StringNullableWithAggregatesFilter | string | null
    fax?: StringNullableWithAggregatesFilter | string | null
    ed_logr?: StringNullableWithAggregatesFilter | string | null
    ed_numero?: StringNullableWithAggregatesFilter | string | null
    ed_compl?: StringNullableWithAggregatesFilter | string | null
    ed_bairro?: StringNullableWithAggregatesFilter | string | null
    ed_cidade?: StringNullableWithAggregatesFilter | string | null
    ed_estado?: StringNullableWithAggregatesFilter | string | null
    contato?: StringWithAggregatesFilter | string
    id_cargo?: IntNullableWithAggregatesFilter | number | null
    id_banco?: IntNullableWithAggregatesFilter | number | null
    ag_banco?: StringNullableWithAggregatesFilter | string | null
    ag_dig_banco?: StringNullableWithAggregatesFilter | string | null
    conta_banco?: StringNullableWithAggregatesFilter | string | null
    conta_dig_banco?: StringNullableWithAggregatesFilter | string | null
    cod_tit_banco?: StringNullableWithAggregatesFilter | string | null
    logo?: IntNullableWithAggregatesFilter | number | null
    id_forma_pagto?: IntNullableWithAggregatesFilter | number | null
    dt_cad?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dh_inc?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id_usu_inc?: IntNullableWithAggregatesFilter | number | null
    id_usu_alt?: IntNullableWithAggregatesFilter | number | null
    id_plano?: IntWithAggregatesFilter | number
  }

  export type ad_clienteCreateInput = {
    nome: string
    apelido?: string | null
    codigo?: string | null
    registro?: string | null
    reg_est?: string | null
    email?: string | null
    telefone?: string | null
    celular?: string | null
    fax?: string | null
    ed_logr?: string | null
    ed_numero?: string | null
    ed_compl?: string | null
    ed_bairro?: string | null
    ed_cidade?: string | null
    ed_estado?: string | null
    contato: string
    id_cargo?: number | null
    id_banco?: number | null
    ag_banco?: string | null
    ag_dig_banco?: string | null
    conta_banco?: string | null
    conta_dig_banco?: string | null
    cod_tit_banco?: string | null
    logo?: number | null
    id_forma_pagto?: number | null
    dt_cad?: Date | string | null
    dh_inc?: Date | string | null
    id_usu_inc?: number | null
    id_usu_alt?: number | null
    id_plano: number
  }

  export type ad_clienteUncheckedCreateInput = {
    id?: number
    nome: string
    apelido?: string | null
    codigo?: string | null
    registro?: string | null
    reg_est?: string | null
    email?: string | null
    telefone?: string | null
    celular?: string | null
    fax?: string | null
    ed_logr?: string | null
    ed_numero?: string | null
    ed_compl?: string | null
    ed_bairro?: string | null
    ed_cidade?: string | null
    ed_estado?: string | null
    contato: string
    id_cargo?: number | null
    id_banco?: number | null
    ag_banco?: string | null
    ag_dig_banco?: string | null
    conta_banco?: string | null
    conta_dig_banco?: string | null
    cod_tit_banco?: string | null
    logo?: number | null
    id_forma_pagto?: number | null
    dt_cad?: Date | string | null
    dh_inc?: Date | string | null
    id_usu_inc?: number | null
    id_usu_alt?: number | null
    id_plano: number
  }

  export type ad_clienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    reg_est?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    ed_logr?: NullableStringFieldUpdateOperationsInput | string | null
    ed_numero?: NullableStringFieldUpdateOperationsInput | string | null
    ed_compl?: NullableStringFieldUpdateOperationsInput | string | null
    ed_bairro?: NullableStringFieldUpdateOperationsInput | string | null
    ed_cidade?: NullableStringFieldUpdateOperationsInput | string | null
    ed_estado?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: StringFieldUpdateOperationsInput | string
    id_cargo?: NullableIntFieldUpdateOperationsInput | number | null
    id_banco?: NullableIntFieldUpdateOperationsInput | number | null
    ag_banco?: NullableStringFieldUpdateOperationsInput | string | null
    ag_dig_banco?: NullableStringFieldUpdateOperationsInput | string | null
    conta_banco?: NullableStringFieldUpdateOperationsInput | string | null
    conta_dig_banco?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tit_banco?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableIntFieldUpdateOperationsInput | number | null
    id_forma_pagto?: NullableIntFieldUpdateOperationsInput | number | null
    dt_cad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dh_inc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usu_inc?: NullableIntFieldUpdateOperationsInput | number | null
    id_usu_alt?: NullableIntFieldUpdateOperationsInput | number | null
    id_plano?: IntFieldUpdateOperationsInput | number
  }

  export type ad_clienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    reg_est?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    ed_logr?: NullableStringFieldUpdateOperationsInput | string | null
    ed_numero?: NullableStringFieldUpdateOperationsInput | string | null
    ed_compl?: NullableStringFieldUpdateOperationsInput | string | null
    ed_bairro?: NullableStringFieldUpdateOperationsInput | string | null
    ed_cidade?: NullableStringFieldUpdateOperationsInput | string | null
    ed_estado?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: StringFieldUpdateOperationsInput | string
    id_cargo?: NullableIntFieldUpdateOperationsInput | number | null
    id_banco?: NullableIntFieldUpdateOperationsInput | number | null
    ag_banco?: NullableStringFieldUpdateOperationsInput | string | null
    ag_dig_banco?: NullableStringFieldUpdateOperationsInput | string | null
    conta_banco?: NullableStringFieldUpdateOperationsInput | string | null
    conta_dig_banco?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tit_banco?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableIntFieldUpdateOperationsInput | number | null
    id_forma_pagto?: NullableIntFieldUpdateOperationsInput | number | null
    dt_cad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dh_inc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usu_inc?: NullableIntFieldUpdateOperationsInput | number | null
    id_usu_alt?: NullableIntFieldUpdateOperationsInput | number | null
    id_plano?: IntFieldUpdateOperationsInput | number
  }

  export type ad_clienteCreateManyInput = {
    id?: number
    nome: string
    apelido?: string | null
    codigo?: string | null
    registro?: string | null
    reg_est?: string | null
    email?: string | null
    telefone?: string | null
    celular?: string | null
    fax?: string | null
    ed_logr?: string | null
    ed_numero?: string | null
    ed_compl?: string | null
    ed_bairro?: string | null
    ed_cidade?: string | null
    ed_estado?: string | null
    contato: string
    id_cargo?: number | null
    id_banco?: number | null
    ag_banco?: string | null
    ag_dig_banco?: string | null
    conta_banco?: string | null
    conta_dig_banco?: string | null
    cod_tit_banco?: string | null
    logo?: number | null
    id_forma_pagto?: number | null
    dt_cad?: Date | string | null
    dh_inc?: Date | string | null
    id_usu_inc?: number | null
    id_usu_alt?: number | null
    id_plano: number
  }

  export type ad_clienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    reg_est?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    ed_logr?: NullableStringFieldUpdateOperationsInput | string | null
    ed_numero?: NullableStringFieldUpdateOperationsInput | string | null
    ed_compl?: NullableStringFieldUpdateOperationsInput | string | null
    ed_bairro?: NullableStringFieldUpdateOperationsInput | string | null
    ed_cidade?: NullableStringFieldUpdateOperationsInput | string | null
    ed_estado?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: StringFieldUpdateOperationsInput | string
    id_cargo?: NullableIntFieldUpdateOperationsInput | number | null
    id_banco?: NullableIntFieldUpdateOperationsInput | number | null
    ag_banco?: NullableStringFieldUpdateOperationsInput | string | null
    ag_dig_banco?: NullableStringFieldUpdateOperationsInput | string | null
    conta_banco?: NullableStringFieldUpdateOperationsInput | string | null
    conta_dig_banco?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tit_banco?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableIntFieldUpdateOperationsInput | number | null
    id_forma_pagto?: NullableIntFieldUpdateOperationsInput | number | null
    dt_cad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dh_inc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usu_inc?: NullableIntFieldUpdateOperationsInput | number | null
    id_usu_alt?: NullableIntFieldUpdateOperationsInput | number | null
    id_plano?: IntFieldUpdateOperationsInput | number
  }

  export type ad_clienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    reg_est?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    ed_logr?: NullableStringFieldUpdateOperationsInput | string | null
    ed_numero?: NullableStringFieldUpdateOperationsInput | string | null
    ed_compl?: NullableStringFieldUpdateOperationsInput | string | null
    ed_bairro?: NullableStringFieldUpdateOperationsInput | string | null
    ed_cidade?: NullableStringFieldUpdateOperationsInput | string | null
    ed_estado?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: StringFieldUpdateOperationsInput | string
    id_cargo?: NullableIntFieldUpdateOperationsInput | number | null
    id_banco?: NullableIntFieldUpdateOperationsInput | number | null
    ag_banco?: NullableStringFieldUpdateOperationsInput | string | null
    ag_dig_banco?: NullableStringFieldUpdateOperationsInput | string | null
    conta_banco?: NullableStringFieldUpdateOperationsInput | string | null
    conta_dig_banco?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tit_banco?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableIntFieldUpdateOperationsInput | number | null
    id_forma_pagto?: NullableIntFieldUpdateOperationsInput | number | null
    dt_cad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dh_inc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usu_inc?: NullableIntFieldUpdateOperationsInput | number | null
    id_usu_alt?: NullableIntFieldUpdateOperationsInput | number | null
    id_plano?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ad_clienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    codigo?: SortOrder
    registro?: SortOrder
    reg_est?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    celular?: SortOrder
    fax?: SortOrder
    ed_logr?: SortOrder
    ed_numero?: SortOrder
    ed_compl?: SortOrder
    ed_bairro?: SortOrder
    ed_cidade?: SortOrder
    ed_estado?: SortOrder
    contato?: SortOrder
    id_cargo?: SortOrder
    id_banco?: SortOrder
    ag_banco?: SortOrder
    ag_dig_banco?: SortOrder
    conta_banco?: SortOrder
    conta_dig_banco?: SortOrder
    cod_tit_banco?: SortOrder
    logo?: SortOrder
    id_forma_pagto?: SortOrder
    dt_cad?: SortOrder
    dh_inc?: SortOrder
    id_usu_inc?: SortOrder
    id_usu_alt?: SortOrder
    id_plano?: SortOrder
  }

  export type ad_clienteAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cargo?: SortOrder
    id_banco?: SortOrder
    logo?: SortOrder
    id_forma_pagto?: SortOrder
    id_usu_inc?: SortOrder
    id_usu_alt?: SortOrder
    id_plano?: SortOrder
  }

  export type ad_clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    codigo?: SortOrder
    registro?: SortOrder
    reg_est?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    celular?: SortOrder
    fax?: SortOrder
    ed_logr?: SortOrder
    ed_numero?: SortOrder
    ed_compl?: SortOrder
    ed_bairro?: SortOrder
    ed_cidade?: SortOrder
    ed_estado?: SortOrder
    contato?: SortOrder
    id_cargo?: SortOrder
    id_banco?: SortOrder
    ag_banco?: SortOrder
    ag_dig_banco?: SortOrder
    conta_banco?: SortOrder
    conta_dig_banco?: SortOrder
    cod_tit_banco?: SortOrder
    logo?: SortOrder
    id_forma_pagto?: SortOrder
    dt_cad?: SortOrder
    dh_inc?: SortOrder
    id_usu_inc?: SortOrder
    id_usu_alt?: SortOrder
    id_plano?: SortOrder
  }

  export type ad_clienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    codigo?: SortOrder
    registro?: SortOrder
    reg_est?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    celular?: SortOrder
    fax?: SortOrder
    ed_logr?: SortOrder
    ed_numero?: SortOrder
    ed_compl?: SortOrder
    ed_bairro?: SortOrder
    ed_cidade?: SortOrder
    ed_estado?: SortOrder
    contato?: SortOrder
    id_cargo?: SortOrder
    id_banco?: SortOrder
    ag_banco?: SortOrder
    ag_dig_banco?: SortOrder
    conta_banco?: SortOrder
    conta_dig_banco?: SortOrder
    cod_tit_banco?: SortOrder
    logo?: SortOrder
    id_forma_pagto?: SortOrder
    dt_cad?: SortOrder
    dh_inc?: SortOrder
    id_usu_inc?: SortOrder
    id_usu_alt?: SortOrder
    id_plano?: SortOrder
  }

  export type ad_clienteSumOrderByAggregateInput = {
    id?: SortOrder
    id_cargo?: SortOrder
    id_banco?: SortOrder
    logo?: SortOrder
    id_forma_pagto?: SortOrder
    id_usu_inc?: SortOrder
    id_usu_alt?: SortOrder
    id_plano?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}