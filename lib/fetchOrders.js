async function fetchOrders() {
    const res = await fetch(`https://altclan-brands-api-1-1.onrender.com/api/orders/`)
    const data = await res.json()

    if (data.err) {
        const error = data.err
        throw error
    }

    return data

}

export default fetchOrders