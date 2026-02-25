---
title: Quick Start
description: "Get up and running with Minions Bundle: Crm in minutes"
---

## TypeScript

```typescript
import { createClient } from '@mxn2020/minions-bundles-crm-sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_bundles_crm import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
minions-bundles-crm info
```
