import { useEffect, useState } from 'react'

export const useCurrency = (currency) => {
  const [currencyData, setCurrencyData] = useState({})

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((data) => data.json())
    .then((res) => setCurrencyData(res[currency]))
  }, [currency])

  return currencyData
}