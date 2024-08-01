<h2 align="center">Option, Result, and Either types for Typescript</h2>

<p align="center">
  <b>Zero dependencies</b> • <b>Lightweight</b> • <b>Functional</b>
</p>

---

## Install

```sh
npm install ts-monads
```

## Getting started

### The `Option<T>` type

Type `Option` represents an optional value: every `Option` is either `Some` and contains a value, or `None`, and does not.

```ts
import { Option, Some, None } from "ts-monads";

const divide = (a: number, b: number): Option<number> => {
  if (b === 0) {
    return None;
  } else {
    return Some(a / b);
  }
};

const result: Option<number> = divide(6.0, 2.0);

// Match the result
const total = result.match({
  Some: (value) => `Total: ${value}`,
  None: "Division by 0.",
});

total; // "Total: 3"
```

### The `Result<T, E>` type

`Result<T, E>` is the type used for returning and propagating errors. It is an enum with the variants, `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value.

```ts
import { Result, Ok, Err } from "ts-monads";

const parseJSON<T extends object> = (object: string): Result<T, string> => {
    try {
        const value = JSON.parse(value);
        return OK(value)
    } catch (e) {
        return Err('Invalid JSON string.')
    }
};

const jsonObject = '{ "a": 1 }';

parseJSON(jsonObject, "b"); // Ok({ a: 1 })
parseJSON(undefined); // Err("Invalid JSON string.")
```

### The `Either<L, R>` type

The enum `Either` with variants `Left` and `Right`. It is a powerful way to handle operations that can result in two distinctly different types of outcomes.

```ts
import { Either, Left, Right } from "ts-monads";

const updateUser = async (
  userId: string,
): Promise<Either<{ status: 200 }, { status: 404 }>> => {
  const existentUser = findUser(userId);

  if (!existentUser) {
    return Left({ status: 404 });
  }

  return Right({ status: 200 });
};

const result = await findUser("1");

const { status } = result.match({
  Left: (errCode) => `Error: ${errCode}`,
  Right: (status) => `Status: ${status}`,
});

status; // "Status: 200"
```
