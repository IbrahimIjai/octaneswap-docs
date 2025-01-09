# Concentrated Liquidity

<video width="100%" height="100%" playsInline controls loop>
  <source src="https://gateway.pinata.cloud/ipfs/QmTf6EueKk5ZJ2KQwt1ZCHxRaogYVRci2U5uKRo8NeCmoB" />
  Your browser does not support the video tag.
</video>

---

## What is Concentrated Liquidity?

Imagine you're running a lemonade stand at a summer fair. You know most of your customers will show up between 2 PM and 4 PM when the weather is hottest. Would you prepare a ton of lemonade for the whole day, or focus on making enough for the busiest hours?

That’s the idea behind concentrated liquidity—putting your resources (liquidity) exactly where they’re needed the most.

In traditional liquidity pools (like Uniswap v2), liquidity is spread evenly across the entire price range—from 0 to infinity. While this ensures trades can happen at any price, a lot of the liquidity just sits there unused, especially for assets that have stable or predictable prices (e.g., stablecoin pairs like USDC/DAI).

With **concentrated liquidity**, you focus your liquidity in specific price ranges where most of the trading happens. For example:

- For a **stablecoin pair**, you might concentrate liquidity between **$0.99 and $1.01**.
- This makes your liquidity much more effective, earning you more fees with the same amount of capital.

---

## Why Concentrated Liquidity Matters

1. **Deeper Liquidity in Key Areas**  
   By concentrating liquidity in popular price ranges, traders experience less slippage and better prices.

2. **Higher Returns for Liquidity Providers (LPs)**  
   LPs earn more fees because their liquidity is always "where the action is."

3. **Efficient Use of Capital**  
   Instead of spreading liquidity thin, LPs can maximize their impact by targeting specific ranges.

---

## Active vs. Inactive Liquidity

### Active Liquidity

Your liquidity earns fees only when the price is within your chosen range. This is called **"in-range" liquidity**.

### Inactive Liquidity

If the price moves outside your chosen range, your liquidity becomes inactive:

- You stop earning fees.
- Your liquidity is held entirely in one of the two assets (depending on which direction the price moved).

> 💡 **Example:**  
> Let’s say you concentrate liquidity in the **$0.99–$1.01** range.
>
> - If the price stays within that range, your liquidity is active, and you earn fees.
> - If the price drops below **$0.99** or rises above **$1.01**, your liquidity becomes inactive until the price re-enters your range.

---

## Ticks: The Building Blocks of Price Ranges

Think of **ticks** as the gridlines on a price chart. They divide the price spectrum into smaller intervals, making it easier to define your liquidity range.

### How Ticks Work

- Each tick represents a **0.01% change in price**.
- LPs choose a **lower tick** and an **upper tick** to define the price range of their liquidity.

### What Happens When Prices Move?

- As prices move within a tick range, the pool swaps assets and uses the liquidity in that range.
- When the price crosses into a new tick, the system activates the liquidity in that range and continues swapping.

### Tick Spacing and Fees

- **Lower fees:** Allow narrower tick spacing, making them ideal for stablecoin pairs where prices are predictable.
- **Higher fees:** Allow wider tick spacing, suitable for volatile pairs with larger price movements.

> 💡 **Fun Fact:**  
> Narrow tick spacing increases precision and capital efficiency. This means traders in stablecoin pairs enjoy better prices and lower slippage.

---

## Benefits of Concentrated Liquidity

### For Traders

- **Lower Slippage:** Tighter liquidity in key areas means better trade execution.
- **Improved Prices:** Especially for stablecoins or hig
