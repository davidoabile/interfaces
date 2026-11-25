# Profit Guard — Promotion Projection to Shopify (Metafield Strategy)

## Objective

Enable storefront and POS to display active promotions by projecting Profit Guard (PG) policies into Shopify, without making Shopify the source of truth.

---

# CORE PRINCIPLE

```text
Profit Guard Policy = Source of Truth
Shopify Metafields = Read-only Display Layer
```

---

# WHY NOT STORE LOGIC IN SHOPIFY

Shopify metafields:
- are not deterministic engines
- cannot enforce financial correctness
- can become stale

Therefore:

```text
Metafields = projection (cache), not execution
```

---

# WHEN TO WRITE METAFIELDS

Only when:

```text
policy_status = ACTIVE
starts_at <= now
ends_at > now
```

---

# WHEN TO REMOVE

On:

```text
paused
expired
disabled
```

---

# METAFIELD STRUCTURE

Namespace:

```text
profit_guard
```

Key:

```text
active_promotions
```

Type:

```text
json
```

---

# PRODUCT METAFIELD EXAMPLE

```json
{
  "updated_at": "2026-05-04T00:00:00Z",
  "source": "profit_guard",
  "promotions": [
    {
      "policy_id": "pg_pol_123",
      "type": "PERCENT_OFF",
      "discount": {
        "kind": "PERCENT",
        "value": 20
      },
      "starts_at": "2026-05-04T00:00:00Z",
      "ends_at": "2026-05-05T00:00:00Z",
      "display": {
        "badge": "20% off",
        "message": "Birthday sale"
      }
    }
  ]
}
```

---

# VARIANT METAFIELD EXAMPLE

```json
{
  "promotions": [
    {
      "policy_id": "pg_pol_123",
      "variant_id": "gid://shopify/ProductVariant/456",
      "discount": {
        "kind": "PERCENT",
        "value": 20
      }
    }
  ]
}
```

---

# BUY X GET Y (BOGO)

## Condition Product

```json
{
  "promotions": [
    {
      "type": "BUY_X_GET_Y",
      "role": "CONDITION",
      "message": "Buy this and get X free",
      "action_product_id": "gid://shopify/Product/999"
    }
  ]
}
```

## Action Product

```json
{
  "promotions": [
    {
      "type": "BUY_X_GET_Y",
      "role": "ACTION",
      "message": "Free when you buy Product X",
      "condition_product_id": "gid://shopify/Product/123"
    }
  ]
}
```

---

# OPTIONAL (ADVANCED)

Use Metaobjects:

```text
Metaobject: pg_promotion_campaign
Metafield: reference to campaign
```

---

# DO NOT EXPOSE

Never include:

```text
COGS
margin
risk score
internal logic
```

---

# WORKFLOW

```text
1. Policy created
2. Approved
3. Becomes active
4. Projection engine writes metafields
5. Storefront reads
6. Policy ends
7. Metafields cleared
```

---

# FINAL ARCHITECTURE

```text
Policy Engine → Evaluation → Projection Engine → Shopify Metafields → Storefront/POS
```

---

# POSITIONING

```text
Profit Guard controls decisions
Shopify displays promotions
```
