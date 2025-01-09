---
title: Understanding pOct Fees
description: Learn how pOct’s dynamic fee structure works and how it benefits liquidity providers and traders.
---

# Understanding pOct Fees

pOct implements a dynamic fee structure designed to optimize liquidity provision and trading across different types of asset pairs. Understanding how fees work is essential for both **traders** and **liquidity providers**.

---

## 💰 Swap Fees

### How Swap Fees Work

Swap fees on pOct are:

- **Charged on every trade**: A small fee is taken from each trade.
- **Distributed to liquidity providers**: Fees are paid out to liquidity providers based on their share of the active liquidity in the pool.
- **Only earned by in-range liquidity positions**: Liquidity providers earn fees only when their liquidity is within the current price range.
- **Collected separately from the pool**: Fees are not reinvested automatically but must be manually collected.

![Fee collection interface](./images/fee-collection.png)

---

### Fee Distribution

#### Active Liquidity

- Only positions with liquidity in the **current price range** earn fees.
- Fees are **distributed proportionally** based on the amount of liquidity provided.
- If the price moves outside your set range, you stop earning fees.
- Fees will resume when the price re-enters your range.

> ⚠️ **Note**: Monitoring your position is crucial for maintaining active liquidity.

---

### Fee Collection

- **Manual collection**: Fees are not automatically reinvested and must be manually collected by the position owner.
- You can collect fees **at any time**, with **no time limit** for collection.

---

## 📊 Pool Fee Tiers

pOct offers multiple fee tiers for each token pair to better serve different asset types. The following fee tiers are available:

| Fee Tier  | Best For         | Characteristics                                        |
| --------- | ---------------- | ------------------------------------------------------ |
| **0.01%** | Stablecoin pairs | Minimal price deviation, high volume, low risk         |
| **0.05%** | Correlated pairs | Small price movements, regular volume, medium-low risk |
| **0.3%**  | Standard pairs   | Moderate volatility, regular volume, standard risk     |
| **1%**    | Exotic pairs     | High volatility, lower volume, higher risk             |

![Fee tier selection during pool creation](./images/fee-tier-selection.png)

---

### Choosing the Right Fee Tier

#### For Stablecoin Pairs (0.01%)

- Example pairs: **USDC/USDT**, **DAI/USDC**, and other stable-to-stable pairs.
- **Benefits**:
  - Low fees attract more volume.
  - Competitive with centralized exchanges (CEX).
  - Ideal for arbitrage trading.

#### For Correlated Pairs (0.05%)

- Example pairs: **Liquid wrapped assets** and **similar asset variations**.
- **Benefits**:
  - Balanced volume and earnings.
  - Suitable for assets that tend to move together.

#### For Standard Pairs (0.3%)

- Example pairs: **ETH/USDC** and other major token pairs.
- **Benefits**:
  - Standard market fee rate.
  - A good balance between fees and volume.

#### For Exotic Pairs (1%)

- Example pairs: **New tokens**, **highly volatile assets**, **low liquidity pairs**.
- **Benefits**:
  - Higher compensation for the increased risk.
  - Protection against market manipulation.

---

## 📈 Fee Optimization Strategies

### For Liquidity Providers

#### Fee Tier Selection

- **Consider asset volatility**: Stable assets benefit from lower fees, while volatile ones might justify higher fees.
- **Analyze trading volume**: Higher-volume pairs may attract more trades, but lower fees may result in higher competition.
- **Evaluate competition**: Consider what competitors are offering in similar pairs.
- **Monitor fee earnings**: Regularly assess the fees you’re earning from your liquidity provision.

#### Position Management

- **Keep liquidity in range**: Ensure your liquidity is within the current price range to earn fees.
- **Monitor fee accumulation**: Track your earnings from the pool and decide when to collect fees.
- **Regular fee collection**: Don’t leave fees uncollected for too long.
- **Adjust ranges based on earnings**: Optimize your position size and range for better returns.

![Fee earnings dashboard](./images/fee-earnings-dashboard.png)

---

### For Traders

#### Minimizing Costs

- **Choose the right fee tiers**: Select the most suitable tier based on the assets being swapped.
- **Consider price impact**: Evaluate how much the price may shift as a result of the trade.
- **Time trades during high liquidity**: Try to execute trades when liquidity is highest to minimize slippage.
- **Use limit orders**: Where available, use limit orders to control your trade execution and price.

#### Route Optimization

- **Smart router**: The pOct smart router finds the best trade paths, potentially splitting trades across multiple fee tiers to minimize cost.

---

## 📚 Additional Resources

- For more information on **fee structure mechanics** and the **risk of impermanent loss**, check out our [Risk Guide](./risk-guide).

---
