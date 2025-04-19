
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Eventos
 * 
 */
export type Eventos = $Result.DefaultSelection<Prisma.$EventosPayload>
/**
 * Model Participantes
 * 
 */
export type Participantes = $Result.DefaultSelection<Prisma.$ParticipantesPayload>
/**
 * Model Checkins
 * 
 */
export type Checkins = $Result.DefaultSelection<Prisma.$CheckinsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  pendente: 'pendente',
  presente: 'presente',
  saiu: 'saiu'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Eventos
 * const eventos = await prisma.eventos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Eventos
   * const eventos = await prisma.eventos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.eventos`: Exposes CRUD operations for the **Eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.EventosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantes`: Exposes CRUD operations for the **Participantes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes
    * const participantes = await prisma.participantes.findMany()
    * ```
    */
  get participantes(): Prisma.ParticipantesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkins`: Exposes CRUD operations for the **Checkins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkins
    * const checkins = await prisma.checkins.findMany()
    * ```
    */
  get checkins(): Prisma.CheckinsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Eventos: 'Eventos',
    Participantes: 'Participantes',
    Checkins: 'Checkins'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "eventos" | "participantes" | "checkins"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Eventos: {
        payload: Prisma.$EventosPayload<ExtArgs>
        fields: Prisma.EventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          findFirst: {
            args: Prisma.EventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          findMany: {
            args: Prisma.EventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          create: {
            args: Prisma.EventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          createMany: {
            args: Prisma.EventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          delete: {
            args: Prisma.EventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          update: {
            args: Prisma.EventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          deleteMany: {
            args: Prisma.EventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          upsert: {
            args: Prisma.EventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.EventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      Participantes: {
        payload: Prisma.$ParticipantesPayload<ExtArgs>
        fields: Prisma.ParticipantesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          findFirst: {
            args: Prisma.ParticipantesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          findMany: {
            args: Prisma.ParticipantesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>[]
          }
          create: {
            args: Prisma.ParticipantesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          createMany: {
            args: Prisma.ParticipantesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>[]
          }
          delete: {
            args: Prisma.ParticipantesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          update: {
            args: Prisma.ParticipantesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          aggregate: {
            args: Prisma.ParticipantesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantes>
          }
          groupBy: {
            args: Prisma.ParticipantesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantesCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantesCountAggregateOutputType> | number
          }
        }
      }
      Checkins: {
        payload: Prisma.$CheckinsPayload<ExtArgs>
        fields: Prisma.CheckinsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckinsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckinsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>
          }
          findFirst: {
            args: Prisma.CheckinsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckinsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>
          }
          findMany: {
            args: Prisma.CheckinsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>[]
          }
          create: {
            args: Prisma.CheckinsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>
          }
          createMany: {
            args: Prisma.CheckinsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckinsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>[]
          }
          delete: {
            args: Prisma.CheckinsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>
          }
          update: {
            args: Prisma.CheckinsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>
          }
          deleteMany: {
            args: Prisma.CheckinsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckinsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckinsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>[]
          }
          upsert: {
            args: Prisma.CheckinsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinsPayload>
          }
          aggregate: {
            args: Prisma.CheckinsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckins>
          }
          groupBy: {
            args: Prisma.CheckinsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckinsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckinsCountArgs<ExtArgs>
            result: $Utils.Optional<CheckinsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    eventos?: EventosOmit
    participantes?: ParticipantesOmit
    checkins?: CheckinsOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventosCountOutputType
   */

  export type EventosCountOutputType = {
    participantes: number
    checkins: number
  }

  export type EventosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | EventosCountOutputTypeCountParticipantesArgs
    checkins?: boolean | EventosCountOutputTypeCountCheckinsArgs
  }

  // Custom InputTypes
  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventosCountOutputType
     */
    select?: EventosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantesWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinsWhereInput
  }


  /**
   * Count Type ParticipantesCountOutputType
   */

  export type ParticipantesCountOutputType = {
    checkins: number
  }

  export type ParticipantesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | ParticipantesCountOutputTypeCountCheckinsArgs
  }

  // Custom InputTypes
  /**
   * ParticipantesCountOutputType without action
   */
  export type ParticipantesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantesCountOutputType
     */
    select?: ParticipantesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantesCountOutputType without action
   */
  export type ParticipantesCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosAvgAggregateOutputType = {
    id: number | null
    capacidade: number | null
  }

  export type EventosSumAggregateOutputType = {
    id: number | null
    capacidade: number | null
  }

  export type EventosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    data: Date | null
    horaInicio: Date | null
    horaFim: Date | null
    local: string | null
    capacidade: number | null
  }

  export type EventosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    data: Date | null
    horaInicio: Date | null
    horaFim: Date | null
    local: string | null
    capacidade: number | null
  }

  export type EventosCountAggregateOutputType = {
    id: number
    nome: number
    data: number
    horaInicio: number
    horaFim: number
    local: number
    capacidade: number
    _all: number
  }


  export type EventosAvgAggregateInputType = {
    id?: true
    capacidade?: true
  }

  export type EventosSumAggregateInputType = {
    id?: true
    capacidade?: true
  }

  export type EventosMinAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    horaInicio?: true
    horaFim?: true
    local?: true
    capacidade?: true
  }

  export type EventosMaxAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    horaInicio?: true
    horaFim?: true
    local?: true
    capacidade?: true
  }

  export type EventosCountAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    horaInicio?: true
    horaFim?: true
    local?: true
    capacidade?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to aggregate.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type EventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventosWhereInput
    orderBy?: EventosOrderByWithAggregationInput | EventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: EventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _avg?: EventosAvgAggregateInputType
    _sum?: EventosSumAggregateInputType
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id: number
    nome: string
    data: Date
    horaInicio: Date
    horaFim: Date
    local: string
    capacidade: number
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends EventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type EventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    local?: boolean
    capacidade?: boolean
    participantes?: boolean | Eventos$participantesArgs<ExtArgs>
    checkins?: boolean | Eventos$checkinsArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>

  export type EventosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    local?: boolean
    capacidade?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type EventosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    local?: boolean
    capacidade?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type EventosSelectScalar = {
    id?: boolean
    nome?: boolean
    data?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    local?: boolean
    capacidade?: boolean
  }

  export type EventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "data" | "horaInicio" | "horaFim" | "local" | "capacidade", ExtArgs["result"]["eventos"]>
  export type EventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | Eventos$participantesArgs<ExtArgs>
    checkins?: boolean | Eventos$checkinsArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Eventos"
    objects: {
      participantes: Prisma.$ParticipantesPayload<ExtArgs>[]
      checkins: Prisma.$CheckinsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      data: Date
      horaInicio: Date
      horaFim: Date
      local: string
      capacidade: number
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type EventosGetPayload<S extends boolean | null | undefined | EventosDefaultArgs> = $Result.GetResult<Prisma.$EventosPayload, S>

  type EventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface EventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Eventos'], meta: { name: 'Eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {EventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventosFindUniqueArgs>(args: SelectSubset<T, EventosFindUniqueArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventosFindUniqueOrThrowArgs>(args: SelectSubset<T, EventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventosFindFirstArgs>(args?: SelectSubset<T, EventosFindFirstArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventosFindFirstOrThrowArgs>(args?: SelectSubset<T, EventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventosWithIdOnly = await prisma.eventos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventosFindManyArgs>(args?: SelectSubset<T, EventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos.
     * @param {EventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends EventosCreateArgs>(args: SelectSubset<T, EventosCreateArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventosCreateManyArgs>(args?: SelectSubset<T, EventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventosCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventosWithIdOnly = await prisma.eventos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventosCreateManyAndReturnArgs>(args?: SelectSubset<T, EventosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos.
     * @param {EventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends EventosDeleteArgs>(args: SelectSubset<T, EventosDeleteArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos.
     * @param {EventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventosUpdateArgs>(args: SelectSubset<T, EventosUpdateArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventosDeleteManyArgs>(args?: SelectSubset<T, EventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventosUpdateManyArgs>(args: SelectSubset<T, EventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventosUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventosWithIdOnly = await prisma.eventos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventosUpdateManyAndReturnArgs>(args: SelectSubset<T, EventosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos.
     * @param {EventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends EventosUpsertArgs>(args: SelectSubset<T, EventosUpsertArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventosCountArgs>(
      args?: Subset<T, EventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosGroupByArgs} args - Group by arguments.
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
      T extends EventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventosGroupByArgs['orderBy'] }
        : { orderBy?: EventosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Eventos model
   */
  readonly fields: EventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantes<T extends Eventos$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Eventos$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkins<T extends Eventos$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, Eventos$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Eventos model
   */
  interface EventosFieldRefs {
    readonly id: FieldRef<"Eventos", 'Int'>
    readonly nome: FieldRef<"Eventos", 'String'>
    readonly data: FieldRef<"Eventos", 'DateTime'>
    readonly horaInicio: FieldRef<"Eventos", 'DateTime'>
    readonly horaFim: FieldRef<"Eventos", 'DateTime'>
    readonly local: FieldRef<"Eventos", 'String'>
    readonly capacidade: FieldRef<"Eventos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Eventos findUnique
   */
  export type EventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos findUniqueOrThrow
   */
  export type EventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos findFirst
   */
  export type EventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos findFirstOrThrow
   */
  export type EventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos findMany
   */
  export type EventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos create
   */
  export type EventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The data needed to create a Eventos.
     */
    data: XOR<EventosCreateInput, EventosUncheckedCreateInput>
  }

  /**
   * Eventos createMany
   */
  export type EventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventosCreateManyInput | EventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos createManyAndReturn
   */
  export type EventosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventosCreateManyInput | EventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos update
   */
  export type EventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The data needed to update a Eventos.
     */
    data: XOR<EventosUpdateInput, EventosUncheckedUpdateInput>
    /**
     * Choose, which Eventos to update.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos updateMany
   */
  export type EventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventosUpdateManyMutationInput, EventosUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventosWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Eventos updateManyAndReturn
   */
  export type EventosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventosUpdateManyMutationInput, EventosUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventosWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Eventos upsert
   */
  export type EventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The filter to search for the Eventos to update in case it exists.
     */
    where: EventosWhereUniqueInput
    /**
     * In case the Eventos found by the `where` argument doesn't exist, create a new Eventos with this data.
     */
    create: XOR<EventosCreateInput, EventosUncheckedCreateInput>
    /**
     * In case the Eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventosUpdateInput, EventosUncheckedUpdateInput>
  }

  /**
   * Eventos delete
   */
  export type EventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter which Eventos to delete.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos deleteMany
   */
  export type EventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventosWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Eventos.participantes
   */
  export type Eventos$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    where?: ParticipantesWhereInput
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    cursor?: ParticipantesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantesScalarFieldEnum | ParticipantesScalarFieldEnum[]
  }

  /**
   * Eventos.checkins
   */
  export type Eventos$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    where?: CheckinsWhereInput
    orderBy?: CheckinsOrderByWithRelationInput | CheckinsOrderByWithRelationInput[]
    cursor?: CheckinsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * Eventos without action
   */
  export type EventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventos
     */
    omit?: EventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
  }


  /**
   * Model Participantes
   */

  export type AggregateParticipantes = {
    _count: ParticipantesCountAggregateOutputType | null
    _avg: ParticipantesAvgAggregateOutputType | null
    _sum: ParticipantesSumAggregateOutputType | null
    _min: ParticipantesMinAggregateOutputType | null
    _max: ParticipantesMaxAggregateOutputType | null
  }

  export type ParticipantesAvgAggregateOutputType = {
    id: number | null
    eventoId: number | null
  }

  export type ParticipantesSumAggregateOutputType = {
    id: number | null
    eventoId: number | null
  }

  export type ParticipantesMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    eventoId: number | null
  }

  export type ParticipantesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    eventoId: number | null
  }

  export type ParticipantesCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    eventoId: number
    _all: number
  }


  export type ParticipantesAvgAggregateInputType = {
    id?: true
    eventoId?: true
  }

  export type ParticipantesSumAggregateInputType = {
    id?: true
    eventoId?: true
  }

  export type ParticipantesMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    eventoId?: true
  }

  export type ParticipantesMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    eventoId?: true
  }

  export type ParticipantesCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    eventoId?: true
    _all?: true
  }

  export type ParticipantesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participantes to aggregate.
     */
    where?: ParticipantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participantes
    **/
    _count?: true | ParticipantesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantesMaxAggregateInputType
  }

  export type GetParticipantesAggregateType<T extends ParticipantesAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantes[P]>
      : GetScalarType<T[P], AggregateParticipantes[P]>
  }




  export type ParticipantesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantesWhereInput
    orderBy?: ParticipantesOrderByWithAggregationInput | ParticipantesOrderByWithAggregationInput[]
    by: ParticipantesScalarFieldEnum[] | ParticipantesScalarFieldEnum
    having?: ParticipantesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantesCountAggregateInputType | true
    _avg?: ParticipantesAvgAggregateInputType
    _sum?: ParticipantesSumAggregateInputType
    _min?: ParticipantesMinAggregateInputType
    _max?: ParticipantesMaxAggregateInputType
  }

  export type ParticipantesGroupByOutputType = {
    id: number
    nome: string
    email: string | null
    telefone: string | null
    eventoId: number
    _count: ParticipantesCountAggregateOutputType | null
    _avg: ParticipantesAvgAggregateOutputType | null
    _sum: ParticipantesSumAggregateOutputType | null
    _min: ParticipantesMinAggregateOutputType | null
    _max: ParticipantesMaxAggregateOutputType | null
  }

  type GetParticipantesGroupByPayload<T extends ParticipantesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantesGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantesGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    eventoId?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    checkins?: boolean | Participantes$checkinsArgs<ExtArgs>
    _count?: boolean | ParticipantesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantes"]>

  export type ParticipantesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    eventoId?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantes"]>

  export type ParticipantesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    eventoId?: boolean
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantes"]>

  export type ParticipantesSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    eventoId?: boolean
  }

  export type ParticipantesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "eventoId", ExtArgs["result"]["participantes"]>
  export type ParticipantesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
    checkins?: boolean | Participantes$checkinsArgs<ExtArgs>
    _count?: boolean | ParticipantesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }
  export type ParticipantesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }

  export type $ParticipantesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participantes"
    objects: {
      evento: Prisma.$EventosPayload<ExtArgs>
      checkins: Prisma.$CheckinsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string | null
      telefone: string | null
      eventoId: number
    }, ExtArgs["result"]["participantes"]>
    composites: {}
  }

  type ParticipantesGetPayload<S extends boolean | null | undefined | ParticipantesDefaultArgs> = $Result.GetResult<Prisma.$ParticipantesPayload, S>

  type ParticipantesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantesCountAggregateInputType | true
    }

  export interface ParticipantesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participantes'], meta: { name: 'Participantes' } }
    /**
     * Find zero or one Participantes that matches the filter.
     * @param {ParticipantesFindUniqueArgs} args - Arguments to find a Participantes
     * @example
     * // Get one Participantes
     * const participantes = await prisma.participantes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantesFindUniqueArgs>(args: SelectSubset<T, ParticipantesFindUniqueArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participantes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantesFindUniqueOrThrowArgs} args - Arguments to find a Participantes
     * @example
     * // Get one Participantes
     * const participantes = await prisma.participantes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantesFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesFindFirstArgs} args - Arguments to find a Participantes
     * @example
     * // Get one Participantes
     * const participantes = await prisma.participantes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantesFindFirstArgs>(args?: SelectSubset<T, ParticipantesFindFirstArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participantes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesFindFirstOrThrowArgs} args - Arguments to find a Participantes
     * @example
     * // Get one Participantes
     * const participantes = await prisma.participantes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantesFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participantes
     * const participantes = await prisma.participantes.findMany()
     * 
     * // Get first 10 Participantes
     * const participantes = await prisma.participantes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantesWithIdOnly = await prisma.participantes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantesFindManyArgs>(args?: SelectSubset<T, ParticipantesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participantes.
     * @param {ParticipantesCreateArgs} args - Arguments to create a Participantes.
     * @example
     * // Create one Participantes
     * const Participantes = await prisma.participantes.create({
     *   data: {
     *     // ... data to create a Participantes
     *   }
     * })
     * 
     */
    create<T extends ParticipantesCreateArgs>(args: SelectSubset<T, ParticipantesCreateArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participantes.
     * @param {ParticipantesCreateManyArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participantes = await prisma.participantes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantesCreateManyArgs>(args?: SelectSubset<T, ParticipantesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participantes and returns the data saved in the database.
     * @param {ParticipantesCreateManyAndReturnArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participantes = await prisma.participantes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participantes and only return the `id`
     * const participantesWithIdOnly = await prisma.participantes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantesCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participantes.
     * @param {ParticipantesDeleteArgs} args - Arguments to delete one Participantes.
     * @example
     * // Delete one Participantes
     * const Participantes = await prisma.participantes.delete({
     *   where: {
     *     // ... filter to delete one Participantes
     *   }
     * })
     * 
     */
    delete<T extends ParticipantesDeleteArgs>(args: SelectSubset<T, ParticipantesDeleteArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participantes.
     * @param {ParticipantesUpdateArgs} args - Arguments to update one Participantes.
     * @example
     * // Update one Participantes
     * const participantes = await prisma.participantes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantesUpdateArgs>(args: SelectSubset<T, ParticipantesUpdateArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participantes.
     * @param {ParticipantesDeleteManyArgs} args - Arguments to filter Participantes to delete.
     * @example
     * // Delete a few Participantes
     * const { count } = await prisma.participantes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantesDeleteManyArgs>(args?: SelectSubset<T, ParticipantesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participantes
     * const participantes = await prisma.participantes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantesUpdateManyArgs>(args: SelectSubset<T, ParticipantesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes and returns the data updated in the database.
     * @param {ParticipantesUpdateManyAndReturnArgs} args - Arguments to update many Participantes.
     * @example
     * // Update many Participantes
     * const participantes = await prisma.participantes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participantes and only return the `id`
     * const participantesWithIdOnly = await prisma.participantes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantesUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participantes.
     * @param {ParticipantesUpsertArgs} args - Arguments to update or create a Participantes.
     * @example
     * // Update or create a Participantes
     * const participantes = await prisma.participantes.upsert({
     *   create: {
     *     // ... data to create a Participantes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participantes we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantesUpsertArgs>(args: SelectSubset<T, ParticipantesUpsertArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesCountArgs} args - Arguments to filter Participantes to count.
     * @example
     * // Count the number of Participantes
     * const count = await prisma.participantes.count({
     *   where: {
     *     // ... the filter for the Participantes we want to count
     *   }
     * })
    **/
    count<T extends ParticipantesCountArgs>(
      args?: Subset<T, ParticipantesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantesAggregateArgs>(args: Subset<T, ParticipantesAggregateArgs>): Prisma.PrismaPromise<GetParticipantesAggregateType<T>>

    /**
     * Group by Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesGroupByArgs} args - Group by arguments.
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
      T extends ParticipantesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantesGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ParticipantesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participantes model
   */
  readonly fields: ParticipantesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participantes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventosDefaultArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checkins<T extends Participantes$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, Participantes$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participantes model
   */
  interface ParticipantesFieldRefs {
    readonly id: FieldRef<"Participantes", 'Int'>
    readonly nome: FieldRef<"Participantes", 'String'>
    readonly email: FieldRef<"Participantes", 'String'>
    readonly telefone: FieldRef<"Participantes", 'String'>
    readonly eventoId: FieldRef<"Participantes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Participantes findUnique
   */
  export type ParticipantesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where: ParticipantesWhereUniqueInput
  }

  /**
   * Participantes findUniqueOrThrow
   */
  export type ParticipantesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where: ParticipantesWhereUniqueInput
  }

  /**
   * Participantes findFirst
   */
  export type ParticipantesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipantesScalarFieldEnum | ParticipantesScalarFieldEnum[]
  }

  /**
   * Participantes findFirstOrThrow
   */
  export type ParticipantesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipantesScalarFieldEnum | ParticipantesScalarFieldEnum[]
  }

  /**
   * Participantes findMany
   */
  export type ParticipantesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participantes.
     */
    cursor?: ParticipantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    distinct?: ParticipantesScalarFieldEnum | ParticipantesScalarFieldEnum[]
  }

  /**
   * Participantes create
   */
  export type ParticipantesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * The data needed to create a Participantes.
     */
    data: XOR<ParticipantesCreateInput, ParticipantesUncheckedCreateInput>
  }

  /**
   * Participantes createMany
   */
  export type ParticipantesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participantes.
     */
    data: ParticipantesCreateManyInput | ParticipantesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participantes createManyAndReturn
   */
  export type ParticipantesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * The data used to create many Participantes.
     */
    data: ParticipantesCreateManyInput | ParticipantesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participantes update
   */
  export type ParticipantesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * The data needed to update a Participantes.
     */
    data: XOR<ParticipantesUpdateInput, ParticipantesUncheckedUpdateInput>
    /**
     * Choose, which Participantes to update.
     */
    where: ParticipantesWhereUniqueInput
  }

  /**
   * Participantes updateMany
   */
  export type ParticipantesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipantesUpdateManyMutationInput, ParticipantesUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipantesWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
  }

  /**
   * Participantes updateManyAndReturn
   */
  export type ParticipantesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipantesUpdateManyMutationInput, ParticipantesUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipantesWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participantes upsert
   */
  export type ParticipantesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * The filter to search for the Participantes to update in case it exists.
     */
    where: ParticipantesWhereUniqueInput
    /**
     * In case the Participantes found by the `where` argument doesn't exist, create a new Participantes with this data.
     */
    create: XOR<ParticipantesCreateInput, ParticipantesUncheckedCreateInput>
    /**
     * In case the Participantes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantesUpdateInput, ParticipantesUncheckedUpdateInput>
  }

  /**
   * Participantes delete
   */
  export type ParticipantesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter which Participantes to delete.
     */
    where: ParticipantesWhereUniqueInput
  }

  /**
   * Participantes deleteMany
   */
  export type ParticipantesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participantes to delete
     */
    where?: ParticipantesWhereInput
    /**
     * Limit how many Participantes to delete.
     */
    limit?: number
  }

  /**
   * Participantes.checkins
   */
  export type Participantes$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    where?: CheckinsWhereInput
    orderBy?: CheckinsOrderByWithRelationInput | CheckinsOrderByWithRelationInput[]
    cursor?: CheckinsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * Participantes without action
   */
  export type ParticipantesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participantes
     */
    omit?: ParticipantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantesInclude<ExtArgs> | null
  }


  /**
   * Model Checkins
   */

  export type AggregateCheckins = {
    _count: CheckinsCountAggregateOutputType | null
    _avg: CheckinsAvgAggregateOutputType | null
    _sum: CheckinsSumAggregateOutputType | null
    _min: CheckinsMinAggregateOutputType | null
    _max: CheckinsMaxAggregateOutputType | null
  }

  export type CheckinsAvgAggregateOutputType = {
    id: number | null
    participanteId: number | null
    eventoId: number | null
  }

  export type CheckinsSumAggregateOutputType = {
    id: number | null
    participanteId: number | null
    eventoId: number | null
  }

  export type CheckinsMinAggregateOutputType = {
    id: number | null
    participanteId: number | null
    eventoId: number | null
    horaEntrada: Date | null
    horaSaida: Date | null
    status: $Enums.Status | null
  }

  export type CheckinsMaxAggregateOutputType = {
    id: number | null
    participanteId: number | null
    eventoId: number | null
    horaEntrada: Date | null
    horaSaida: Date | null
    status: $Enums.Status | null
  }

  export type CheckinsCountAggregateOutputType = {
    id: number
    participanteId: number
    eventoId: number
    horaEntrada: number
    horaSaida: number
    status: number
    _all: number
  }


  export type CheckinsAvgAggregateInputType = {
    id?: true
    participanteId?: true
    eventoId?: true
  }

  export type CheckinsSumAggregateInputType = {
    id?: true
    participanteId?: true
    eventoId?: true
  }

  export type CheckinsMinAggregateInputType = {
    id?: true
    participanteId?: true
    eventoId?: true
    horaEntrada?: true
    horaSaida?: true
    status?: true
  }

  export type CheckinsMaxAggregateInputType = {
    id?: true
    participanteId?: true
    eventoId?: true
    horaEntrada?: true
    horaSaida?: true
    status?: true
  }

  export type CheckinsCountAggregateInputType = {
    id?: true
    participanteId?: true
    eventoId?: true
    horaEntrada?: true
    horaSaida?: true
    status?: true
    _all?: true
  }

  export type CheckinsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkins to aggregate.
     */
    where?: CheckinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinsOrderByWithRelationInput | CheckinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkins
    **/
    _count?: true | CheckinsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckinsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckinsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinsMaxAggregateInputType
  }

  export type GetCheckinsAggregateType<T extends CheckinsAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckins[P]>
      : GetScalarType<T[P], AggregateCheckins[P]>
  }




  export type CheckinsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinsWhereInput
    orderBy?: CheckinsOrderByWithAggregationInput | CheckinsOrderByWithAggregationInput[]
    by: CheckinsScalarFieldEnum[] | CheckinsScalarFieldEnum
    having?: CheckinsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinsCountAggregateInputType | true
    _avg?: CheckinsAvgAggregateInputType
    _sum?: CheckinsSumAggregateInputType
    _min?: CheckinsMinAggregateInputType
    _max?: CheckinsMaxAggregateInputType
  }

  export type CheckinsGroupByOutputType = {
    id: number
    participanteId: number
    eventoId: number
    horaEntrada: Date | null
    horaSaida: Date | null
    status: $Enums.Status
    _count: CheckinsCountAggregateOutputType | null
    _avg: CheckinsAvgAggregateOutputType | null
    _sum: CheckinsSumAggregateOutputType | null
    _min: CheckinsMinAggregateOutputType | null
    _max: CheckinsMaxAggregateOutputType | null
  }

  type GetCheckinsGroupByPayload<T extends CheckinsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinsGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinsGroupByOutputType[P]>
        }
      >
    >


  export type CheckinsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participanteId?: boolean
    eventoId?: boolean
    horaEntrada?: boolean
    horaSaida?: boolean
    status?: boolean
    participante?: boolean | ParticipantesDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkins"]>

  export type CheckinsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participanteId?: boolean
    eventoId?: boolean
    horaEntrada?: boolean
    horaSaida?: boolean
    status?: boolean
    participante?: boolean | ParticipantesDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkins"]>

  export type CheckinsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participanteId?: boolean
    eventoId?: boolean
    horaEntrada?: boolean
    horaSaida?: boolean
    status?: boolean
    participante?: boolean | ParticipantesDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkins"]>

  export type CheckinsSelectScalar = {
    id?: boolean
    participanteId?: boolean
    eventoId?: boolean
    horaEntrada?: boolean
    horaSaida?: boolean
    status?: boolean
  }

  export type CheckinsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participanteId" | "eventoId" | "horaEntrada" | "horaSaida" | "status", ExtArgs["result"]["checkins"]>
  export type CheckinsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participante?: boolean | ParticipantesDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }
  export type CheckinsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participante?: boolean | ParticipantesDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }
  export type CheckinsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participante?: boolean | ParticipantesDefaultArgs<ExtArgs>
    evento?: boolean | EventosDefaultArgs<ExtArgs>
  }

  export type $CheckinsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkins"
    objects: {
      participante: Prisma.$ParticipantesPayload<ExtArgs>
      evento: Prisma.$EventosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participanteId: number
      eventoId: number
      horaEntrada: Date | null
      horaSaida: Date | null
      status: $Enums.Status
    }, ExtArgs["result"]["checkins"]>
    composites: {}
  }

  type CheckinsGetPayload<S extends boolean | null | undefined | CheckinsDefaultArgs> = $Result.GetResult<Prisma.$CheckinsPayload, S>

  type CheckinsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckinsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckinsCountAggregateInputType | true
    }

  export interface CheckinsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkins'], meta: { name: 'Checkins' } }
    /**
     * Find zero or one Checkins that matches the filter.
     * @param {CheckinsFindUniqueArgs} args - Arguments to find a Checkins
     * @example
     * // Get one Checkins
     * const checkins = await prisma.checkins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckinsFindUniqueArgs>(args: SelectSubset<T, CheckinsFindUniqueArgs<ExtArgs>>): Prisma__CheckinsClient<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checkins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckinsFindUniqueOrThrowArgs} args - Arguments to find a Checkins
     * @example
     * // Get one Checkins
     * const checkins = await prisma.checkins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckinsFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckinsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckinsClient<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinsFindFirstArgs} args - Arguments to find a Checkins
     * @example
     * // Get one Checkins
     * const checkins = await prisma.checkins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckinsFindFirstArgs>(args?: SelectSubset<T, CheckinsFindFirstArgs<ExtArgs>>): Prisma__CheckinsClient<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinsFindFirstOrThrowArgs} args - Arguments to find a Checkins
     * @example
     * // Get one Checkins
     * const checkins = await prisma.checkins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckinsFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckinsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckinsClient<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkins
     * const checkins = await prisma.checkins.findMany()
     * 
     * // Get first 10 Checkins
     * const checkins = await prisma.checkins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinsWithIdOnly = await prisma.checkins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckinsFindManyArgs>(args?: SelectSubset<T, CheckinsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checkins.
     * @param {CheckinsCreateArgs} args - Arguments to create a Checkins.
     * @example
     * // Create one Checkins
     * const Checkins = await prisma.checkins.create({
     *   data: {
     *     // ... data to create a Checkins
     *   }
     * })
     * 
     */
    create<T extends CheckinsCreateArgs>(args: SelectSubset<T, CheckinsCreateArgs<ExtArgs>>): Prisma__CheckinsClient<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checkins.
     * @param {CheckinsCreateManyArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkins = await prisma.checkins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckinsCreateManyArgs>(args?: SelectSubset<T, CheckinsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkins and returns the data saved in the database.
     * @param {CheckinsCreateManyAndReturnArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkins = await prisma.checkins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkins and only return the `id`
     * const checkinsWithIdOnly = await prisma.checkins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckinsCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckinsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checkins.
     * @param {CheckinsDeleteArgs} args - Arguments to delete one Checkins.
     * @example
     * // Delete one Checkins
     * const Checkins = await prisma.checkins.delete({
     *   where: {
     *     // ... filter to delete one Checkins
     *   }
     * })
     * 
     */
    delete<T extends CheckinsDeleteArgs>(args: SelectSubset<T, CheckinsDeleteArgs<ExtArgs>>): Prisma__CheckinsClient<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checkins.
     * @param {CheckinsUpdateArgs} args - Arguments to update one Checkins.
     * @example
     * // Update one Checkins
     * const checkins = await prisma.checkins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckinsUpdateArgs>(args: SelectSubset<T, CheckinsUpdateArgs<ExtArgs>>): Prisma__CheckinsClient<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checkins.
     * @param {CheckinsDeleteManyArgs} args - Arguments to filter Checkins to delete.
     * @example
     * // Delete a few Checkins
     * const { count } = await prisma.checkins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckinsDeleteManyArgs>(args?: SelectSubset<T, CheckinsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkins
     * const checkins = await prisma.checkins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckinsUpdateManyArgs>(args: SelectSubset<T, CheckinsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins and returns the data updated in the database.
     * @param {CheckinsUpdateManyAndReturnArgs} args - Arguments to update many Checkins.
     * @example
     * // Update many Checkins
     * const checkins = await prisma.checkins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checkins and only return the `id`
     * const checkinsWithIdOnly = await prisma.checkins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckinsUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckinsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checkins.
     * @param {CheckinsUpsertArgs} args - Arguments to update or create a Checkins.
     * @example
     * // Update or create a Checkins
     * const checkins = await prisma.checkins.upsert({
     *   create: {
     *     // ... data to create a Checkins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkins we want to update
     *   }
     * })
     */
    upsert<T extends CheckinsUpsertArgs>(args: SelectSubset<T, CheckinsUpsertArgs<ExtArgs>>): Prisma__CheckinsClient<$Result.GetResult<Prisma.$CheckinsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinsCountArgs} args - Arguments to filter Checkins to count.
     * @example
     * // Count the number of Checkins
     * const count = await prisma.checkins.count({
     *   where: {
     *     // ... the filter for the Checkins we want to count
     *   }
     * })
    **/
    count<T extends CheckinsCountArgs>(
      args?: Subset<T, CheckinsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckinsAggregateArgs>(args: Subset<T, CheckinsAggregateArgs>): Prisma.PrismaPromise<GetCheckinsAggregateType<T>>

    /**
     * Group by Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinsGroupByArgs} args - Group by arguments.
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
      T extends CheckinsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckinsGroupByArgs['orderBy'] }
        : { orderBy?: CheckinsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CheckinsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkins model
   */
  readonly fields: CheckinsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckinsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participante<T extends ParticipantesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantesDefaultArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evento<T extends EventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventosDefaultArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checkins model
   */
  interface CheckinsFieldRefs {
    readonly id: FieldRef<"Checkins", 'Int'>
    readonly participanteId: FieldRef<"Checkins", 'Int'>
    readonly eventoId: FieldRef<"Checkins", 'Int'>
    readonly horaEntrada: FieldRef<"Checkins", 'DateTime'>
    readonly horaSaida: FieldRef<"Checkins", 'DateTime'>
    readonly status: FieldRef<"Checkins", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Checkins findUnique
   */
  export type CheckinsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where: CheckinsWhereUniqueInput
  }

  /**
   * Checkins findUniqueOrThrow
   */
  export type CheckinsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where: CheckinsWhereUniqueInput
  }

  /**
   * Checkins findFirst
   */
  export type CheckinsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where?: CheckinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinsOrderByWithRelationInput | CheckinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * Checkins findFirstOrThrow
   */
  export type CheckinsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where?: CheckinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinsOrderByWithRelationInput | CheckinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * Checkins findMany
   */
  export type CheckinsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where?: CheckinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinsOrderByWithRelationInput | CheckinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkins.
     */
    cursor?: CheckinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * Checkins create
   */
  export type CheckinsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * The data needed to create a Checkins.
     */
    data: XOR<CheckinsCreateInput, CheckinsUncheckedCreateInput>
  }

  /**
   * Checkins createMany
   */
  export type CheckinsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkins.
     */
    data: CheckinsCreateManyInput | CheckinsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkins createManyAndReturn
   */
  export type CheckinsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * The data used to create many Checkins.
     */
    data: CheckinsCreateManyInput | CheckinsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checkins update
   */
  export type CheckinsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * The data needed to update a Checkins.
     */
    data: XOR<CheckinsUpdateInput, CheckinsUncheckedUpdateInput>
    /**
     * Choose, which Checkins to update.
     */
    where: CheckinsWhereUniqueInput
  }

  /**
   * Checkins updateMany
   */
  export type CheckinsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkins.
     */
    data: XOR<CheckinsUpdateManyMutationInput, CheckinsUncheckedUpdateManyInput>
    /**
     * Filter which Checkins to update
     */
    where?: CheckinsWhereInput
    /**
     * Limit how many Checkins to update.
     */
    limit?: number
  }

  /**
   * Checkins updateManyAndReturn
   */
  export type CheckinsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * The data used to update Checkins.
     */
    data: XOR<CheckinsUpdateManyMutationInput, CheckinsUncheckedUpdateManyInput>
    /**
     * Filter which Checkins to update
     */
    where?: CheckinsWhereInput
    /**
     * Limit how many Checkins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checkins upsert
   */
  export type CheckinsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * The filter to search for the Checkins to update in case it exists.
     */
    where: CheckinsWhereUniqueInput
    /**
     * In case the Checkins found by the `where` argument doesn't exist, create a new Checkins with this data.
     */
    create: XOR<CheckinsCreateInput, CheckinsUncheckedCreateInput>
    /**
     * In case the Checkins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckinsUpdateInput, CheckinsUncheckedUpdateInput>
  }

  /**
   * Checkins delete
   */
  export type CheckinsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
    /**
     * Filter which Checkins to delete.
     */
    where: CheckinsWhereUniqueInput
  }

  /**
   * Checkins deleteMany
   */
  export type CheckinsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkins to delete
     */
    where?: CheckinsWhereInput
    /**
     * Limit how many Checkins to delete.
     */
    limit?: number
  }

  /**
   * Checkins without action
   */
  export type CheckinsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkins
     */
    select?: CheckinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkins
     */
    omit?: CheckinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data: 'data',
    horaInicio: 'horaInicio',
    horaFim: 'horaFim',
    local: 'local',
    capacidade: 'capacidade'
  };

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const ParticipantesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    eventoId: 'eventoId'
  };

  export type ParticipantesScalarFieldEnum = (typeof ParticipantesScalarFieldEnum)[keyof typeof ParticipantesScalarFieldEnum]


  export const CheckinsScalarFieldEnum: {
    id: 'id',
    participanteId: 'participanteId',
    eventoId: 'eventoId',
    horaEntrada: 'horaEntrada',
    horaSaida: 'horaSaida',
    status: 'status'
  };

  export type CheckinsScalarFieldEnum = (typeof CheckinsScalarFieldEnum)[keyof typeof CheckinsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EventosWhereInput = {
    AND?: EventosWhereInput | EventosWhereInput[]
    OR?: EventosWhereInput[]
    NOT?: EventosWhereInput | EventosWhereInput[]
    id?: IntFilter<"Eventos"> | number
    nome?: StringFilter<"Eventos"> | string
    data?: DateTimeFilter<"Eventos"> | Date | string
    horaInicio?: DateTimeFilter<"Eventos"> | Date | string
    horaFim?: DateTimeFilter<"Eventos"> | Date | string
    local?: StringFilter<"Eventos"> | string
    capacidade?: IntFilter<"Eventos"> | number
    participantes?: ParticipantesListRelationFilter
    checkins?: CheckinsListRelationFilter
  }

  export type EventosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    local?: SortOrder
    capacidade?: SortOrder
    participantes?: ParticipantesOrderByRelationAggregateInput
    checkins?: CheckinsOrderByRelationAggregateInput
  }

  export type EventosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventosWhereInput | EventosWhereInput[]
    OR?: EventosWhereInput[]
    NOT?: EventosWhereInput | EventosWhereInput[]
    nome?: StringFilter<"Eventos"> | string
    data?: DateTimeFilter<"Eventos"> | Date | string
    horaInicio?: DateTimeFilter<"Eventos"> | Date | string
    horaFim?: DateTimeFilter<"Eventos"> | Date | string
    local?: StringFilter<"Eventos"> | string
    capacidade?: IntFilter<"Eventos"> | number
    participantes?: ParticipantesListRelationFilter
    checkins?: CheckinsListRelationFilter
  }, "id">

  export type EventosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    local?: SortOrder
    capacidade?: SortOrder
    _count?: EventosCountOrderByAggregateInput
    _avg?: EventosAvgOrderByAggregateInput
    _max?: EventosMaxOrderByAggregateInput
    _min?: EventosMinOrderByAggregateInput
    _sum?: EventosSumOrderByAggregateInput
  }

  export type EventosScalarWhereWithAggregatesInput = {
    AND?: EventosScalarWhereWithAggregatesInput | EventosScalarWhereWithAggregatesInput[]
    OR?: EventosScalarWhereWithAggregatesInput[]
    NOT?: EventosScalarWhereWithAggregatesInput | EventosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Eventos"> | number
    nome?: StringWithAggregatesFilter<"Eventos"> | string
    data?: DateTimeWithAggregatesFilter<"Eventos"> | Date | string
    horaInicio?: DateTimeWithAggregatesFilter<"Eventos"> | Date | string
    horaFim?: DateTimeWithAggregatesFilter<"Eventos"> | Date | string
    local?: StringWithAggregatesFilter<"Eventos"> | string
    capacidade?: IntWithAggregatesFilter<"Eventos"> | number
  }

  export type ParticipantesWhereInput = {
    AND?: ParticipantesWhereInput | ParticipantesWhereInput[]
    OR?: ParticipantesWhereInput[]
    NOT?: ParticipantesWhereInput | ParticipantesWhereInput[]
    id?: IntFilter<"Participantes"> | number
    nome?: StringFilter<"Participantes"> | string
    email?: StringNullableFilter<"Participantes"> | string | null
    telefone?: StringNullableFilter<"Participantes"> | string | null
    eventoId?: IntFilter<"Participantes"> | number
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
    checkins?: CheckinsListRelationFilter
  }

  export type ParticipantesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    eventoId?: SortOrder
    evento?: EventosOrderByWithRelationInput
    checkins?: CheckinsOrderByRelationAggregateInput
  }

  export type ParticipantesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParticipantesWhereInput | ParticipantesWhereInput[]
    OR?: ParticipantesWhereInput[]
    NOT?: ParticipantesWhereInput | ParticipantesWhereInput[]
    nome?: StringFilter<"Participantes"> | string
    email?: StringNullableFilter<"Participantes"> | string | null
    telefone?: StringNullableFilter<"Participantes"> | string | null
    eventoId?: IntFilter<"Participantes"> | number
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
    checkins?: CheckinsListRelationFilter
  }, "id">

  export type ParticipantesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    eventoId?: SortOrder
    _count?: ParticipantesCountOrderByAggregateInput
    _avg?: ParticipantesAvgOrderByAggregateInput
    _max?: ParticipantesMaxOrderByAggregateInput
    _min?: ParticipantesMinOrderByAggregateInput
    _sum?: ParticipantesSumOrderByAggregateInput
  }

  export type ParticipantesScalarWhereWithAggregatesInput = {
    AND?: ParticipantesScalarWhereWithAggregatesInput | ParticipantesScalarWhereWithAggregatesInput[]
    OR?: ParticipantesScalarWhereWithAggregatesInput[]
    NOT?: ParticipantesScalarWhereWithAggregatesInput | ParticipantesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participantes"> | number
    nome?: StringWithAggregatesFilter<"Participantes"> | string
    email?: StringNullableWithAggregatesFilter<"Participantes"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Participantes"> | string | null
    eventoId?: IntWithAggregatesFilter<"Participantes"> | number
  }

  export type CheckinsWhereInput = {
    AND?: CheckinsWhereInput | CheckinsWhereInput[]
    OR?: CheckinsWhereInput[]
    NOT?: CheckinsWhereInput | CheckinsWhereInput[]
    id?: IntFilter<"Checkins"> | number
    participanteId?: IntFilter<"Checkins"> | number
    eventoId?: IntFilter<"Checkins"> | number
    horaEntrada?: DateTimeNullableFilter<"Checkins"> | Date | string | null
    horaSaida?: DateTimeNullableFilter<"Checkins"> | Date | string | null
    status?: EnumStatusFilter<"Checkins"> | $Enums.Status
    participante?: XOR<ParticipantesScalarRelationFilter, ParticipantesWhereInput>
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
  }

  export type CheckinsOrderByWithRelationInput = {
    id?: SortOrder
    participanteId?: SortOrder
    eventoId?: SortOrder
    horaEntrada?: SortOrderInput | SortOrder
    horaSaida?: SortOrderInput | SortOrder
    status?: SortOrder
    participante?: ParticipantesOrderByWithRelationInput
    evento?: EventosOrderByWithRelationInput
  }

  export type CheckinsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CheckinsWhereInput | CheckinsWhereInput[]
    OR?: CheckinsWhereInput[]
    NOT?: CheckinsWhereInput | CheckinsWhereInput[]
    participanteId?: IntFilter<"Checkins"> | number
    eventoId?: IntFilter<"Checkins"> | number
    horaEntrada?: DateTimeNullableFilter<"Checkins"> | Date | string | null
    horaSaida?: DateTimeNullableFilter<"Checkins"> | Date | string | null
    status?: EnumStatusFilter<"Checkins"> | $Enums.Status
    participante?: XOR<ParticipantesScalarRelationFilter, ParticipantesWhereInput>
    evento?: XOR<EventosScalarRelationFilter, EventosWhereInput>
  }, "id">

  export type CheckinsOrderByWithAggregationInput = {
    id?: SortOrder
    participanteId?: SortOrder
    eventoId?: SortOrder
    horaEntrada?: SortOrderInput | SortOrder
    horaSaida?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: CheckinsCountOrderByAggregateInput
    _avg?: CheckinsAvgOrderByAggregateInput
    _max?: CheckinsMaxOrderByAggregateInput
    _min?: CheckinsMinOrderByAggregateInput
    _sum?: CheckinsSumOrderByAggregateInput
  }

  export type CheckinsScalarWhereWithAggregatesInput = {
    AND?: CheckinsScalarWhereWithAggregatesInput | CheckinsScalarWhereWithAggregatesInput[]
    OR?: CheckinsScalarWhereWithAggregatesInput[]
    NOT?: CheckinsScalarWhereWithAggregatesInput | CheckinsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Checkins"> | number
    participanteId?: IntWithAggregatesFilter<"Checkins"> | number
    eventoId?: IntWithAggregatesFilter<"Checkins"> | number
    horaEntrada?: DateTimeNullableWithAggregatesFilter<"Checkins"> | Date | string | null
    horaSaida?: DateTimeNullableWithAggregatesFilter<"Checkins"> | Date | string | null
    status?: EnumStatusWithAggregatesFilter<"Checkins"> | $Enums.Status
  }

  export type EventosCreateInput = {
    nome: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    local: string
    capacidade: number
    participantes?: ParticipantesCreateNestedManyWithoutEventoInput
    checkins?: CheckinsCreateNestedManyWithoutEventoInput
  }

  export type EventosUncheckedCreateInput = {
    id?: number
    nome: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    local: string
    capacidade: number
    participantes?: ParticipantesUncheckedCreateNestedManyWithoutEventoInput
    checkins?: CheckinsUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    participantes?: ParticipantesUpdateManyWithoutEventoNestedInput
    checkins?: CheckinsUpdateManyWithoutEventoNestedInput
  }

  export type EventosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    participantes?: ParticipantesUncheckedUpdateManyWithoutEventoNestedInput
    checkins?: CheckinsUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventosCreateManyInput = {
    id?: number
    nome: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    local: string
    capacidade: number
  }

  export type EventosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type EventosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantesCreateInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    evento: EventosCreateNestedOneWithoutParticipantesInput
    checkins?: CheckinsCreateNestedManyWithoutParticipanteInput
  }

  export type ParticipantesUncheckedCreateInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    eventoId: number
    checkins?: CheckinsUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type ParticipantesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: EventosUpdateOneRequiredWithoutParticipantesNestedInput
    checkins?: CheckinsUpdateManyWithoutParticipanteNestedInput
  }

  export type ParticipantesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    eventoId?: IntFieldUpdateOperationsInput | number
    checkins?: CheckinsUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type ParticipantesCreateManyInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    eventoId: number
  }

  export type ParticipantesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipantesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    eventoId?: IntFieldUpdateOperationsInput | number
  }

  export type CheckinsCreateInput = {
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
    participante: ParticipantesCreateNestedOneWithoutCheckinsInput
    evento: EventosCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinsUncheckedCreateInput = {
    id?: number
    participanteId: number
    eventoId: number
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
  }

  export type CheckinsUpdateInput = {
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    participante?: ParticipantesUpdateOneRequiredWithoutCheckinsNestedInput
    evento?: EventosUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participanteId?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CheckinsCreateManyInput = {
    id?: number
    participanteId: number
    eventoId: number
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
  }

  export type CheckinsUpdateManyMutationInput = {
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CheckinsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participanteId?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParticipantesListRelationFilter = {
    every?: ParticipantesWhereInput
    some?: ParticipantesWhereInput
    none?: ParticipantesWhereInput
  }

  export type CheckinsListRelationFilter = {
    every?: CheckinsWhereInput
    some?: CheckinsWhereInput
    none?: CheckinsWhereInput
  }

  export type ParticipantesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckinsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    local?: SortOrder
    capacidade?: SortOrder
  }

  export type EventosAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidade?: SortOrder
  }

  export type EventosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    local?: SortOrder
    capacidade?: SortOrder
  }

  export type EventosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    local?: SortOrder
    capacidade?: SortOrder
  }

  export type EventosSumOrderByAggregateInput = {
    id?: SortOrder
    capacidade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventosScalarRelationFilter = {
    is?: EventosWhereInput
    isNot?: EventosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParticipantesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    eventoId?: SortOrder
  }

  export type ParticipantesAvgOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
  }

  export type ParticipantesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    eventoId?: SortOrder
  }

  export type ParticipantesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    eventoId?: SortOrder
  }

  export type ParticipantesSumOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ParticipantesScalarRelationFilter = {
    is?: ParticipantesWhereInput
    isNot?: ParticipantesWhereInput
  }

  export type CheckinsCountOrderByAggregateInput = {
    id?: SortOrder
    participanteId?: SortOrder
    eventoId?: SortOrder
    horaEntrada?: SortOrder
    horaSaida?: SortOrder
    status?: SortOrder
  }

  export type CheckinsAvgOrderByAggregateInput = {
    id?: SortOrder
    participanteId?: SortOrder
    eventoId?: SortOrder
  }

  export type CheckinsMaxOrderByAggregateInput = {
    id?: SortOrder
    participanteId?: SortOrder
    eventoId?: SortOrder
    horaEntrada?: SortOrder
    horaSaida?: SortOrder
    status?: SortOrder
  }

  export type CheckinsMinOrderByAggregateInput = {
    id?: SortOrder
    participanteId?: SortOrder
    eventoId?: SortOrder
    horaEntrada?: SortOrder
    horaSaida?: SortOrder
    status?: SortOrder
  }

  export type CheckinsSumOrderByAggregateInput = {
    id?: SortOrder
    participanteId?: SortOrder
    eventoId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type ParticipantesCreateNestedManyWithoutEventoInput = {
    create?: XOR<ParticipantesCreateWithoutEventoInput, ParticipantesUncheckedCreateWithoutEventoInput> | ParticipantesCreateWithoutEventoInput[] | ParticipantesUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipantesCreateOrConnectWithoutEventoInput | ParticipantesCreateOrConnectWithoutEventoInput[]
    createMany?: ParticipantesCreateManyEventoInputEnvelope
    connect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
  }

  export type CheckinsCreateNestedManyWithoutEventoInput = {
    create?: XOR<CheckinsCreateWithoutEventoInput, CheckinsUncheckedCreateWithoutEventoInput> | CheckinsCreateWithoutEventoInput[] | CheckinsUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: CheckinsCreateOrConnectWithoutEventoInput | CheckinsCreateOrConnectWithoutEventoInput[]
    createMany?: CheckinsCreateManyEventoInputEnvelope
    connect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
  }

  export type ParticipantesUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<ParticipantesCreateWithoutEventoInput, ParticipantesUncheckedCreateWithoutEventoInput> | ParticipantesCreateWithoutEventoInput[] | ParticipantesUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipantesCreateOrConnectWithoutEventoInput | ParticipantesCreateOrConnectWithoutEventoInput[]
    createMany?: ParticipantesCreateManyEventoInputEnvelope
    connect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
  }

  export type CheckinsUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<CheckinsCreateWithoutEventoInput, CheckinsUncheckedCreateWithoutEventoInput> | CheckinsCreateWithoutEventoInput[] | CheckinsUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: CheckinsCreateOrConnectWithoutEventoInput | CheckinsCreateOrConnectWithoutEventoInput[]
    createMany?: CheckinsCreateManyEventoInputEnvelope
    connect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipantesUpdateManyWithoutEventoNestedInput = {
    create?: XOR<ParticipantesCreateWithoutEventoInput, ParticipantesUncheckedCreateWithoutEventoInput> | ParticipantesCreateWithoutEventoInput[] | ParticipantesUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipantesCreateOrConnectWithoutEventoInput | ParticipantesCreateOrConnectWithoutEventoInput[]
    upsert?: ParticipantesUpsertWithWhereUniqueWithoutEventoInput | ParticipantesUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: ParticipantesCreateManyEventoInputEnvelope
    set?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    disconnect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    delete?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    connect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    update?: ParticipantesUpdateWithWhereUniqueWithoutEventoInput | ParticipantesUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: ParticipantesUpdateManyWithWhereWithoutEventoInput | ParticipantesUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: ParticipantesScalarWhereInput | ParticipantesScalarWhereInput[]
  }

  export type CheckinsUpdateManyWithoutEventoNestedInput = {
    create?: XOR<CheckinsCreateWithoutEventoInput, CheckinsUncheckedCreateWithoutEventoInput> | CheckinsCreateWithoutEventoInput[] | CheckinsUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: CheckinsCreateOrConnectWithoutEventoInput | CheckinsCreateOrConnectWithoutEventoInput[]
    upsert?: CheckinsUpsertWithWhereUniqueWithoutEventoInput | CheckinsUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: CheckinsCreateManyEventoInputEnvelope
    set?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    disconnect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    delete?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    connect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    update?: CheckinsUpdateWithWhereUniqueWithoutEventoInput | CheckinsUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: CheckinsUpdateManyWithWhereWithoutEventoInput | CheckinsUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: CheckinsScalarWhereInput | CheckinsScalarWhereInput[]
  }

  export type ParticipantesUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<ParticipantesCreateWithoutEventoInput, ParticipantesUncheckedCreateWithoutEventoInput> | ParticipantesCreateWithoutEventoInput[] | ParticipantesUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipantesCreateOrConnectWithoutEventoInput | ParticipantesCreateOrConnectWithoutEventoInput[]
    upsert?: ParticipantesUpsertWithWhereUniqueWithoutEventoInput | ParticipantesUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: ParticipantesCreateManyEventoInputEnvelope
    set?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    disconnect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    delete?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    connect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    update?: ParticipantesUpdateWithWhereUniqueWithoutEventoInput | ParticipantesUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: ParticipantesUpdateManyWithWhereWithoutEventoInput | ParticipantesUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: ParticipantesScalarWhereInput | ParticipantesScalarWhereInput[]
  }

  export type CheckinsUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<CheckinsCreateWithoutEventoInput, CheckinsUncheckedCreateWithoutEventoInput> | CheckinsCreateWithoutEventoInput[] | CheckinsUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: CheckinsCreateOrConnectWithoutEventoInput | CheckinsCreateOrConnectWithoutEventoInput[]
    upsert?: CheckinsUpsertWithWhereUniqueWithoutEventoInput | CheckinsUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: CheckinsCreateManyEventoInputEnvelope
    set?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    disconnect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    delete?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    connect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    update?: CheckinsUpdateWithWhereUniqueWithoutEventoInput | CheckinsUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: CheckinsUpdateManyWithWhereWithoutEventoInput | CheckinsUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: CheckinsScalarWhereInput | CheckinsScalarWhereInput[]
  }

  export type EventosCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<EventosCreateWithoutParticipantesInput, EventosUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: EventosCreateOrConnectWithoutParticipantesInput
    connect?: EventosWhereUniqueInput
  }

  export type CheckinsCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<CheckinsCreateWithoutParticipanteInput, CheckinsUncheckedCreateWithoutParticipanteInput> | CheckinsCreateWithoutParticipanteInput[] | CheckinsUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: CheckinsCreateOrConnectWithoutParticipanteInput | CheckinsCreateOrConnectWithoutParticipanteInput[]
    createMany?: CheckinsCreateManyParticipanteInputEnvelope
    connect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
  }

  export type CheckinsUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<CheckinsCreateWithoutParticipanteInput, CheckinsUncheckedCreateWithoutParticipanteInput> | CheckinsCreateWithoutParticipanteInput[] | CheckinsUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: CheckinsCreateOrConnectWithoutParticipanteInput | CheckinsCreateOrConnectWithoutParticipanteInput[]
    createMany?: CheckinsCreateManyParticipanteInputEnvelope
    connect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventosUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<EventosCreateWithoutParticipantesInput, EventosUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: EventosCreateOrConnectWithoutParticipantesInput
    upsert?: EventosUpsertWithoutParticipantesInput
    connect?: EventosWhereUniqueInput
    update?: XOR<XOR<EventosUpdateToOneWithWhereWithoutParticipantesInput, EventosUpdateWithoutParticipantesInput>, EventosUncheckedUpdateWithoutParticipantesInput>
  }

  export type CheckinsUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<CheckinsCreateWithoutParticipanteInput, CheckinsUncheckedCreateWithoutParticipanteInput> | CheckinsCreateWithoutParticipanteInput[] | CheckinsUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: CheckinsCreateOrConnectWithoutParticipanteInput | CheckinsCreateOrConnectWithoutParticipanteInput[]
    upsert?: CheckinsUpsertWithWhereUniqueWithoutParticipanteInput | CheckinsUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: CheckinsCreateManyParticipanteInputEnvelope
    set?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    disconnect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    delete?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    connect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    update?: CheckinsUpdateWithWhereUniqueWithoutParticipanteInput | CheckinsUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: CheckinsUpdateManyWithWhereWithoutParticipanteInput | CheckinsUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: CheckinsScalarWhereInput | CheckinsScalarWhereInput[]
  }

  export type CheckinsUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<CheckinsCreateWithoutParticipanteInput, CheckinsUncheckedCreateWithoutParticipanteInput> | CheckinsCreateWithoutParticipanteInput[] | CheckinsUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: CheckinsCreateOrConnectWithoutParticipanteInput | CheckinsCreateOrConnectWithoutParticipanteInput[]
    upsert?: CheckinsUpsertWithWhereUniqueWithoutParticipanteInput | CheckinsUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: CheckinsCreateManyParticipanteInputEnvelope
    set?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    disconnect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    delete?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    connect?: CheckinsWhereUniqueInput | CheckinsWhereUniqueInput[]
    update?: CheckinsUpdateWithWhereUniqueWithoutParticipanteInput | CheckinsUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: CheckinsUpdateManyWithWhereWithoutParticipanteInput | CheckinsUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: CheckinsScalarWhereInput | CheckinsScalarWhereInput[]
  }

  export type ParticipantesCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<ParticipantesCreateWithoutCheckinsInput, ParticipantesUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: ParticipantesCreateOrConnectWithoutCheckinsInput
    connect?: ParticipantesWhereUniqueInput
  }

  export type EventosCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<EventosCreateWithoutCheckinsInput, EventosUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: EventosCreateOrConnectWithoutCheckinsInput
    connect?: EventosWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ParticipantesUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<ParticipantesCreateWithoutCheckinsInput, ParticipantesUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: ParticipantesCreateOrConnectWithoutCheckinsInput
    upsert?: ParticipantesUpsertWithoutCheckinsInput
    connect?: ParticipantesWhereUniqueInput
    update?: XOR<XOR<ParticipantesUpdateToOneWithWhereWithoutCheckinsInput, ParticipantesUpdateWithoutCheckinsInput>, ParticipantesUncheckedUpdateWithoutCheckinsInput>
  }

  export type EventosUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<EventosCreateWithoutCheckinsInput, EventosUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: EventosCreateOrConnectWithoutCheckinsInput
    upsert?: EventosUpsertWithoutCheckinsInput
    connect?: EventosWhereUniqueInput
    update?: XOR<XOR<EventosUpdateToOneWithWhereWithoutCheckinsInput, EventosUpdateWithoutCheckinsInput>, EventosUncheckedUpdateWithoutCheckinsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type ParticipantesCreateWithoutEventoInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    checkins?: CheckinsCreateNestedManyWithoutParticipanteInput
  }

  export type ParticipantesUncheckedCreateWithoutEventoInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    checkins?: CheckinsUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type ParticipantesCreateOrConnectWithoutEventoInput = {
    where: ParticipantesWhereUniqueInput
    create: XOR<ParticipantesCreateWithoutEventoInput, ParticipantesUncheckedCreateWithoutEventoInput>
  }

  export type ParticipantesCreateManyEventoInputEnvelope = {
    data: ParticipantesCreateManyEventoInput | ParticipantesCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type CheckinsCreateWithoutEventoInput = {
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
    participante: ParticipantesCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinsUncheckedCreateWithoutEventoInput = {
    id?: number
    participanteId: number
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
  }

  export type CheckinsCreateOrConnectWithoutEventoInput = {
    where: CheckinsWhereUniqueInput
    create: XOR<CheckinsCreateWithoutEventoInput, CheckinsUncheckedCreateWithoutEventoInput>
  }

  export type CheckinsCreateManyEventoInputEnvelope = {
    data: CheckinsCreateManyEventoInput | CheckinsCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantesUpsertWithWhereUniqueWithoutEventoInput = {
    where: ParticipantesWhereUniqueInput
    update: XOR<ParticipantesUpdateWithoutEventoInput, ParticipantesUncheckedUpdateWithoutEventoInput>
    create: XOR<ParticipantesCreateWithoutEventoInput, ParticipantesUncheckedCreateWithoutEventoInput>
  }

  export type ParticipantesUpdateWithWhereUniqueWithoutEventoInput = {
    where: ParticipantesWhereUniqueInput
    data: XOR<ParticipantesUpdateWithoutEventoInput, ParticipantesUncheckedUpdateWithoutEventoInput>
  }

  export type ParticipantesUpdateManyWithWhereWithoutEventoInput = {
    where: ParticipantesScalarWhereInput
    data: XOR<ParticipantesUpdateManyMutationInput, ParticipantesUncheckedUpdateManyWithoutEventoInput>
  }

  export type ParticipantesScalarWhereInput = {
    AND?: ParticipantesScalarWhereInput | ParticipantesScalarWhereInput[]
    OR?: ParticipantesScalarWhereInput[]
    NOT?: ParticipantesScalarWhereInput | ParticipantesScalarWhereInput[]
    id?: IntFilter<"Participantes"> | number
    nome?: StringFilter<"Participantes"> | string
    email?: StringNullableFilter<"Participantes"> | string | null
    telefone?: StringNullableFilter<"Participantes"> | string | null
    eventoId?: IntFilter<"Participantes"> | number
  }

  export type CheckinsUpsertWithWhereUniqueWithoutEventoInput = {
    where: CheckinsWhereUniqueInput
    update: XOR<CheckinsUpdateWithoutEventoInput, CheckinsUncheckedUpdateWithoutEventoInput>
    create: XOR<CheckinsCreateWithoutEventoInput, CheckinsUncheckedCreateWithoutEventoInput>
  }

  export type CheckinsUpdateWithWhereUniqueWithoutEventoInput = {
    where: CheckinsWhereUniqueInput
    data: XOR<CheckinsUpdateWithoutEventoInput, CheckinsUncheckedUpdateWithoutEventoInput>
  }

  export type CheckinsUpdateManyWithWhereWithoutEventoInput = {
    where: CheckinsScalarWhereInput
    data: XOR<CheckinsUpdateManyMutationInput, CheckinsUncheckedUpdateManyWithoutEventoInput>
  }

  export type CheckinsScalarWhereInput = {
    AND?: CheckinsScalarWhereInput | CheckinsScalarWhereInput[]
    OR?: CheckinsScalarWhereInput[]
    NOT?: CheckinsScalarWhereInput | CheckinsScalarWhereInput[]
    id?: IntFilter<"Checkins"> | number
    participanteId?: IntFilter<"Checkins"> | number
    eventoId?: IntFilter<"Checkins"> | number
    horaEntrada?: DateTimeNullableFilter<"Checkins"> | Date | string | null
    horaSaida?: DateTimeNullableFilter<"Checkins"> | Date | string | null
    status?: EnumStatusFilter<"Checkins"> | $Enums.Status
  }

  export type EventosCreateWithoutParticipantesInput = {
    nome: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    local: string
    capacidade: number
    checkins?: CheckinsCreateNestedManyWithoutEventoInput
  }

  export type EventosUncheckedCreateWithoutParticipantesInput = {
    id?: number
    nome: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    local: string
    capacidade: number
    checkins?: CheckinsUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventosCreateOrConnectWithoutParticipantesInput = {
    where: EventosWhereUniqueInput
    create: XOR<EventosCreateWithoutParticipantesInput, EventosUncheckedCreateWithoutParticipantesInput>
  }

  export type CheckinsCreateWithoutParticipanteInput = {
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
    evento: EventosCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinsUncheckedCreateWithoutParticipanteInput = {
    id?: number
    eventoId: number
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
  }

  export type CheckinsCreateOrConnectWithoutParticipanteInput = {
    where: CheckinsWhereUniqueInput
    create: XOR<CheckinsCreateWithoutParticipanteInput, CheckinsUncheckedCreateWithoutParticipanteInput>
  }

  export type CheckinsCreateManyParticipanteInputEnvelope = {
    data: CheckinsCreateManyParticipanteInput | CheckinsCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type EventosUpsertWithoutParticipantesInput = {
    update: XOR<EventosUpdateWithoutParticipantesInput, EventosUncheckedUpdateWithoutParticipantesInput>
    create: XOR<EventosCreateWithoutParticipantesInput, EventosUncheckedCreateWithoutParticipantesInput>
    where?: EventosWhereInput
  }

  export type EventosUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: EventosWhereInput
    data: XOR<EventosUpdateWithoutParticipantesInput, EventosUncheckedUpdateWithoutParticipantesInput>
  }

  export type EventosUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    checkins?: CheckinsUpdateManyWithoutEventoNestedInput
  }

  export type EventosUncheckedUpdateWithoutParticipantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    checkins?: CheckinsUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type CheckinsUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: CheckinsWhereUniqueInput
    update: XOR<CheckinsUpdateWithoutParticipanteInput, CheckinsUncheckedUpdateWithoutParticipanteInput>
    create: XOR<CheckinsCreateWithoutParticipanteInput, CheckinsUncheckedCreateWithoutParticipanteInput>
  }

  export type CheckinsUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: CheckinsWhereUniqueInput
    data: XOR<CheckinsUpdateWithoutParticipanteInput, CheckinsUncheckedUpdateWithoutParticipanteInput>
  }

  export type CheckinsUpdateManyWithWhereWithoutParticipanteInput = {
    where: CheckinsScalarWhereInput
    data: XOR<CheckinsUpdateManyMutationInput, CheckinsUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type ParticipantesCreateWithoutCheckinsInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    evento: EventosCreateNestedOneWithoutParticipantesInput
  }

  export type ParticipantesUncheckedCreateWithoutCheckinsInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    eventoId: number
  }

  export type ParticipantesCreateOrConnectWithoutCheckinsInput = {
    where: ParticipantesWhereUniqueInput
    create: XOR<ParticipantesCreateWithoutCheckinsInput, ParticipantesUncheckedCreateWithoutCheckinsInput>
  }

  export type EventosCreateWithoutCheckinsInput = {
    nome: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    local: string
    capacidade: number
    participantes?: ParticipantesCreateNestedManyWithoutEventoInput
  }

  export type EventosUncheckedCreateWithoutCheckinsInput = {
    id?: number
    nome: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    local: string
    capacidade: number
    participantes?: ParticipantesUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventosCreateOrConnectWithoutCheckinsInput = {
    where: EventosWhereUniqueInput
    create: XOR<EventosCreateWithoutCheckinsInput, EventosUncheckedCreateWithoutCheckinsInput>
  }

  export type ParticipantesUpsertWithoutCheckinsInput = {
    update: XOR<ParticipantesUpdateWithoutCheckinsInput, ParticipantesUncheckedUpdateWithoutCheckinsInput>
    create: XOR<ParticipantesCreateWithoutCheckinsInput, ParticipantesUncheckedCreateWithoutCheckinsInput>
    where?: ParticipantesWhereInput
  }

  export type ParticipantesUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: ParticipantesWhereInput
    data: XOR<ParticipantesUpdateWithoutCheckinsInput, ParticipantesUncheckedUpdateWithoutCheckinsInput>
  }

  export type ParticipantesUpdateWithoutCheckinsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: EventosUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type ParticipantesUncheckedUpdateWithoutCheckinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    eventoId?: IntFieldUpdateOperationsInput | number
  }

  export type EventosUpsertWithoutCheckinsInput = {
    update: XOR<EventosUpdateWithoutCheckinsInput, EventosUncheckedUpdateWithoutCheckinsInput>
    create: XOR<EventosCreateWithoutCheckinsInput, EventosUncheckedCreateWithoutCheckinsInput>
    where?: EventosWhereInput
  }

  export type EventosUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: EventosWhereInput
    data: XOR<EventosUpdateWithoutCheckinsInput, EventosUncheckedUpdateWithoutCheckinsInput>
  }

  export type EventosUpdateWithoutCheckinsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    participantes?: ParticipantesUpdateManyWithoutEventoNestedInput
  }

  export type EventosUncheckedUpdateWithoutCheckinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    participantes?: ParticipantesUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type ParticipantesCreateManyEventoInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
  }

  export type CheckinsCreateManyEventoInput = {
    id?: number
    participanteId: number
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
  }

  export type ParticipantesUpdateWithoutEventoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    checkins?: CheckinsUpdateManyWithoutParticipanteNestedInput
  }

  export type ParticipantesUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    checkins?: CheckinsUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type ParticipantesUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckinsUpdateWithoutEventoInput = {
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    participante?: ParticipantesUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinsUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    participanteId?: IntFieldUpdateOperationsInput | number
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CheckinsUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    participanteId?: IntFieldUpdateOperationsInput | number
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CheckinsCreateManyParticipanteInput = {
    id?: number
    eventoId: number
    horaEntrada?: Date | string | null
    horaSaida?: Date | string | null
    status: $Enums.Status
  }

  export type CheckinsUpdateWithoutParticipanteInput = {
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    evento?: EventosUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinsUncheckedUpdateWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CheckinsUncheckedUpdateManyWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    horaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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