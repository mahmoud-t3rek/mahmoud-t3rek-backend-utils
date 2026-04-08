#  @mahmoud/backend-utils

---

## Installation

```bash
npm install mahmoud-backend-utils
```

---

##  Features

* Unified API response format
* Clean and reusable error handling
* Works with Express & NestJS
* Custom AppError class
* Async handler for Express
* Exception filter for NestJS
* Full TypeScript support

---

##  Quick Start

# Success Response

```ts
import { success } from 'mahmoud-backend-utils';

return success({ id: 1, name: 'Mahmoud' }, 'User fetched');
```

```json
{
  "success": true,
  "message": "User fetched",
  "data": {
    "id": 1,
    "name": "Mahmoud"
  },
  "statusCode": 200
}
```

---

## Error Response

```ts
import { fail } from 'mahmoud-backend-utils';

return fail('Something went wrong', 500);
```

---

# AppError

```ts
import { AppError } from 'mahmoud-backend-utils';

throw new AppError('User not found', 404);
```

---

## Express Example

```ts
import express from 'express';
import { success, asyncHandler, AppError } from 'mahmoud-backend-utils';

const app = express();

app.get(
  '/user',
  asyncHandler(async (req, res) => {
    return res.json(success({ id: 1 }, 'User fetched'));
  })
);

app.get(
  '/error',
  asyncHandler(async () => {
    throw new AppError('User not found', 404);
  })
);
```

---

##  NestJS Example

```ts
import { Controller, Get } from '@nestjs/common';
import { success } from 'mahmoud-backend-utils';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return success({ id: 1 }, 'User fetched');
  }
}
```

##  Author

Maintained by **Mahmoud Tarek**.

---

##  Contributing

Currently, this project is maintained by a single contributor.

If you'd like to contribute in the future, feel free to open an issue or pull request.

---

## 📄 License

MIT © Mahmoud
