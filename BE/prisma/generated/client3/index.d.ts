
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
 * Model itemsSchema
 * 
 */
export type itemsSchema = {
  name: string | null
  value: number | null
  id: number
}

/**
 * Model itemsTesting
 * 
 */
export type itemsTesting = {
  name: string | null
  country: string | null
  id: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ItemsSchemas
 * const itemsSchemas = await prisma.itemsSchema.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
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
   * // Fetch zero or more ItemsSchemas
   * const itemsSchemas = await prisma.itemsSchema.findMany()
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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.itemsSchema`: Exposes CRUD operations for the **itemsSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemsSchemas
    * const itemsSchemas = await prisma.itemsSchema.findMany()
    * ```
    */
  get itemsSchema(): Prisma.itemsSchemaDelegate<GlobalReject>;

  /**
   * `prisma.itemsTesting`: Exposes CRUD operations for the **itemsTesting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemsTestings
    * const itemsTestings = await prisma.itemsTesting.findMany()
    * ```
    */
  get itemsTesting(): Prisma.itemsTestingDelegate<GlobalReject>;
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
   * Prisma Client JS version: 4.4.0
   * Query Engine version: f352a33b70356f46311da8b00d83386dd9f145d6
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
  : T extends Uint8Array
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


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

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
    itemsSchema: 'itemsSchema',
    itemsTesting: 'itemsTesting'
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
   * Model itemsSchema
   */


  export type AggregateItemsSchema = {
    _count: ItemsSchemaCountAggregateOutputType | null
    _avg: ItemsSchemaAvgAggregateOutputType | null
    _sum: ItemsSchemaSumAggregateOutputType | null
    _min: ItemsSchemaMinAggregateOutputType | null
    _max: ItemsSchemaMaxAggregateOutputType | null
  }

  export type ItemsSchemaAvgAggregateOutputType = {
    value: number | null
    id: number | null
  }

  export type ItemsSchemaSumAggregateOutputType = {
    value: number | null
    id: number | null
  }

  export type ItemsSchemaMinAggregateOutputType = {
    name: string | null
    value: number | null
    id: number | null
  }

  export type ItemsSchemaMaxAggregateOutputType = {
    name: string | null
    value: number | null
    id: number | null
  }

  export type ItemsSchemaCountAggregateOutputType = {
    name: number
    value: number
    id: number
    _all: number
  }


  export type ItemsSchemaAvgAggregateInputType = {
    value?: true
    id?: true
  }

  export type ItemsSchemaSumAggregateInputType = {
    value?: true
    id?: true
  }

  export type ItemsSchemaMinAggregateInputType = {
    name?: true
    value?: true
    id?: true
  }

  export type ItemsSchemaMaxAggregateInputType = {
    name?: true
    value?: true
    id?: true
  }

  export type ItemsSchemaCountAggregateInputType = {
    name?: true
    value?: true
    id?: true
    _all?: true
  }

  export type ItemsSchemaAggregateArgs = {
    /**
     * Filter which itemsSchema to aggregate.
     * 
    **/
    where?: itemsSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsSchemas to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: itemsSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsSchemas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsSchemas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itemsSchemas
    **/
    _count?: true | ItemsSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsSchemaMaxAggregateInputType
  }

  export type GetItemsSchemaAggregateType<T extends ItemsSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateItemsSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemsSchema[P]>
      : GetScalarType<T[P], AggregateItemsSchema[P]>
  }




  export type ItemsSchemaGroupByArgs = {
    where?: itemsSchemaWhereInput
    orderBy?: Enumerable<itemsSchemaOrderByWithAggregationInput>
    by: Array<ItemsSchemaScalarFieldEnum>
    having?: itemsSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsSchemaCountAggregateInputType | true
    _avg?: ItemsSchemaAvgAggregateInputType
    _sum?: ItemsSchemaSumAggregateInputType
    _min?: ItemsSchemaMinAggregateInputType
    _max?: ItemsSchemaMaxAggregateInputType
  }


  export type ItemsSchemaGroupByOutputType = {
    name: string | null
    value: number | null
    id: number
    _count: ItemsSchemaCountAggregateOutputType | null
    _avg: ItemsSchemaAvgAggregateOutputType | null
    _sum: ItemsSchemaSumAggregateOutputType | null
    _min: ItemsSchemaMinAggregateOutputType | null
    _max: ItemsSchemaMaxAggregateOutputType | null
  }

  type GetItemsSchemaGroupByPayload<T extends ItemsSchemaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemsSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsSchemaGroupByOutputType[P]>
        }
      >
    >


  export type itemsSchemaSelect = {
    name?: boolean
    value?: boolean
    id?: boolean
  }

  export type itemsSchemaGetPayload<
    S extends boolean | null | undefined | itemsSchemaArgs,
    U = keyof S
      > = S extends true
        ? itemsSchema
    : S extends undefined
    ? never
    : S extends itemsSchemaArgs | itemsSchemaFindManyArgs
    ?'include' extends U
    ? itemsSchema 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof itemsSchema ? itemsSchema[P] : never
  } 
    : itemsSchema
  : itemsSchema


  type itemsSchemaCountArgs = Merge<
    Omit<itemsSchemaFindManyArgs, 'select' | 'include'> & {
      select?: ItemsSchemaCountAggregateInputType | true
    }
  >

  export interface itemsSchemaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ItemsSchema that matches the filter.
     * @param {itemsSchemaFindUniqueArgs} args - Arguments to find a ItemsSchema
     * @example
     * // Get one ItemsSchema
     * const itemsSchema = await prisma.itemsSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends itemsSchemaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, itemsSchemaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'itemsSchema'> extends True ? CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T>>> : CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema | null, null>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T> | null, null>>

    /**
     * Find the first ItemsSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsSchemaFindFirstArgs} args - Arguments to find a ItemsSchema
     * @example
     * // Get one ItemsSchema
     * const itemsSchema = await prisma.itemsSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends itemsSchemaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, itemsSchemaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'itemsSchema'> extends True ? CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T>>> : CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema | null, null>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T> | null, null>>

    /**
     * Find zero or more ItemsSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsSchemaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemsSchemas
     * const itemsSchemas = await prisma.itemsSchema.findMany()
     * 
     * // Get first 10 ItemsSchemas
     * const itemsSchemas = await prisma.itemsSchema.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const itemsSchemaWithNameOnly = await prisma.itemsSchema.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends itemsSchemaFindManyArgs>(
      args?: SelectSubset<T, itemsSchemaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<itemsSchema>>, PrismaPromise<Array<itemsSchemaGetPayload<T>>>>

    /**
     * Create a ItemsSchema.
     * @param {itemsSchemaCreateArgs} args - Arguments to create a ItemsSchema.
     * @example
     * // Create one ItemsSchema
     * const ItemsSchema = await prisma.itemsSchema.create({
     *   data: {
     *     // ... data to create a ItemsSchema
     *   }
     * })
     * 
    **/
    create<T extends itemsSchemaCreateArgs>(
      args: SelectSubset<T, itemsSchemaCreateArgs>
    ): CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T>>>

    /**
     * Create many ItemsSchemas.
     *     @param {itemsSchemaCreateManyArgs} args - Arguments to create many ItemsSchemas.
     *     @example
     *     // Create many ItemsSchemas
     *     const itemsSchema = await prisma.itemsSchema.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends itemsSchemaCreateManyArgs>(
      args?: SelectSubset<T, itemsSchemaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ItemsSchema.
     * @param {itemsSchemaDeleteArgs} args - Arguments to delete one ItemsSchema.
     * @example
     * // Delete one ItemsSchema
     * const ItemsSchema = await prisma.itemsSchema.delete({
     *   where: {
     *     // ... filter to delete one ItemsSchema
     *   }
     * })
     * 
    **/
    delete<T extends itemsSchemaDeleteArgs>(
      args: SelectSubset<T, itemsSchemaDeleteArgs>
    ): CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T>>>

    /**
     * Update one ItemsSchema.
     * @param {itemsSchemaUpdateArgs} args - Arguments to update one ItemsSchema.
     * @example
     * // Update one ItemsSchema
     * const itemsSchema = await prisma.itemsSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends itemsSchemaUpdateArgs>(
      args: SelectSubset<T, itemsSchemaUpdateArgs>
    ): CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T>>>

    /**
     * Delete zero or more ItemsSchemas.
     * @param {itemsSchemaDeleteManyArgs} args - Arguments to filter ItemsSchemas to delete.
     * @example
     * // Delete a few ItemsSchemas
     * const { count } = await prisma.itemsSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends itemsSchemaDeleteManyArgs>(
      args?: SelectSubset<T, itemsSchemaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemsSchemas
     * const itemsSchema = await prisma.itemsSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends itemsSchemaUpdateManyArgs>(
      args: SelectSubset<T, itemsSchemaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemsSchema.
     * @param {itemsSchemaUpsertArgs} args - Arguments to update or create a ItemsSchema.
     * @example
     * // Update or create a ItemsSchema
     * const itemsSchema = await prisma.itemsSchema.upsert({
     *   create: {
     *     // ... data to create a ItemsSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemsSchema we want to update
     *   }
     * })
    **/
    upsert<T extends itemsSchemaUpsertArgs>(
      args: SelectSubset<T, itemsSchemaUpsertArgs>
    ): CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T>>>

    /**
     * Find one ItemsSchema that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {itemsSchemaFindUniqueOrThrowArgs} args - Arguments to find a ItemsSchema
     * @example
     * // Get one ItemsSchema
     * const itemsSchema = await prisma.itemsSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends itemsSchemaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, itemsSchemaFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T>>>

    /**
     * Find the first ItemsSchema that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsSchemaFindFirstOrThrowArgs} args - Arguments to find a ItemsSchema
     * @example
     * // Get one ItemsSchema
     * const itemsSchema = await prisma.itemsSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends itemsSchemaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, itemsSchemaFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__itemsSchemaClient<itemsSchema>, Prisma__itemsSchemaClient<itemsSchemaGetPayload<T>>>

    /**
     * Count the number of ItemsSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsSchemaCountArgs} args - Arguments to filter ItemsSchemas to count.
     * @example
     * // Count the number of ItemsSchemas
     * const count = await prisma.itemsSchema.count({
     *   where: {
     *     // ... the filter for the ItemsSchemas we want to count
     *   }
     * })
    **/
    count<T extends itemsSchemaCountArgs>(
      args?: Subset<T, itemsSchemaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemsSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemsSchemaAggregateArgs>(args: Subset<T, ItemsSchemaAggregateArgs>): PrismaPromise<GetItemsSchemaAggregateType<T>>

    /**
     * Group by ItemsSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsSchemaGroupByArgs} args - Group by arguments.
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
      T extends ItemsSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsSchemaGroupByArgs['orderBy'] }
        : { orderBy?: ItemsSchemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemsSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsSchemaGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for itemsSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__itemsSchemaClient<T, Null = never> implements PrismaPromise<T> {
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
   * itemsSchema base type for findUnique actions
   */
  export type itemsSchemaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the itemsSchema
     * 
    **/
    select?: itemsSchemaSelect | null
    /**
     * Filter, which itemsSchema to fetch.
     * 
    **/
    where: itemsSchemaWhereUniqueInput
  }

  /**
   * itemsSchema: findUnique
   */
  export interface itemsSchemaFindUniqueArgs extends itemsSchemaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * itemsSchema base type for findFirst actions
   */
  export type itemsSchemaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the itemsSchema
     * 
    **/
    select?: itemsSchemaSelect | null
    /**
     * Filter, which itemsSchema to fetch.
     * 
    **/
    where?: itemsSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsSchemas to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemsSchemas.
     * 
    **/
    cursor?: itemsSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsSchemas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsSchemas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemsSchemas.
     * 
    **/
    distinct?: Enumerable<ItemsSchemaScalarFieldEnum>
  }

  /**
   * itemsSchema: findFirst
   */
  export interface itemsSchemaFindFirstArgs extends itemsSchemaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * itemsSchema findMany
   */
  export type itemsSchemaFindManyArgs = {
    /**
     * Select specific fields to fetch from the itemsSchema
     * 
    **/
    select?: itemsSchemaSelect | null
    /**
     * Filter, which itemsSchemas to fetch.
     * 
    **/
    where?: itemsSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsSchemas to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itemsSchemas.
     * 
    **/
    cursor?: itemsSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsSchemas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsSchemas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemsSchemaScalarFieldEnum>
  }


  /**
   * itemsSchema create
   */
  export type itemsSchemaCreateArgs = {
    /**
     * Select specific fields to fetch from the itemsSchema
     * 
    **/
    select?: itemsSchemaSelect | null
    /**
     * The data needed to create a itemsSchema.
     * 
    **/
    data: XOR<itemsSchemaCreateInput, itemsSchemaUncheckedCreateInput>
  }


  /**
   * itemsSchema createMany
   */
  export type itemsSchemaCreateManyArgs = {
    /**
     * The data used to create many itemsSchemas.
     * 
    **/
    data: Enumerable<itemsSchemaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * itemsSchema update
   */
  export type itemsSchemaUpdateArgs = {
    /**
     * Select specific fields to fetch from the itemsSchema
     * 
    **/
    select?: itemsSchemaSelect | null
    /**
     * The data needed to update a itemsSchema.
     * 
    **/
    data: XOR<itemsSchemaUpdateInput, itemsSchemaUncheckedUpdateInput>
    /**
     * Choose, which itemsSchema to update.
     * 
    **/
    where: itemsSchemaWhereUniqueInput
  }


  /**
   * itemsSchema updateMany
   */
  export type itemsSchemaUpdateManyArgs = {
    /**
     * The data used to update itemsSchemas.
     * 
    **/
    data: XOR<itemsSchemaUpdateManyMutationInput, itemsSchemaUncheckedUpdateManyInput>
    /**
     * Filter which itemsSchemas to update
     * 
    **/
    where?: itemsSchemaWhereInput
  }


  /**
   * itemsSchema upsert
   */
  export type itemsSchemaUpsertArgs = {
    /**
     * Select specific fields to fetch from the itemsSchema
     * 
    **/
    select?: itemsSchemaSelect | null
    /**
     * The filter to search for the itemsSchema to update in case it exists.
     * 
    **/
    where: itemsSchemaWhereUniqueInput
    /**
     * In case the itemsSchema found by the `where` argument doesn't exist, create a new itemsSchema with this data.
     * 
    **/
    create: XOR<itemsSchemaCreateInput, itemsSchemaUncheckedCreateInput>
    /**
     * In case the itemsSchema was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<itemsSchemaUpdateInput, itemsSchemaUncheckedUpdateInput>
  }


  /**
   * itemsSchema delete
   */
  export type itemsSchemaDeleteArgs = {
    /**
     * Select specific fields to fetch from the itemsSchema
     * 
    **/
    select?: itemsSchemaSelect | null
    /**
     * Filter which itemsSchema to delete.
     * 
    **/
    where: itemsSchemaWhereUniqueInput
  }


  /**
   * itemsSchema deleteMany
   */
  export type itemsSchemaDeleteManyArgs = {
    /**
     * Filter which itemsSchemas to delete
     * 
    **/
    where?: itemsSchemaWhereInput
  }


  /**
   * itemsSchema: findUniqueOrThrow
   */
  export type itemsSchemaFindUniqueOrThrowArgs = itemsSchemaFindUniqueArgsBase
      

  /**
   * itemsSchema: findFirstOrThrow
   */
  export type itemsSchemaFindFirstOrThrowArgs = itemsSchemaFindFirstArgsBase
      

  /**
   * itemsSchema without action
   */
  export type itemsSchemaArgs = {
    /**
     * Select specific fields to fetch from the itemsSchema
     * 
    **/
    select?: itemsSchemaSelect | null
  }



  /**
   * Model itemsTesting
   */


  export type AggregateItemsTesting = {
    _count: ItemsTestingCountAggregateOutputType | null
    _avg: ItemsTestingAvgAggregateOutputType | null
    _sum: ItemsTestingSumAggregateOutputType | null
    _min: ItemsTestingMinAggregateOutputType | null
    _max: ItemsTestingMaxAggregateOutputType | null
  }

  export type ItemsTestingAvgAggregateOutputType = {
    id: number | null
  }

  export type ItemsTestingSumAggregateOutputType = {
    id: number | null
  }

  export type ItemsTestingMinAggregateOutputType = {
    name: string | null
    country: string | null
    id: number | null
  }

  export type ItemsTestingMaxAggregateOutputType = {
    name: string | null
    country: string | null
    id: number | null
  }

  export type ItemsTestingCountAggregateOutputType = {
    name: number
    country: number
    id: number
    _all: number
  }


  export type ItemsTestingAvgAggregateInputType = {
    id?: true
  }

  export type ItemsTestingSumAggregateInputType = {
    id?: true
  }

  export type ItemsTestingMinAggregateInputType = {
    name?: true
    country?: true
    id?: true
  }

  export type ItemsTestingMaxAggregateInputType = {
    name?: true
    country?: true
    id?: true
  }

  export type ItemsTestingCountAggregateInputType = {
    name?: true
    country?: true
    id?: true
    _all?: true
  }

  export type ItemsTestingAggregateArgs = {
    /**
     * Filter which itemsTesting to aggregate.
     * 
    **/
    where?: itemsTestingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsTestings to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsTestingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: itemsTestingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsTestings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsTestings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itemsTestings
    **/
    _count?: true | ItemsTestingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsTestingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsTestingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsTestingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsTestingMaxAggregateInputType
  }

  export type GetItemsTestingAggregateType<T extends ItemsTestingAggregateArgs> = {
        [P in keyof T & keyof AggregateItemsTesting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemsTesting[P]>
      : GetScalarType<T[P], AggregateItemsTesting[P]>
  }




  export type ItemsTestingGroupByArgs = {
    where?: itemsTestingWhereInput
    orderBy?: Enumerable<itemsTestingOrderByWithAggregationInput>
    by: Array<ItemsTestingScalarFieldEnum>
    having?: itemsTestingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsTestingCountAggregateInputType | true
    _avg?: ItemsTestingAvgAggregateInputType
    _sum?: ItemsTestingSumAggregateInputType
    _min?: ItemsTestingMinAggregateInputType
    _max?: ItemsTestingMaxAggregateInputType
  }


  export type ItemsTestingGroupByOutputType = {
    name: string | null
    country: string | null
    id: number
    _count: ItemsTestingCountAggregateOutputType | null
    _avg: ItemsTestingAvgAggregateOutputType | null
    _sum: ItemsTestingSumAggregateOutputType | null
    _min: ItemsTestingMinAggregateOutputType | null
    _max: ItemsTestingMaxAggregateOutputType | null
  }

  type GetItemsTestingGroupByPayload<T extends ItemsTestingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemsTestingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsTestingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsTestingGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsTestingGroupByOutputType[P]>
        }
      >
    >


  export type itemsTestingSelect = {
    name?: boolean
    country?: boolean
    id?: boolean
  }

  export type itemsTestingGetPayload<
    S extends boolean | null | undefined | itemsTestingArgs,
    U = keyof S
      > = S extends true
        ? itemsTesting
    : S extends undefined
    ? never
    : S extends itemsTestingArgs | itemsTestingFindManyArgs
    ?'include' extends U
    ? itemsTesting 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof itemsTesting ? itemsTesting[P] : never
  } 
    : itemsTesting
  : itemsTesting


  type itemsTestingCountArgs = Merge<
    Omit<itemsTestingFindManyArgs, 'select' | 'include'> & {
      select?: ItemsTestingCountAggregateInputType | true
    }
  >

  export interface itemsTestingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ItemsTesting that matches the filter.
     * @param {itemsTestingFindUniqueArgs} args - Arguments to find a ItemsTesting
     * @example
     * // Get one ItemsTesting
     * const itemsTesting = await prisma.itemsTesting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends itemsTestingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, itemsTestingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'itemsTesting'> extends True ? CheckSelect<T, Prisma__itemsTestingClient<itemsTesting>, Prisma__itemsTestingClient<itemsTestingGetPayload<T>>> : CheckSelect<T, Prisma__itemsTestingClient<itemsTesting | null, null>, Prisma__itemsTestingClient<itemsTestingGetPayload<T> | null, null>>

    /**
     * Find the first ItemsTesting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsTestingFindFirstArgs} args - Arguments to find a ItemsTesting
     * @example
     * // Get one ItemsTesting
     * const itemsTesting = await prisma.itemsTesting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends itemsTestingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, itemsTestingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'itemsTesting'> extends True ? CheckSelect<T, Prisma__itemsTestingClient<itemsTesting>, Prisma__itemsTestingClient<itemsTestingGetPayload<T>>> : CheckSelect<T, Prisma__itemsTestingClient<itemsTesting | null, null>, Prisma__itemsTestingClient<itemsTestingGetPayload<T> | null, null>>

    /**
     * Find zero or more ItemsTestings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsTestingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemsTestings
     * const itemsTestings = await prisma.itemsTesting.findMany()
     * 
     * // Get first 10 ItemsTestings
     * const itemsTestings = await prisma.itemsTesting.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const itemsTestingWithNameOnly = await prisma.itemsTesting.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends itemsTestingFindManyArgs>(
      args?: SelectSubset<T, itemsTestingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<itemsTesting>>, PrismaPromise<Array<itemsTestingGetPayload<T>>>>

    /**
     * Create a ItemsTesting.
     * @param {itemsTestingCreateArgs} args - Arguments to create a ItemsTesting.
     * @example
     * // Create one ItemsTesting
     * const ItemsTesting = await prisma.itemsTesting.create({
     *   data: {
     *     // ... data to create a ItemsTesting
     *   }
     * })
     * 
    **/
    create<T extends itemsTestingCreateArgs>(
      args: SelectSubset<T, itemsTestingCreateArgs>
    ): CheckSelect<T, Prisma__itemsTestingClient<itemsTesting>, Prisma__itemsTestingClient<itemsTestingGetPayload<T>>>

    /**
     * Create many ItemsTestings.
     *     @param {itemsTestingCreateManyArgs} args - Arguments to create many ItemsTestings.
     *     @example
     *     // Create many ItemsTestings
     *     const itemsTesting = await prisma.itemsTesting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends itemsTestingCreateManyArgs>(
      args?: SelectSubset<T, itemsTestingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ItemsTesting.
     * @param {itemsTestingDeleteArgs} args - Arguments to delete one ItemsTesting.
     * @example
     * // Delete one ItemsTesting
     * const ItemsTesting = await prisma.itemsTesting.delete({
     *   where: {
     *     // ... filter to delete one ItemsTesting
     *   }
     * })
     * 
    **/
    delete<T extends itemsTestingDeleteArgs>(
      args: SelectSubset<T, itemsTestingDeleteArgs>
    ): CheckSelect<T, Prisma__itemsTestingClient<itemsTesting>, Prisma__itemsTestingClient<itemsTestingGetPayload<T>>>

    /**
     * Update one ItemsTesting.
     * @param {itemsTestingUpdateArgs} args - Arguments to update one ItemsTesting.
     * @example
     * // Update one ItemsTesting
     * const itemsTesting = await prisma.itemsTesting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends itemsTestingUpdateArgs>(
      args: SelectSubset<T, itemsTestingUpdateArgs>
    ): CheckSelect<T, Prisma__itemsTestingClient<itemsTesting>, Prisma__itemsTestingClient<itemsTestingGetPayload<T>>>

    /**
     * Delete zero or more ItemsTestings.
     * @param {itemsTestingDeleteManyArgs} args - Arguments to filter ItemsTestings to delete.
     * @example
     * // Delete a few ItemsTestings
     * const { count } = await prisma.itemsTesting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends itemsTestingDeleteManyArgs>(
      args?: SelectSubset<T, itemsTestingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsTestings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsTestingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemsTestings
     * const itemsTesting = await prisma.itemsTesting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends itemsTestingUpdateManyArgs>(
      args: SelectSubset<T, itemsTestingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemsTesting.
     * @param {itemsTestingUpsertArgs} args - Arguments to update or create a ItemsTesting.
     * @example
     * // Update or create a ItemsTesting
     * const itemsTesting = await prisma.itemsTesting.upsert({
     *   create: {
     *     // ... data to create a ItemsTesting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemsTesting we want to update
     *   }
     * })
    **/
    upsert<T extends itemsTestingUpsertArgs>(
      args: SelectSubset<T, itemsTestingUpsertArgs>
    ): CheckSelect<T, Prisma__itemsTestingClient<itemsTesting>, Prisma__itemsTestingClient<itemsTestingGetPayload<T>>>

    /**
     * Find one ItemsTesting that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {itemsTestingFindUniqueOrThrowArgs} args - Arguments to find a ItemsTesting
     * @example
     * // Get one ItemsTesting
     * const itemsTesting = await prisma.itemsTesting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends itemsTestingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, itemsTestingFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__itemsTestingClient<itemsTesting>, Prisma__itemsTestingClient<itemsTestingGetPayload<T>>>

    /**
     * Find the first ItemsTesting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsTestingFindFirstOrThrowArgs} args - Arguments to find a ItemsTesting
     * @example
     * // Get one ItemsTesting
     * const itemsTesting = await prisma.itemsTesting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends itemsTestingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, itemsTestingFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__itemsTestingClient<itemsTesting>, Prisma__itemsTestingClient<itemsTestingGetPayload<T>>>

    /**
     * Count the number of ItemsTestings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsTestingCountArgs} args - Arguments to filter ItemsTestings to count.
     * @example
     * // Count the number of ItemsTestings
     * const count = await prisma.itemsTesting.count({
     *   where: {
     *     // ... the filter for the ItemsTestings we want to count
     *   }
     * })
    **/
    count<T extends itemsTestingCountArgs>(
      args?: Subset<T, itemsTestingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsTestingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemsTesting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsTestingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemsTestingAggregateArgs>(args: Subset<T, ItemsTestingAggregateArgs>): PrismaPromise<GetItemsTestingAggregateType<T>>

    /**
     * Group by ItemsTesting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsTestingGroupByArgs} args - Group by arguments.
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
      T extends ItemsTestingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsTestingGroupByArgs['orderBy'] }
        : { orderBy?: ItemsTestingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemsTestingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsTestingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for itemsTesting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__itemsTestingClient<T, Null = never> implements PrismaPromise<T> {
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
   * itemsTesting base type for findUnique actions
   */
  export type itemsTestingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the itemsTesting
     * 
    **/
    select?: itemsTestingSelect | null
    /**
     * Filter, which itemsTesting to fetch.
     * 
    **/
    where: itemsTestingWhereUniqueInput
  }

  /**
   * itemsTesting: findUnique
   */
  export interface itemsTestingFindUniqueArgs extends itemsTestingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * itemsTesting base type for findFirst actions
   */
  export type itemsTestingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the itemsTesting
     * 
    **/
    select?: itemsTestingSelect | null
    /**
     * Filter, which itemsTesting to fetch.
     * 
    **/
    where?: itemsTestingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsTestings to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsTestingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemsTestings.
     * 
    **/
    cursor?: itemsTestingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsTestings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsTestings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemsTestings.
     * 
    **/
    distinct?: Enumerable<ItemsTestingScalarFieldEnum>
  }

  /**
   * itemsTesting: findFirst
   */
  export interface itemsTestingFindFirstArgs extends itemsTestingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * itemsTesting findMany
   */
  export type itemsTestingFindManyArgs = {
    /**
     * Select specific fields to fetch from the itemsTesting
     * 
    **/
    select?: itemsTestingSelect | null
    /**
     * Filter, which itemsTestings to fetch.
     * 
    **/
    where?: itemsTestingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsTestings to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsTestingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itemsTestings.
     * 
    **/
    cursor?: itemsTestingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsTestings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsTestings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemsTestingScalarFieldEnum>
  }


  /**
   * itemsTesting create
   */
  export type itemsTestingCreateArgs = {
    /**
     * Select specific fields to fetch from the itemsTesting
     * 
    **/
    select?: itemsTestingSelect | null
    /**
     * The data needed to create a itemsTesting.
     * 
    **/
    data: XOR<itemsTestingCreateInput, itemsTestingUncheckedCreateInput>
  }


  /**
   * itemsTesting createMany
   */
  export type itemsTestingCreateManyArgs = {
    /**
     * The data used to create many itemsTestings.
     * 
    **/
    data: Enumerable<itemsTestingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * itemsTesting update
   */
  export type itemsTestingUpdateArgs = {
    /**
     * Select specific fields to fetch from the itemsTesting
     * 
    **/
    select?: itemsTestingSelect | null
    /**
     * The data needed to update a itemsTesting.
     * 
    **/
    data: XOR<itemsTestingUpdateInput, itemsTestingUncheckedUpdateInput>
    /**
     * Choose, which itemsTesting to update.
     * 
    **/
    where: itemsTestingWhereUniqueInput
  }


  /**
   * itemsTesting updateMany
   */
  export type itemsTestingUpdateManyArgs = {
    /**
     * The data used to update itemsTestings.
     * 
    **/
    data: XOR<itemsTestingUpdateManyMutationInput, itemsTestingUncheckedUpdateManyInput>
    /**
     * Filter which itemsTestings to update
     * 
    **/
    where?: itemsTestingWhereInput
  }


  /**
   * itemsTesting upsert
   */
  export type itemsTestingUpsertArgs = {
    /**
     * Select specific fields to fetch from the itemsTesting
     * 
    **/
    select?: itemsTestingSelect | null
    /**
     * The filter to search for the itemsTesting to update in case it exists.
     * 
    **/
    where: itemsTestingWhereUniqueInput
    /**
     * In case the itemsTesting found by the `where` argument doesn't exist, create a new itemsTesting with this data.
     * 
    **/
    create: XOR<itemsTestingCreateInput, itemsTestingUncheckedCreateInput>
    /**
     * In case the itemsTesting was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<itemsTestingUpdateInput, itemsTestingUncheckedUpdateInput>
  }


  /**
   * itemsTesting delete
   */
  export type itemsTestingDeleteArgs = {
    /**
     * Select specific fields to fetch from the itemsTesting
     * 
    **/
    select?: itemsTestingSelect | null
    /**
     * Filter which itemsTesting to delete.
     * 
    **/
    where: itemsTestingWhereUniqueInput
  }


  /**
   * itemsTesting deleteMany
   */
  export type itemsTestingDeleteManyArgs = {
    /**
     * Filter which itemsTestings to delete
     * 
    **/
    where?: itemsTestingWhereInput
  }


  /**
   * itemsTesting: findUniqueOrThrow
   */
  export type itemsTestingFindUniqueOrThrowArgs = itemsTestingFindUniqueArgsBase
      

  /**
   * itemsTesting: findFirstOrThrow
   */
  export type itemsTestingFindFirstOrThrowArgs = itemsTestingFindFirstArgsBase
      

  /**
   * itemsTesting without action
   */
  export type itemsTestingArgs = {
    /**
     * Select specific fields to fetch from the itemsTesting
     * 
    **/
    select?: itemsTestingSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ItemsSchemaScalarFieldEnum: {
    name: 'name',
    value: 'value',
    id: 'id'
  };

  export type ItemsSchemaScalarFieldEnum = (typeof ItemsSchemaScalarFieldEnum)[keyof typeof ItemsSchemaScalarFieldEnum]


  export const ItemsTestingScalarFieldEnum: {
    name: 'name',
    country: 'country',
    id: 'id'
  };

  export type ItemsTestingScalarFieldEnum = (typeof ItemsTestingScalarFieldEnum)[keyof typeof ItemsTestingScalarFieldEnum]


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


  export type itemsSchemaWhereInput = {
    AND?: Enumerable<itemsSchemaWhereInput>
    OR?: Enumerable<itemsSchemaWhereInput>
    NOT?: Enumerable<itemsSchemaWhereInput>
    name?: StringNullableFilter | string | null
    value?: IntNullableFilter | number | null
    id?: IntFilter | number
  }

  export type itemsSchemaOrderByWithRelationInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsSchemaWhereUniqueInput = {
    id?: number
  }

  export type itemsSchemaOrderByWithAggregationInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
    _count?: itemsSchemaCountOrderByAggregateInput
    _avg?: itemsSchemaAvgOrderByAggregateInput
    _max?: itemsSchemaMaxOrderByAggregateInput
    _min?: itemsSchemaMinOrderByAggregateInput
    _sum?: itemsSchemaSumOrderByAggregateInput
  }

  export type itemsSchemaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<itemsSchemaScalarWhereWithAggregatesInput>
    OR?: Enumerable<itemsSchemaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<itemsSchemaScalarWhereWithAggregatesInput>
    name?: StringNullableWithAggregatesFilter | string | null
    value?: IntNullableWithAggregatesFilter | number | null
    id?: IntWithAggregatesFilter | number
  }

  export type itemsTestingWhereInput = {
    AND?: Enumerable<itemsTestingWhereInput>
    OR?: Enumerable<itemsTestingWhereInput>
    NOT?: Enumerable<itemsTestingWhereInput>
    name?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
    id?: IntFilter | number
  }

  export type itemsTestingOrderByWithRelationInput = {
    name?: SortOrder
    country?: SortOrder
    id?: SortOrder
  }

  export type itemsTestingWhereUniqueInput = {
    id?: number
  }

  export type itemsTestingOrderByWithAggregationInput = {
    name?: SortOrder
    country?: SortOrder
    id?: SortOrder
    _count?: itemsTestingCountOrderByAggregateInput
    _avg?: itemsTestingAvgOrderByAggregateInput
    _max?: itemsTestingMaxOrderByAggregateInput
    _min?: itemsTestingMinOrderByAggregateInput
    _sum?: itemsTestingSumOrderByAggregateInput
  }

  export type itemsTestingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<itemsTestingScalarWhereWithAggregatesInput>
    OR?: Enumerable<itemsTestingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<itemsTestingScalarWhereWithAggregatesInput>
    name?: StringNullableWithAggregatesFilter | string | null
    country?: StringNullableWithAggregatesFilter | string | null
    id?: IntWithAggregatesFilter | number
  }

  export type itemsSchemaCreateInput = {
    name?: string | null
    value?: number | null
    id: number
  }

  export type itemsSchemaUncheckedCreateInput = {
    name?: string | null
    value?: number | null
    id: number
  }

  export type itemsSchemaUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsSchemaUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsSchemaCreateManyInput = {
    name?: string | null
    value?: number | null
    id: number
  }

  export type itemsSchemaUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsSchemaUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsTestingCreateInput = {
    name?: string | null
    country?: string | null
    id: number
  }

  export type itemsTestingUncheckedCreateInput = {
    name?: string | null
    country?: string | null
    id: number
  }

  export type itemsTestingUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsTestingUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsTestingCreateManyInput = {
    name?: string | null
    country?: string | null
    id: number
  }

  export type itemsTestingUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsTestingUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
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

  export type itemsSchemaCountOrderByAggregateInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsSchemaAvgOrderByAggregateInput = {
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsSchemaMaxOrderByAggregateInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsSchemaMinOrderByAggregateInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsSchemaSumOrderByAggregateInput = {
    value?: SortOrder
    id?: SortOrder
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

  export type itemsTestingCountOrderByAggregateInput = {
    name?: SortOrder
    country?: SortOrder
    id?: SortOrder
  }

  export type itemsTestingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type itemsTestingMaxOrderByAggregateInput = {
    name?: SortOrder
    country?: SortOrder
    id?: SortOrder
  }

  export type itemsTestingMinOrderByAggregateInput = {
    name?: SortOrder
    country?: SortOrder
    id?: SortOrder
  }

  export type itemsTestingSumOrderByAggregateInput = {
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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