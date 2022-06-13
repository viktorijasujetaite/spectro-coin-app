# spectro-coin-app

## Requirements

- Use Redux or React Context to share data via screens
- Create a global solution for price fetching
- Facilitate any design library to have a better application look
- Pretend that a currency list can scale to 100 different currencies and provide an optimal solution for large lists rendering
= Get additional points by covering functionality with unit tests

## Application should have two screens (views)

- Wallet screen:
  1. Total Balance
  2. List of 4 crypto currencies (Clicking on list item should open currency screen)

- Currency screen:
  1. Live currency exchange calculation - enter value and see total value in USD of currency amount.
    Example - Bitcoin currency screen after entering 2.4 should show the formatted value in USD of 2.4*Bitcoin USD price

### Data

- Demo balances for wallet screen:
    Bitcoin - 0.31244124
    Banker - 131231567
    Pax Dollar - 0.32
    Ethereum - 0.327834478541236547

- Prices:
  <https://spectrocoin.com/scapi/ticker/BTC/USD>
  <https://spectrocoin.com/scapi/ticker/ETH/USD>
  <https://spectrocoin.com/scapi/ticker/USDP/USD>
  <https://spectrocoin.com/scapi/ticker/BNK/USD>
  