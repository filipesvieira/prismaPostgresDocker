
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
 * Model tms_pedido_etiqueta
 * 
 */
export type tms_pedido_etiqueta = {
  id: number
  nome: string | null
  id_pedido: number | null
  id_integ_pedido: number | null
  id_pessoa: number | null
  id_pessoa_origem: number | null
  status: string | null
  dh_inc: Date | null
  dh_conc: Date | null
  quantidade: number | null
}

/**
 * Model jad_log
 * 
 */
export type jad_log = {
  id: number
  identificacao: string | null
  cep: string | null
  endereco: string | null
  bairro: string | null
  cidade: string | null
  estado: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tms_pedido_etiquetas
 * const tms_pedido_etiquetas = await prisma.tms_pedido_etiqueta.findMany()
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
   * // Fetch zero or more Tms_pedido_etiquetas
   * const tms_pedido_etiquetas = await prisma.tms_pedido_etiqueta.findMany()
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
   * `prisma.tms_pedido_etiqueta`: Exposes CRUD operations for the **tms_pedido_etiqueta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tms_pedido_etiquetas
    * const tms_pedido_etiquetas = await prisma.tms_pedido_etiqueta.findMany()
    * ```
    */
  get tms_pedido_etiqueta(): Prisma.tms_pedido_etiquetaDelegate<GlobalReject>;

  /**
   * `prisma.jad_log`: Exposes CRUD operations for the **jad_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jad_logs
    * const jad_logs = await prisma.jad_log.findMany()
    * ```
    */
  get jad_log(): Prisma.jad_logDelegate<GlobalReject>;
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
   * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
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
    tms_pedido_etiqueta: 'tms_pedido_etiqueta',
    jad_log: 'jad_log'
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
   * Model tms_pedido_etiqueta
   */


  export type AggregateTms_pedido_etiqueta = {
    _count: Tms_pedido_etiquetaCountAggregateOutputType | null
    _avg: Tms_pedido_etiquetaAvgAggregateOutputType | null
    _sum: Tms_pedido_etiquetaSumAggregateOutputType | null
    _min: Tms_pedido_etiquetaMinAggregateOutputType | null
    _max: Tms_pedido_etiquetaMaxAggregateOutputType | null
  }

  export type Tms_pedido_etiquetaAvgAggregateOutputType = {
    id: number | null
    id_pedido: number | null
    id_integ_pedido: number | null
    id_pessoa: number | null
    id_pessoa_origem: number | null
    quantidade: number | null
  }

  export type Tms_pedido_etiquetaSumAggregateOutputType = {
    id: number | null
    id_pedido: number | null
    id_integ_pedido: number | null
    id_pessoa: number | null
    id_pessoa_origem: number | null
    quantidade: number | null
  }

  export type Tms_pedido_etiquetaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    id_pedido: number | null
    id_integ_pedido: number | null
    id_pessoa: number | null
    id_pessoa_origem: number | null
    status: string | null
    dh_inc: Date | null
    dh_conc: Date | null
    quantidade: number | null
  }

  export type Tms_pedido_etiquetaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    id_pedido: number | null
    id_integ_pedido: number | null
    id_pessoa: number | null
    id_pessoa_origem: number | null
    status: string | null
    dh_inc: Date | null
    dh_conc: Date | null
    quantidade: number | null
  }

  export type Tms_pedido_etiquetaCountAggregateOutputType = {
    id: number
    nome: number
    id_pedido: number
    id_integ_pedido: number
    id_pessoa: number
    id_pessoa_origem: number
    status: number
    dh_inc: number
    dh_conc: number
    quantidade: number
    _all: number
  }


  export type Tms_pedido_etiquetaAvgAggregateInputType = {
    id?: true
    id_pedido?: true
    id_integ_pedido?: true
    id_pessoa?: true
    id_pessoa_origem?: true
    quantidade?: true
  }

  export type Tms_pedido_etiquetaSumAggregateInputType = {
    id?: true
    id_pedido?: true
    id_integ_pedido?: true
    id_pessoa?: true
    id_pessoa_origem?: true
    quantidade?: true
  }

  export type Tms_pedido_etiquetaMinAggregateInputType = {
    id?: true
    nome?: true
    id_pedido?: true
    id_integ_pedido?: true
    id_pessoa?: true
    id_pessoa_origem?: true
    status?: true
    dh_inc?: true
    dh_conc?: true
    quantidade?: true
  }

  export type Tms_pedido_etiquetaMaxAggregateInputType = {
    id?: true
    nome?: true
    id_pedido?: true
    id_integ_pedido?: true
    id_pessoa?: true
    id_pessoa_origem?: true
    status?: true
    dh_inc?: true
    dh_conc?: true
    quantidade?: true
  }

  export type Tms_pedido_etiquetaCountAggregateInputType = {
    id?: true
    nome?: true
    id_pedido?: true
    id_integ_pedido?: true
    id_pessoa?: true
    id_pessoa_origem?: true
    status?: true
    dh_inc?: true
    dh_conc?: true
    quantidade?: true
    _all?: true
  }

  export type Tms_pedido_etiquetaAggregateArgs = {
    /**
     * Filter which tms_pedido_etiqueta to aggregate.
     * 
    **/
    where?: tms_pedido_etiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tms_pedido_etiquetas to fetch.
     * 
    **/
    orderBy?: Enumerable<tms_pedido_etiquetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: tms_pedido_etiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tms_pedido_etiquetas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tms_pedido_etiquetas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tms_pedido_etiquetas
    **/
    _count?: true | Tms_pedido_etiquetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tms_pedido_etiquetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tms_pedido_etiquetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tms_pedido_etiquetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tms_pedido_etiquetaMaxAggregateInputType
  }

  export type GetTms_pedido_etiquetaAggregateType<T extends Tms_pedido_etiquetaAggregateArgs> = {
        [P in keyof T & keyof AggregateTms_pedido_etiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTms_pedido_etiqueta[P]>
      : GetScalarType<T[P], AggregateTms_pedido_etiqueta[P]>
  }




  export type Tms_pedido_etiquetaGroupByArgs = {
    where?: tms_pedido_etiquetaWhereInput
    orderBy?: Enumerable<tms_pedido_etiquetaOrderByWithAggregationInput>
    by: Array<Tms_pedido_etiquetaScalarFieldEnum>
    having?: tms_pedido_etiquetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tms_pedido_etiquetaCountAggregateInputType | true
    _avg?: Tms_pedido_etiquetaAvgAggregateInputType
    _sum?: Tms_pedido_etiquetaSumAggregateInputType
    _min?: Tms_pedido_etiquetaMinAggregateInputType
    _max?: Tms_pedido_etiquetaMaxAggregateInputType
  }


  export type Tms_pedido_etiquetaGroupByOutputType = {
    id: number
    nome: string | null
    id_pedido: number | null
    id_integ_pedido: number | null
    id_pessoa: number | null
    id_pessoa_origem: number | null
    status: string | null
    dh_inc: Date | null
    dh_conc: Date | null
    quantidade: number | null
    _count: Tms_pedido_etiquetaCountAggregateOutputType | null
    _avg: Tms_pedido_etiquetaAvgAggregateOutputType | null
    _sum: Tms_pedido_etiquetaSumAggregateOutputType | null
    _min: Tms_pedido_etiquetaMinAggregateOutputType | null
    _max: Tms_pedido_etiquetaMaxAggregateOutputType | null
  }

  type GetTms_pedido_etiquetaGroupByPayload<T extends Tms_pedido_etiquetaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Tms_pedido_etiquetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tms_pedido_etiquetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tms_pedido_etiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], Tms_pedido_etiquetaGroupByOutputType[P]>
        }
      >
    >


  export type tms_pedido_etiquetaSelect = {
    id?: boolean
    nome?: boolean
    id_pedido?: boolean
    id_integ_pedido?: boolean
    id_pessoa?: boolean
    id_pessoa_origem?: boolean
    status?: boolean
    dh_inc?: boolean
    dh_conc?: boolean
    quantidade?: boolean
  }

  export type tms_pedido_etiquetaGetPayload<
    S extends boolean | null | undefined | tms_pedido_etiquetaArgs,
    U = keyof S
      > = S extends true
        ? tms_pedido_etiqueta
    : S extends undefined
    ? never
    : S extends tms_pedido_etiquetaArgs | tms_pedido_etiquetaFindManyArgs
    ?'include' extends U
    ? tms_pedido_etiqueta 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof tms_pedido_etiqueta ? tms_pedido_etiqueta[P] : never
  } 
    : tms_pedido_etiqueta
  : tms_pedido_etiqueta


  type tms_pedido_etiquetaCountArgs = Merge<
    Omit<tms_pedido_etiquetaFindManyArgs, 'select' | 'include'> & {
      select?: Tms_pedido_etiquetaCountAggregateInputType | true
    }
  >

  export interface tms_pedido_etiquetaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tms_pedido_etiqueta that matches the filter.
     * @param {tms_pedido_etiquetaFindUniqueArgs} args - Arguments to find a Tms_pedido_etiqueta
     * @example
     * // Get one Tms_pedido_etiqueta
     * const tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tms_pedido_etiquetaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tms_pedido_etiquetaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tms_pedido_etiqueta'> extends True ? CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta>, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T>>> : CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta | null >, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T> | null >>

    /**
     * Find the first Tms_pedido_etiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tms_pedido_etiquetaFindFirstArgs} args - Arguments to find a Tms_pedido_etiqueta
     * @example
     * // Get one Tms_pedido_etiqueta
     * const tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tms_pedido_etiquetaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tms_pedido_etiquetaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tms_pedido_etiqueta'> extends True ? CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta>, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T>>> : CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta | null >, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T> | null >>

    /**
     * Find zero or more Tms_pedido_etiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tms_pedido_etiquetaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tms_pedido_etiquetas
     * const tms_pedido_etiquetas = await prisma.tms_pedido_etiqueta.findMany()
     * 
     * // Get first 10 Tms_pedido_etiquetas
     * const tms_pedido_etiquetas = await prisma.tms_pedido_etiqueta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tms_pedido_etiquetaWithIdOnly = await prisma.tms_pedido_etiqueta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tms_pedido_etiquetaFindManyArgs>(
      args?: SelectSubset<T, tms_pedido_etiquetaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<tms_pedido_etiqueta>>, PrismaPromise<Array<tms_pedido_etiquetaGetPayload<T>>>>

    /**
     * Create a Tms_pedido_etiqueta.
     * @param {tms_pedido_etiquetaCreateArgs} args - Arguments to create a Tms_pedido_etiqueta.
     * @example
     * // Create one Tms_pedido_etiqueta
     * const Tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.create({
     *   data: {
     *     // ... data to create a Tms_pedido_etiqueta
     *   }
     * })
     * 
    **/
    create<T extends tms_pedido_etiquetaCreateArgs>(
      args: SelectSubset<T, tms_pedido_etiquetaCreateArgs>
    ): CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta>, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T>>>

    /**
     * Create many Tms_pedido_etiquetas.
     *     @param {tms_pedido_etiquetaCreateManyArgs} args - Arguments to create many Tms_pedido_etiquetas.
     *     @example
     *     // Create many Tms_pedido_etiquetas
     *     const tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tms_pedido_etiquetaCreateManyArgs>(
      args?: SelectSubset<T, tms_pedido_etiquetaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tms_pedido_etiqueta.
     * @param {tms_pedido_etiquetaDeleteArgs} args - Arguments to delete one Tms_pedido_etiqueta.
     * @example
     * // Delete one Tms_pedido_etiqueta
     * const Tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.delete({
     *   where: {
     *     // ... filter to delete one Tms_pedido_etiqueta
     *   }
     * })
     * 
    **/
    delete<T extends tms_pedido_etiquetaDeleteArgs>(
      args: SelectSubset<T, tms_pedido_etiquetaDeleteArgs>
    ): CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta>, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T>>>

    /**
     * Update one Tms_pedido_etiqueta.
     * @param {tms_pedido_etiquetaUpdateArgs} args - Arguments to update one Tms_pedido_etiqueta.
     * @example
     * // Update one Tms_pedido_etiqueta
     * const tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tms_pedido_etiquetaUpdateArgs>(
      args: SelectSubset<T, tms_pedido_etiquetaUpdateArgs>
    ): CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta>, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T>>>

    /**
     * Delete zero or more Tms_pedido_etiquetas.
     * @param {tms_pedido_etiquetaDeleteManyArgs} args - Arguments to filter Tms_pedido_etiquetas to delete.
     * @example
     * // Delete a few Tms_pedido_etiquetas
     * const { count } = await prisma.tms_pedido_etiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tms_pedido_etiquetaDeleteManyArgs>(
      args?: SelectSubset<T, tms_pedido_etiquetaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tms_pedido_etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tms_pedido_etiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tms_pedido_etiquetas
     * const tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tms_pedido_etiquetaUpdateManyArgs>(
      args: SelectSubset<T, tms_pedido_etiquetaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tms_pedido_etiqueta.
     * @param {tms_pedido_etiquetaUpsertArgs} args - Arguments to update or create a Tms_pedido_etiqueta.
     * @example
     * // Update or create a Tms_pedido_etiqueta
     * const tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.upsert({
     *   create: {
     *     // ... data to create a Tms_pedido_etiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tms_pedido_etiqueta we want to update
     *   }
     * })
    **/
    upsert<T extends tms_pedido_etiquetaUpsertArgs>(
      args: SelectSubset<T, tms_pedido_etiquetaUpsertArgs>
    ): CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta>, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T>>>

    /**
     * Find one Tms_pedido_etiqueta that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {tms_pedido_etiquetaFindUniqueOrThrowArgs} args - Arguments to find a Tms_pedido_etiqueta
     * @example
     * // Get one Tms_pedido_etiqueta
     * const tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tms_pedido_etiquetaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tms_pedido_etiquetaFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta>, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T>>>

    /**
     * Find the first Tms_pedido_etiqueta that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tms_pedido_etiquetaFindFirstOrThrowArgs} args - Arguments to find a Tms_pedido_etiqueta
     * @example
     * // Get one Tms_pedido_etiqueta
     * const tms_pedido_etiqueta = await prisma.tms_pedido_etiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tms_pedido_etiquetaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tms_pedido_etiquetaFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiqueta>, Prisma__tms_pedido_etiquetaClient<tms_pedido_etiquetaGetPayload<T>>>

    /**
     * Count the number of Tms_pedido_etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tms_pedido_etiquetaCountArgs} args - Arguments to filter Tms_pedido_etiquetas to count.
     * @example
     * // Count the number of Tms_pedido_etiquetas
     * const count = await prisma.tms_pedido_etiqueta.count({
     *   where: {
     *     // ... the filter for the Tms_pedido_etiquetas we want to count
     *   }
     * })
    **/
    count<T extends tms_pedido_etiquetaCountArgs>(
      args?: Subset<T, tms_pedido_etiquetaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tms_pedido_etiquetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tms_pedido_etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tms_pedido_etiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tms_pedido_etiquetaAggregateArgs>(args: Subset<T, Tms_pedido_etiquetaAggregateArgs>): PrismaPromise<GetTms_pedido_etiquetaAggregateType<T>>

    /**
     * Group by Tms_pedido_etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tms_pedido_etiquetaGroupByArgs} args - Group by arguments.
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
      T extends Tms_pedido_etiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tms_pedido_etiquetaGroupByArgs['orderBy'] }
        : { orderBy?: Tms_pedido_etiquetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tms_pedido_etiquetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTms_pedido_etiquetaGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for tms_pedido_etiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tms_pedido_etiquetaClient<T> implements PrismaPromise<T> {
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
   * tms_pedido_etiqueta base type for findUnique actions
   */
  export type tms_pedido_etiquetaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tms_pedido_etiqueta
     * 
    **/
    select?: tms_pedido_etiquetaSelect | null
    /**
     * Filter, which tms_pedido_etiqueta to fetch.
     * 
    **/
    where: tms_pedido_etiquetaWhereUniqueInput
  }

  /**
   * tms_pedido_etiqueta: findUnique
   */
  export interface tms_pedido_etiquetaFindUniqueArgs extends tms_pedido_etiquetaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tms_pedido_etiqueta base type for findFirst actions
   */
  export type tms_pedido_etiquetaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tms_pedido_etiqueta
     * 
    **/
    select?: tms_pedido_etiquetaSelect | null
    /**
     * Filter, which tms_pedido_etiqueta to fetch.
     * 
    **/
    where?: tms_pedido_etiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tms_pedido_etiquetas to fetch.
     * 
    **/
    orderBy?: Enumerable<tms_pedido_etiquetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tms_pedido_etiquetas.
     * 
    **/
    cursor?: tms_pedido_etiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tms_pedido_etiquetas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tms_pedido_etiquetas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tms_pedido_etiquetas.
     * 
    **/
    distinct?: Enumerable<Tms_pedido_etiquetaScalarFieldEnum>
  }

  /**
   * tms_pedido_etiqueta: findFirst
   */
  export interface tms_pedido_etiquetaFindFirstArgs extends tms_pedido_etiquetaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tms_pedido_etiqueta findMany
   */
  export type tms_pedido_etiquetaFindManyArgs = {
    /**
     * Select specific fields to fetch from the tms_pedido_etiqueta
     * 
    **/
    select?: tms_pedido_etiquetaSelect | null
    /**
     * Filter, which tms_pedido_etiquetas to fetch.
     * 
    **/
    where?: tms_pedido_etiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tms_pedido_etiquetas to fetch.
     * 
    **/
    orderBy?: Enumerable<tms_pedido_etiquetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tms_pedido_etiquetas.
     * 
    **/
    cursor?: tms_pedido_etiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tms_pedido_etiquetas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tms_pedido_etiquetas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Tms_pedido_etiquetaScalarFieldEnum>
  }


  /**
   * tms_pedido_etiqueta create
   */
  export type tms_pedido_etiquetaCreateArgs = {
    /**
     * Select specific fields to fetch from the tms_pedido_etiqueta
     * 
    **/
    select?: tms_pedido_etiquetaSelect | null
    /**
     * The data needed to create a tms_pedido_etiqueta.
     * 
    **/
    data: XOR<tms_pedido_etiquetaCreateInput, tms_pedido_etiquetaUncheckedCreateInput>
  }


  /**
   * tms_pedido_etiqueta createMany
   */
  export type tms_pedido_etiquetaCreateManyArgs = {
    /**
     * The data used to create many tms_pedido_etiquetas.
     * 
    **/
    data: Enumerable<tms_pedido_etiquetaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tms_pedido_etiqueta update
   */
  export type tms_pedido_etiquetaUpdateArgs = {
    /**
     * Select specific fields to fetch from the tms_pedido_etiqueta
     * 
    **/
    select?: tms_pedido_etiquetaSelect | null
    /**
     * The data needed to update a tms_pedido_etiqueta.
     * 
    **/
    data: XOR<tms_pedido_etiquetaUpdateInput, tms_pedido_etiquetaUncheckedUpdateInput>
    /**
     * Choose, which tms_pedido_etiqueta to update.
     * 
    **/
    where: tms_pedido_etiquetaWhereUniqueInput
  }


  /**
   * tms_pedido_etiqueta updateMany
   */
  export type tms_pedido_etiquetaUpdateManyArgs = {
    /**
     * The data used to update tms_pedido_etiquetas.
     * 
    **/
    data: XOR<tms_pedido_etiquetaUpdateManyMutationInput, tms_pedido_etiquetaUncheckedUpdateManyInput>
    /**
     * Filter which tms_pedido_etiquetas to update
     * 
    **/
    where?: tms_pedido_etiquetaWhereInput
  }


  /**
   * tms_pedido_etiqueta upsert
   */
  export type tms_pedido_etiquetaUpsertArgs = {
    /**
     * Select specific fields to fetch from the tms_pedido_etiqueta
     * 
    **/
    select?: tms_pedido_etiquetaSelect | null
    /**
     * The filter to search for the tms_pedido_etiqueta to update in case it exists.
     * 
    **/
    where: tms_pedido_etiquetaWhereUniqueInput
    /**
     * In case the tms_pedido_etiqueta found by the `where` argument doesn't exist, create a new tms_pedido_etiqueta with this data.
     * 
    **/
    create: XOR<tms_pedido_etiquetaCreateInput, tms_pedido_etiquetaUncheckedCreateInput>
    /**
     * In case the tms_pedido_etiqueta was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<tms_pedido_etiquetaUpdateInput, tms_pedido_etiquetaUncheckedUpdateInput>
  }


  /**
   * tms_pedido_etiqueta delete
   */
  export type tms_pedido_etiquetaDeleteArgs = {
    /**
     * Select specific fields to fetch from the tms_pedido_etiqueta
     * 
    **/
    select?: tms_pedido_etiquetaSelect | null
    /**
     * Filter which tms_pedido_etiqueta to delete.
     * 
    **/
    where: tms_pedido_etiquetaWhereUniqueInput
  }


  /**
   * tms_pedido_etiqueta deleteMany
   */
  export type tms_pedido_etiquetaDeleteManyArgs = {
    /**
     * Filter which tms_pedido_etiquetas to delete
     * 
    **/
    where?: tms_pedido_etiquetaWhereInput
  }


  /**
   * tms_pedido_etiqueta: findUniqueOrThrow
   */
  export type tms_pedido_etiquetaFindUniqueOrThrowArgs = tms_pedido_etiquetaFindUniqueArgsBase
      

  /**
   * tms_pedido_etiqueta: findFirstOrThrow
   */
  export type tms_pedido_etiquetaFindFirstOrThrowArgs = tms_pedido_etiquetaFindFirstArgsBase
      

  /**
   * tms_pedido_etiqueta without action
   */
  export type tms_pedido_etiquetaArgs = {
    /**
     * Select specific fields to fetch from the tms_pedido_etiqueta
     * 
    **/
    select?: tms_pedido_etiquetaSelect | null
  }



  /**
   * Model jad_log
   */


  export type AggregateJad_log = {
    _count: Jad_logCountAggregateOutputType | null
    _avg: Jad_logAvgAggregateOutputType | null
    _sum: Jad_logSumAggregateOutputType | null
    _min: Jad_logMinAggregateOutputType | null
    _max: Jad_logMaxAggregateOutputType | null
  }

  export type Jad_logAvgAggregateOutputType = {
    id: number | null
  }

  export type Jad_logSumAggregateOutputType = {
    id: number | null
  }

  export type Jad_logMinAggregateOutputType = {
    id: number | null
    identificacao: string | null
    cep: string | null
    endereco: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
  }

  export type Jad_logMaxAggregateOutputType = {
    id: number | null
    identificacao: string | null
    cep: string | null
    endereco: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
  }

  export type Jad_logCountAggregateOutputType = {
    id: number
    identificacao: number
    cep: number
    endereco: number
    bairro: number
    cidade: number
    estado: number
    _all: number
  }


  export type Jad_logAvgAggregateInputType = {
    id?: true
  }

  export type Jad_logSumAggregateInputType = {
    id?: true
  }

  export type Jad_logMinAggregateInputType = {
    id?: true
    identificacao?: true
    cep?: true
    endereco?: true
    bairro?: true
    cidade?: true
    estado?: true
  }

  export type Jad_logMaxAggregateInputType = {
    id?: true
    identificacao?: true
    cep?: true
    endereco?: true
    bairro?: true
    cidade?: true
    estado?: true
  }

  export type Jad_logCountAggregateInputType = {
    id?: true
    identificacao?: true
    cep?: true
    endereco?: true
    bairro?: true
    cidade?: true
    estado?: true
    _all?: true
  }

  export type Jad_logAggregateArgs = {
    /**
     * Filter which jad_log to aggregate.
     * 
    **/
    where?: jad_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jad_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<jad_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: jad_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jad_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jad_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jad_logs
    **/
    _count?: true | Jad_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jad_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jad_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jad_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jad_logMaxAggregateInputType
  }

  export type GetJad_logAggregateType<T extends Jad_logAggregateArgs> = {
        [P in keyof T & keyof AggregateJad_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJad_log[P]>
      : GetScalarType<T[P], AggregateJad_log[P]>
  }




  export type Jad_logGroupByArgs = {
    where?: jad_logWhereInput
    orderBy?: Enumerable<jad_logOrderByWithAggregationInput>
    by: Array<Jad_logScalarFieldEnum>
    having?: jad_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jad_logCountAggregateInputType | true
    _avg?: Jad_logAvgAggregateInputType
    _sum?: Jad_logSumAggregateInputType
    _min?: Jad_logMinAggregateInputType
    _max?: Jad_logMaxAggregateInputType
  }


  export type Jad_logGroupByOutputType = {
    id: number
    identificacao: string | null
    cep: string | null
    endereco: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    _count: Jad_logCountAggregateOutputType | null
    _avg: Jad_logAvgAggregateOutputType | null
    _sum: Jad_logSumAggregateOutputType | null
    _min: Jad_logMinAggregateOutputType | null
    _max: Jad_logMaxAggregateOutputType | null
  }

  type GetJad_logGroupByPayload<T extends Jad_logGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Jad_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jad_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jad_logGroupByOutputType[P]>
            : GetScalarType<T[P], Jad_logGroupByOutputType[P]>
        }
      >
    >


  export type jad_logSelect = {
    id?: boolean
    identificacao?: boolean
    cep?: boolean
    endereco?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
  }

  export type jad_logGetPayload<
    S extends boolean | null | undefined | jad_logArgs,
    U = keyof S
      > = S extends true
        ? jad_log
    : S extends undefined
    ? never
    : S extends jad_logArgs | jad_logFindManyArgs
    ?'include' extends U
    ? jad_log 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof jad_log ? jad_log[P] : never
  } 
    : jad_log
  : jad_log


  type jad_logCountArgs = Merge<
    Omit<jad_logFindManyArgs, 'select' | 'include'> & {
      select?: Jad_logCountAggregateInputType | true
    }
  >

  export interface jad_logDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Jad_log that matches the filter.
     * @param {jad_logFindUniqueArgs} args - Arguments to find a Jad_log
     * @example
     * // Get one Jad_log
     * const jad_log = await prisma.jad_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends jad_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, jad_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'jad_log'> extends True ? CheckSelect<T, Prisma__jad_logClient<jad_log>, Prisma__jad_logClient<jad_logGetPayload<T>>> : CheckSelect<T, Prisma__jad_logClient<jad_log | null >, Prisma__jad_logClient<jad_logGetPayload<T> | null >>

    /**
     * Find the first Jad_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jad_logFindFirstArgs} args - Arguments to find a Jad_log
     * @example
     * // Get one Jad_log
     * const jad_log = await prisma.jad_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends jad_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, jad_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'jad_log'> extends True ? CheckSelect<T, Prisma__jad_logClient<jad_log>, Prisma__jad_logClient<jad_logGetPayload<T>>> : CheckSelect<T, Prisma__jad_logClient<jad_log | null >, Prisma__jad_logClient<jad_logGetPayload<T> | null >>

    /**
     * Find zero or more Jad_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jad_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jad_logs
     * const jad_logs = await prisma.jad_log.findMany()
     * 
     * // Get first 10 Jad_logs
     * const jad_logs = await prisma.jad_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jad_logWithIdOnly = await prisma.jad_log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends jad_logFindManyArgs>(
      args?: SelectSubset<T, jad_logFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<jad_log>>, PrismaPromise<Array<jad_logGetPayload<T>>>>

    /**
     * Create a Jad_log.
     * @param {jad_logCreateArgs} args - Arguments to create a Jad_log.
     * @example
     * // Create one Jad_log
     * const Jad_log = await prisma.jad_log.create({
     *   data: {
     *     // ... data to create a Jad_log
     *   }
     * })
     * 
    **/
    create<T extends jad_logCreateArgs>(
      args: SelectSubset<T, jad_logCreateArgs>
    ): CheckSelect<T, Prisma__jad_logClient<jad_log>, Prisma__jad_logClient<jad_logGetPayload<T>>>

    /**
     * Create many Jad_logs.
     *     @param {jad_logCreateManyArgs} args - Arguments to create many Jad_logs.
     *     @example
     *     // Create many Jad_logs
     *     const jad_log = await prisma.jad_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends jad_logCreateManyArgs>(
      args?: SelectSubset<T, jad_logCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Jad_log.
     * @param {jad_logDeleteArgs} args - Arguments to delete one Jad_log.
     * @example
     * // Delete one Jad_log
     * const Jad_log = await prisma.jad_log.delete({
     *   where: {
     *     // ... filter to delete one Jad_log
     *   }
     * })
     * 
    **/
    delete<T extends jad_logDeleteArgs>(
      args: SelectSubset<T, jad_logDeleteArgs>
    ): CheckSelect<T, Prisma__jad_logClient<jad_log>, Prisma__jad_logClient<jad_logGetPayload<T>>>

    /**
     * Update one Jad_log.
     * @param {jad_logUpdateArgs} args - Arguments to update one Jad_log.
     * @example
     * // Update one Jad_log
     * const jad_log = await prisma.jad_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends jad_logUpdateArgs>(
      args: SelectSubset<T, jad_logUpdateArgs>
    ): CheckSelect<T, Prisma__jad_logClient<jad_log>, Prisma__jad_logClient<jad_logGetPayload<T>>>

    /**
     * Delete zero or more Jad_logs.
     * @param {jad_logDeleteManyArgs} args - Arguments to filter Jad_logs to delete.
     * @example
     * // Delete a few Jad_logs
     * const { count } = await prisma.jad_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends jad_logDeleteManyArgs>(
      args?: SelectSubset<T, jad_logDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jad_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jad_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jad_logs
     * const jad_log = await prisma.jad_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends jad_logUpdateManyArgs>(
      args: SelectSubset<T, jad_logUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Jad_log.
     * @param {jad_logUpsertArgs} args - Arguments to update or create a Jad_log.
     * @example
     * // Update or create a Jad_log
     * const jad_log = await prisma.jad_log.upsert({
     *   create: {
     *     // ... data to create a Jad_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jad_log we want to update
     *   }
     * })
    **/
    upsert<T extends jad_logUpsertArgs>(
      args: SelectSubset<T, jad_logUpsertArgs>
    ): CheckSelect<T, Prisma__jad_logClient<jad_log>, Prisma__jad_logClient<jad_logGetPayload<T>>>

    /**
     * Find one Jad_log that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {jad_logFindUniqueOrThrowArgs} args - Arguments to find a Jad_log
     * @example
     * // Get one Jad_log
     * const jad_log = await prisma.jad_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends jad_logFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, jad_logFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__jad_logClient<jad_log>, Prisma__jad_logClient<jad_logGetPayload<T>>>

    /**
     * Find the first Jad_log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jad_logFindFirstOrThrowArgs} args - Arguments to find a Jad_log
     * @example
     * // Get one Jad_log
     * const jad_log = await prisma.jad_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends jad_logFindFirstOrThrowArgs>(
      args?: SelectSubset<T, jad_logFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__jad_logClient<jad_log>, Prisma__jad_logClient<jad_logGetPayload<T>>>

    /**
     * Count the number of Jad_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jad_logCountArgs} args - Arguments to filter Jad_logs to count.
     * @example
     * // Count the number of Jad_logs
     * const count = await prisma.jad_log.count({
     *   where: {
     *     // ... the filter for the Jad_logs we want to count
     *   }
     * })
    **/
    count<T extends jad_logCountArgs>(
      args?: Subset<T, jad_logCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jad_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jad_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jad_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Jad_logAggregateArgs>(args: Subset<T, Jad_logAggregateArgs>): PrismaPromise<GetJad_logAggregateType<T>>

    /**
     * Group by Jad_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jad_logGroupByArgs} args - Group by arguments.
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
      T extends Jad_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Jad_logGroupByArgs['orderBy'] }
        : { orderBy?: Jad_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Jad_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJad_logGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for jad_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__jad_logClient<T> implements PrismaPromise<T> {
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
   * jad_log base type for findUnique actions
   */
  export type jad_logFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the jad_log
     * 
    **/
    select?: jad_logSelect | null
    /**
     * Filter, which jad_log to fetch.
     * 
    **/
    where: jad_logWhereUniqueInput
  }

  /**
   * jad_log: findUnique
   */
  export interface jad_logFindUniqueArgs extends jad_logFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * jad_log base type for findFirst actions
   */
  export type jad_logFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the jad_log
     * 
    **/
    select?: jad_logSelect | null
    /**
     * Filter, which jad_log to fetch.
     * 
    **/
    where?: jad_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jad_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<jad_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jad_logs.
     * 
    **/
    cursor?: jad_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jad_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jad_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jad_logs.
     * 
    **/
    distinct?: Enumerable<Jad_logScalarFieldEnum>
  }

  /**
   * jad_log: findFirst
   */
  export interface jad_logFindFirstArgs extends jad_logFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * jad_log findMany
   */
  export type jad_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the jad_log
     * 
    **/
    select?: jad_logSelect | null
    /**
     * Filter, which jad_logs to fetch.
     * 
    **/
    where?: jad_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jad_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<jad_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jad_logs.
     * 
    **/
    cursor?: jad_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jad_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jad_logs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Jad_logScalarFieldEnum>
  }


  /**
   * jad_log create
   */
  export type jad_logCreateArgs = {
    /**
     * Select specific fields to fetch from the jad_log
     * 
    **/
    select?: jad_logSelect | null
    /**
     * The data needed to create a jad_log.
     * 
    **/
    data: XOR<jad_logCreateInput, jad_logUncheckedCreateInput>
  }


  /**
   * jad_log createMany
   */
  export type jad_logCreateManyArgs = {
    /**
     * The data used to create many jad_logs.
     * 
    **/
    data: Enumerable<jad_logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * jad_log update
   */
  export type jad_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the jad_log
     * 
    **/
    select?: jad_logSelect | null
    /**
     * The data needed to update a jad_log.
     * 
    **/
    data: XOR<jad_logUpdateInput, jad_logUncheckedUpdateInput>
    /**
     * Choose, which jad_log to update.
     * 
    **/
    where: jad_logWhereUniqueInput
  }


  /**
   * jad_log updateMany
   */
  export type jad_logUpdateManyArgs = {
    /**
     * The data used to update jad_logs.
     * 
    **/
    data: XOR<jad_logUpdateManyMutationInput, jad_logUncheckedUpdateManyInput>
    /**
     * Filter which jad_logs to update
     * 
    **/
    where?: jad_logWhereInput
  }


  /**
   * jad_log upsert
   */
  export type jad_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the jad_log
     * 
    **/
    select?: jad_logSelect | null
    /**
     * The filter to search for the jad_log to update in case it exists.
     * 
    **/
    where: jad_logWhereUniqueInput
    /**
     * In case the jad_log found by the `where` argument doesn't exist, create a new jad_log with this data.
     * 
    **/
    create: XOR<jad_logCreateInput, jad_logUncheckedCreateInput>
    /**
     * In case the jad_log was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<jad_logUpdateInput, jad_logUncheckedUpdateInput>
  }


  /**
   * jad_log delete
   */
  export type jad_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the jad_log
     * 
    **/
    select?: jad_logSelect | null
    /**
     * Filter which jad_log to delete.
     * 
    **/
    where: jad_logWhereUniqueInput
  }


  /**
   * jad_log deleteMany
   */
  export type jad_logDeleteManyArgs = {
    /**
     * Filter which jad_logs to delete
     * 
    **/
    where?: jad_logWhereInput
  }


  /**
   * jad_log: findUniqueOrThrow
   */
  export type jad_logFindUniqueOrThrowArgs = jad_logFindUniqueArgsBase
      

  /**
   * jad_log: findFirstOrThrow
   */
  export type jad_logFindFirstOrThrowArgs = jad_logFindFirstArgsBase
      

  /**
   * jad_log without action
   */
  export type jad_logArgs = {
    /**
     * Select specific fields to fetch from the jad_log
     * 
    **/
    select?: jad_logSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Jad_logScalarFieldEnum: {
    id: 'id',
    identificacao: 'identificacao',
    cep: 'cep',
    endereco: 'endereco',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado'
  };

  export type Jad_logScalarFieldEnum = (typeof Jad_logScalarFieldEnum)[keyof typeof Jad_logScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const Tms_pedido_etiquetaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    id_pedido: 'id_pedido',
    id_integ_pedido: 'id_integ_pedido',
    id_pessoa: 'id_pessoa',
    id_pessoa_origem: 'id_pessoa_origem',
    status: 'status',
    dh_inc: 'dh_inc',
    dh_conc: 'dh_conc',
    quantidade: 'quantidade'
  };

  export type Tms_pedido_etiquetaScalarFieldEnum = (typeof Tms_pedido_etiquetaScalarFieldEnum)[keyof typeof Tms_pedido_etiquetaScalarFieldEnum]


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


  export type tms_pedido_etiquetaWhereInput = {
    AND?: Enumerable<tms_pedido_etiquetaWhereInput>
    OR?: Enumerable<tms_pedido_etiquetaWhereInput>
    NOT?: Enumerable<tms_pedido_etiquetaWhereInput>
    id?: IntFilter | number
    nome?: StringNullableFilter | string | null
    id_pedido?: IntNullableFilter | number | null
    id_integ_pedido?: IntNullableFilter | number | null
    id_pessoa?: IntNullableFilter | number | null
    id_pessoa_origem?: IntNullableFilter | number | null
    status?: StringNullableFilter | string | null
    dh_inc?: DateTimeNullableFilter | Date | string | null
    dh_conc?: DateTimeNullableFilter | Date | string | null
    quantidade?: IntNullableFilter | number | null
  }

  export type tms_pedido_etiquetaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_pedido?: SortOrder
    id_integ_pedido?: SortOrder
    id_pessoa?: SortOrder
    id_pessoa_origem?: SortOrder
    status?: SortOrder
    dh_inc?: SortOrder
    dh_conc?: SortOrder
    quantidade?: SortOrder
  }

  export type tms_pedido_etiquetaWhereUniqueInput = {
    id?: number
  }

  export type tms_pedido_etiquetaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_pedido?: SortOrder
    id_integ_pedido?: SortOrder
    id_pessoa?: SortOrder
    id_pessoa_origem?: SortOrder
    status?: SortOrder
    dh_inc?: SortOrder
    dh_conc?: SortOrder
    quantidade?: SortOrder
    _count?: tms_pedido_etiquetaCountOrderByAggregateInput
    _avg?: tms_pedido_etiquetaAvgOrderByAggregateInput
    _max?: tms_pedido_etiquetaMaxOrderByAggregateInput
    _min?: tms_pedido_etiquetaMinOrderByAggregateInput
    _sum?: tms_pedido_etiquetaSumOrderByAggregateInput
  }

  export type tms_pedido_etiquetaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tms_pedido_etiquetaScalarWhereWithAggregatesInput>
    OR?: Enumerable<tms_pedido_etiquetaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tms_pedido_etiquetaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringNullableWithAggregatesFilter | string | null
    id_pedido?: IntNullableWithAggregatesFilter | number | null
    id_integ_pedido?: IntNullableWithAggregatesFilter | number | null
    id_pessoa?: IntNullableWithAggregatesFilter | number | null
    id_pessoa_origem?: IntNullableWithAggregatesFilter | number | null
    status?: StringNullableWithAggregatesFilter | string | null
    dh_inc?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dh_conc?: DateTimeNullableWithAggregatesFilter | Date | string | null
    quantidade?: IntNullableWithAggregatesFilter | number | null
  }

  export type jad_logWhereInput = {
    AND?: Enumerable<jad_logWhereInput>
    OR?: Enumerable<jad_logWhereInput>
    NOT?: Enumerable<jad_logWhereInput>
    id?: IntFilter | number
    identificacao?: StringNullableFilter | string | null
    cep?: StringNullableFilter | string | null
    endereco?: StringNullableFilter | string | null
    bairro?: StringNullableFilter | string | null
    cidade?: StringNullableFilter | string | null
    estado?: StringNullableFilter | string | null
  }

  export type jad_logOrderByWithRelationInput = {
    id?: SortOrder
    identificacao?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type jad_logWhereUniqueInput = {
    id?: number
  }

  export type jad_logOrderByWithAggregationInput = {
    id?: SortOrder
    identificacao?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    _count?: jad_logCountOrderByAggregateInput
    _avg?: jad_logAvgOrderByAggregateInput
    _max?: jad_logMaxOrderByAggregateInput
    _min?: jad_logMinOrderByAggregateInput
    _sum?: jad_logSumOrderByAggregateInput
  }

  export type jad_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<jad_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<jad_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<jad_logScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    identificacao?: StringNullableWithAggregatesFilter | string | null
    cep?: StringNullableWithAggregatesFilter | string | null
    endereco?: StringNullableWithAggregatesFilter | string | null
    bairro?: StringNullableWithAggregatesFilter | string | null
    cidade?: StringNullableWithAggregatesFilter | string | null
    estado?: StringNullableWithAggregatesFilter | string | null
  }

  export type tms_pedido_etiquetaCreateInput = {
    nome?: string | null
    id_pedido?: number | null
    id_integ_pedido?: number | null
    id_pessoa?: number | null
    id_pessoa_origem?: number | null
    status?: string | null
    dh_inc?: Date | string | null
    dh_conc?: Date | string | null
    quantidade?: number | null
  }

  export type tms_pedido_etiquetaUncheckedCreateInput = {
    id?: number
    nome?: string | null
    id_pedido?: number | null
    id_integ_pedido?: number | null
    id_pessoa?: number | null
    id_pessoa_origem?: number | null
    status?: string | null
    dh_inc?: Date | string | null
    dh_conc?: Date | string | null
    quantidade?: number | null
  }

  export type tms_pedido_etiquetaUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    id_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    id_integ_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    id_pessoa?: NullableIntFieldUpdateOperationsInput | number | null
    id_pessoa_origem?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    dh_inc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dh_conc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tms_pedido_etiquetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    id_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    id_integ_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    id_pessoa?: NullableIntFieldUpdateOperationsInput | number | null
    id_pessoa_origem?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    dh_inc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dh_conc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tms_pedido_etiquetaCreateManyInput = {
    id?: number
    nome?: string | null
    id_pedido?: number | null
    id_integ_pedido?: number | null
    id_pessoa?: number | null
    id_pessoa_origem?: number | null
    status?: string | null
    dh_inc?: Date | string | null
    dh_conc?: Date | string | null
    quantidade?: number | null
  }

  export type tms_pedido_etiquetaUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    id_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    id_integ_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    id_pessoa?: NullableIntFieldUpdateOperationsInput | number | null
    id_pessoa_origem?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    dh_inc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dh_conc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tms_pedido_etiquetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    id_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    id_integ_pedido?: NullableIntFieldUpdateOperationsInput | number | null
    id_pessoa?: NullableIntFieldUpdateOperationsInput | number | null
    id_pessoa_origem?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    dh_inc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dh_conc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jad_logCreateInput = {
    identificacao?: string | null
    cep?: string | null
    endereco?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type jad_logUncheckedCreateInput = {
    id?: number
    identificacao?: string | null
    cep?: string | null
    endereco?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type jad_logUpdateInput = {
    identificacao?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jad_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificacao?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jad_logCreateManyInput = {
    id?: number
    identificacao?: string | null
    cep?: string | null
    endereco?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type jad_logUpdateManyMutationInput = {
    identificacao?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jad_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificacao?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
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
    mode?: QueryMode
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

  export type tms_pedido_etiquetaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_pedido?: SortOrder
    id_integ_pedido?: SortOrder
    id_pessoa?: SortOrder
    id_pessoa_origem?: SortOrder
    status?: SortOrder
    dh_inc?: SortOrder
    dh_conc?: SortOrder
    quantidade?: SortOrder
  }

  export type tms_pedido_etiquetaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_integ_pedido?: SortOrder
    id_pessoa?: SortOrder
    id_pessoa_origem?: SortOrder
    quantidade?: SortOrder
  }

  export type tms_pedido_etiquetaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_pedido?: SortOrder
    id_integ_pedido?: SortOrder
    id_pessoa?: SortOrder
    id_pessoa_origem?: SortOrder
    status?: SortOrder
    dh_inc?: SortOrder
    dh_conc?: SortOrder
    quantidade?: SortOrder
  }

  export type tms_pedido_etiquetaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_pedido?: SortOrder
    id_integ_pedido?: SortOrder
    id_pessoa?: SortOrder
    id_pessoa_origem?: SortOrder
    status?: SortOrder
    dh_inc?: SortOrder
    dh_conc?: SortOrder
    quantidade?: SortOrder
  }

  export type tms_pedido_etiquetaSumOrderByAggregateInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_integ_pedido?: SortOrder
    id_pessoa?: SortOrder
    id_pessoa_origem?: SortOrder
    quantidade?: SortOrder
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
    mode?: QueryMode
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

  export type jad_logCountOrderByAggregateInput = {
    id?: SortOrder
    identificacao?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type jad_logAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type jad_logMaxOrderByAggregateInput = {
    id?: SortOrder
    identificacao?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type jad_logMinOrderByAggregateInput = {
    id?: SortOrder
    identificacao?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type jad_logSumOrderByAggregateInput = {
    id?: SortOrder
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